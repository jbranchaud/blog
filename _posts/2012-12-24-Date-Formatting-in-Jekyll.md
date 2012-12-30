---
layout: post
title: Date Formatting in Jekyll
summary: A tutorial on formatting the date for a Jekyll post.
hn-discussion:
---

Date formatting for Jekyll is done using the
[Liquid Template Engine](https://github.com/Shopify/liquid). It is easy enough
to display the date of a post by simply inserting
{% raw %}`{{ page.date }}`{% endraw %}
right
into the page's markdown (or whatever it is that you are writing the page in).
The result is a string like this: `{{ page.date }}`. Simple enough, but rather
ugly and verbose.

It is no problem to make this a bit more concise, just tell it that you want
to use the default date format like so:
{% raw %} `{{ page.date | date_to_string }}` {% endraw %}.
Using the `date_to_string` format will produce a string like this:
`{{ page.date | date_to_string }}`. Definitely an improvement, but likely not
the format you are looking for.

So, let's explore some other formatting options.

For starters, there are a couple of built in formats like the following:

{% raw %}`{{ page.date | date: "%c" }}`{% endraw %} &rarr;
`{{ page.date | date: "%c" }}`

{% raw %}`{{ page.date | date: "%x" }}`{% endraw %} &rarr;
`{{ page.date | date: "%x" }}`

Again, these are okay, but they don't give us much flexibility. We can get
more flexibility by using custom date formatting provided by this templating
engine.

Say for instance, that you
want the day of the week along with the abbr. month and day like
`{{ page.date | date: "%A, %b %d" }}`. This is achieved with the following
custom date formatting:

{% raw %}`{{ page.date | date: "%A, %b %d" }}`{% endraw %}

Or you can format the date like `{{ page.date | date: "%B %d, %Y" }}` with:

{% raw %}`{{ page.date | date: "%B %d, %Y" }}`{% endraw %}

Custom formatting with the Liquid Template Engine is great because it gives
you tons of flexibility when it comes to formatting the way dates are
displayed on your webpage.

A full listing of the date formatting options available to you can be found
on Liquid Template Engine's
[date syntax wiki](https://github.com/shopify/liquid/wiki/liquid-for-designers).

In the meantime, here are some other quick examples that I have thrown
together:

{% raw %}`{{ page.date | date: "%m-%d-%y" }}`{% endraw %} &rarr; 
`{{ page.date | date: "%m-%d-%y" }}`

{% raw %}`{{ page.date | date: "%m/%d/%Y" }}`{% endraw %} &rarr; 
`{{ page.date | date: "%m/%d/%Y" }}`

{% raw %}
`{{ page.date | date: "the %d day of %B in the year of our Lord %Y" }}`
{% endraw %}

&rarr;
`{{ page.date | date: "the %d day of %B in the year of our Lord %Y" }}`

Also, try wrapping these in html/css to get some extra panache:

{% raw %}
`{{ page.date | date: "%A <small style='color: lightgray;'>%m/%d/%y</small>" }}`
{% endraw %}

&rarr;
{{ page.date | date: "%A <small style='color: lightgray;'>%m/%d/%y</small>" }}

Have fun playing with different combinations of date elements and even try
injecting some time elements (`%X`, `%Z`, etc.) if it fits your use case.

