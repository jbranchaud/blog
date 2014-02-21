---
layout: post
title: Java's Type Erasure
summary: Java generics are great, but make sure you know about type erasure.
---

So Java has this funny little feature called type erasure which essentially boils
down to the concept that once a program with type generics is compiled, the
resulting bytecode will no longer know about the specific types.

Generics in Java are great because they allow you to make your code more
explicit and understandable. They help bring a variety of errors from the
runtime realm up to compile time. If you are writing Java code, you are
probably already using them and you should continue to do so.

I have known about and used generics about as long as I have used Java, but
type erasure was an aspect of generics to which I was not privy. I am
writing this post because I have a feeling that many people using generics
are also not aware of type erasure.

<!-- more -->

Let's do a quick litmus test. Does the following code compile?

{% gist 5654036 %}

Well, of course it does. Even though the methods have the same name, we can
overload them with different parameters. By using different parameters, each
of the methods has a different method signature. That's good enough.

What about the next code snippet, does it compile?

{% gist 5654026 %}

It, in fact, does *not* compile because the two methods have identical
method signatures. The methods might look like they have different method
signatures since the lists contain different types, but it is type erasure
that leaves them looking identical to the compiler.

The method signatures of the first two methods will look something like:

    printItem(java.lang.Integer)
    printItem(java.lang.String)

They are clearly different. The method signatures on the second set of
methods are not so different though:

    printList(java.util.List<E>)
    printList(java.util.List<E>)

The compiler is going to abstract away the specific types, leaving itself to
know nothing more than that we've got a list of Objects.

Now you know and knowledge is power (or something cliche like that).
Continue to use the
great tools and features that you use everyday, but also make sure to dig in
and better understand more fully what it is that you are using.
