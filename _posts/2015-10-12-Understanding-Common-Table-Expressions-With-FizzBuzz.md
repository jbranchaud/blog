---
layout: post
title: Understanding Common Table Expressions With FizzBuzz
summary: Using FizzBuzz to explain CTEs, a powerful, but unintuitive PostgreSQL feature
---

_This originally appeared as [Understanding Common Table Expressions With
FizzBuzz](https://hashrocket.com/blog/posts/understanding-common-table-expressions-with-fizzbuzz)
on the [Hashrocket](https://hashrocket.com) blog._

For a long time, I avoided trying to understand what common table
expressions were or how they worked. The name alone was intimidating. I
figured I could just get by with the database features supported by my ORM.
Better that way; I won't have to get my hands dirty with all that raw SQL.

It turns out that I was missing out on some solid database features by
avoiding all that raw SQL goodness. Common table expressions (CTEs) are a
potent feature of PostgreSQL and most other modern relational databases. By
avoiding features like CTEs, I was treating Postgres like a dumb data store
instead of the powerful computation engine that it is. CTEs are one Postgres
feature that epitomize this power.

The PostgreSQL documentation gives the following description of common table
expressions:

> [CTEs] can be thought of as defining temporary tables that exist just for
> one query.

That sounds nice, but it undersells what we can do with CTEs once we
understand how they work. Let's interact with some concrete examples. You'll
want to pop open a `psql` session for this. Use `\e` in `psql` to edit the
SQL in your default editor.

For a first example, how about something straightforward like a CTE that
counts to 100:

```sql
with numbers as (
  select generate_series(1,100)
)
select * from numbers;
```

This results in:

```sql
 generate_series
-----------------
               1
               2
               3
             ...
```

all the way up to `100`.

Sure, that example isn't all that exciting. We could easily achieve the same
with a simpler looking query that involves a sub-select. Nevertheless, we
can see how the temporary table constructed by the CTE is visually set apart
from the rest of the query and its namespace (`numbers`) made explicit. This
temporary table `numbers` now has the set of integers from `1` to `100` from
which we make our selection -- all of them.

We depart from what can be achieved with mere sub-selects when we employ the
`recursive` option. By making a CTE recursive, it essentially becomes a
_dynamically-built_ temporary table. With a recursive CTE, we can achieve
the same as above, but doing so on the fly and without the `generate_series`
function:

```sql
with recursive numbers (x) as (
  select 1
  union
  select x + 1
  from numbers
  where x < 100
)
select * from numbers;
```

That is a funky looking query, so let's break it down.

I've added in the `recursive` keyword to declare that this will be a
recursive CTE. I've also named the single column of the CTE as `x`. If there
were more columns, I could include them with separating commas. This makes
it so that I can reference the individual columns within the CTE.

The end of the query looks the same, so it's just the internals of the CTE
that we have left to dissect. So let's take a look at that starting from the
top.

The `select 1` means we start with a single column, single row table that
contains `1`. This provides a base on which the recursive part of the CTE
can build.

This base table is then unioned with a dynamically-built table where each
row is _recursively_ computed as `1` added to the row before it (`select x +
1`). This process happens until some terminating condition is met. In this
case, that terminating condition is when the value of the latest `x` reaches
`100` (`where x < 100`).

The end result is a temporary table, `numbers`, with the values from `1` to
`100`. We can select from this dynamically generated temporary table like we
do any other table. If we only want the rows where `x` is greater than `50`,
we just query this table like we do any other table -- `select * from
numbers where x > 50`. In our case, we want to grab everything -- all 100
rows -- which we can do with `select * from numbers`. We wanted a selection
that included the values from `1` to `100` and now we've got it.

Let that soak in for a moment. We just dynamically built a temporary table
of values where each value was an individual computation based on previously
computed values. And we can do a lot more than just add `1` to `x`. We can
fill the CTE with all kinds of formulas and logic in order to build a
temporary table full of interesting and useful data. That's powerful. This
means that with a little SQL we can do a lot of fancy stuff right in the
database. Better yet, we can avoid expensive and complicated trips between
the database and some script or process that we would otherwise rely on to
build that intermediate set of data.

Let's see what it means to add some logic and formulas to our CTE by taking
our existing query a step further. How about solving the
[FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz#Programming_interviews)
programming challenge? We've already got the set of numbers from `1` to
`100`; they just need to be transformed into `Fizz`, `Buzz`, and `FizzBuzz`.

So let's start with `Fizz`. The rule is that any value that is evenly
divisible by `3` should be represented by `Fizz` (we'll ignore the
`FizzBuzz` rule for the moment). We can know that the given value is
divisible by `3` if we take the modulo of `3` and the result is `0`. A list
of values and whether or not they are divisible by `3` is a good starting
point.

```sql
with recursive fizzbuzz (num,val) as (
  select 0, false
  union
  select (num + 1),
    (num + 1) % 3 = 0
  from fizzbuzz
  where num < 100
)
select num, val from fizzbuzz where num > 0;
```

The result with just the first 10 rows:

```
 num | val
-----+-----
   1 | f
   2 | f
   3 | t
   4 | f
   5 | f
   6 | t
   7 | f
   8 | f
   9 | t
  10 | f
...
```

Great. Now we want to display `Fizz` whenever there is a `true`, otherwise
leave the value as is. We can use a `case` (`switch`) statement to populate
the second row accordingly.

```sql
with recursive fizzbuzz (num,val) as (
  select 0, '0'
  union
  select (num + 1),
    case
      when (num + 1) % 3 = 0 then 'Fizz'
      else (num + 1)::text
    end
  from fizzbuzz
  where num < 100
)
select num, val from fizzbuzz where num > 0;
```

The result with just the first 10 rows:

```
 num | val
-----+------
   1 | 1
   2 | 2
   3 | Fizz
   4 | 4
   5 | 5
   6 | Fizz
   7 | 7
   8 | 8
   9 | Fizz
  10 | 10
...
```

This is really close to what we want. By incorprating the rules for `Buzz`
and `FizzBuzz`, we should have what we are looking for. That can be achieved
by extending the `case` statement a bit further for values of `5` and `15`.

```sql
with recursive fizzbuzz (num,val) as (
  select 0, '0'
  union
  select (num + 1),
    case
      when (num + 1) % 15 = 0 then 'FizzBuzz'
      when (num + 1) % 5  = 0 then 'Buzz'
      when (num + 1) % 3  = 0 then 'Fizz'
      else (num + 1)::text
    end
  from fizzbuzz
  where num < 100
)
select val from fizzbuzz where num > 0;
```

The result out to 20 rows:

```
 num |   val
-----+----------
   1 | 1
   2 | 2
   3 | Fizz
   4 | 4
   5 | Buzz
   6 | Fizz
   7 | 7
   8 | 8
   9 | Fizz
  10 | Buzz
  11 | 11
  12 | Fizz
  13 | 13
  14 | 14
  15 | FizzBuzz
  16 | 16
  17 | 17
  18 | Fizz
  19 | 19
  20 | Buzz
...
```

And there you have it, FizzBuzz solved with PostgreSQL. Try that out at your
next programming job interview.

CTEs are great for a lot more than solving FizzBuzz. Non-recursive CTEs
alone can be used to simplify and dry up complicated queries that would
otherwise involve many nested sub-selects[^1]. Recursive CTEs allow you to
do things in-database that simply aren't possible with other SQL constructs
(e.g. sub-selects). The possibilities include but are not limited to
generating reports from data aggregated from many tables and transforming
data when migrating from one schema to another. This makes them a valuable
addition to your SQL repertoire. CTEs are even more powerful than I've
illustrated. To see some other cool capabilities of CTEs, check out this
post on [Writeable Common Table
Expressions](http://hashrocket.com/blog/posts/writable-common-table-expressions).

[^1]: It is my understanding that the Postgres query planning engine
  optimizes sub-selects differently than `with` queries, which may have
  performance implications. That is, sub-selects may be more aggressively
  optimized. That being said, CTEs generally reduce round-trips to the
  database and simplify SQL code, so unless you have hard performance
  numbers saying otherwise, CTEs are likely still a win.
