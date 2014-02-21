---
layout: post
title: Enabling Local File Access While Developing Javascript
summary: While learning d3.js, I ran into a wall trying to access local CSV files.
hn-discussion:
tags:
- d3
- d3js
---

I decided to learn how to use [d3.js](https://github.com/mbostock/d3)
this weekend. I found a fantastic
[introductory tutorial](http://alignedleft.com/tutorials/d3/) by
[Scott Murray](http://alignedleft.com/) that doesn't assume anything
about your knowledge and explains each piece in great detail.

Clearly, if you are new to d3, I would definitely recommend this
tutorial.

All the examples in the tutorial use data that is hardcoded into
the particular html page. 
So, you get to the end of the tutorial and you are left wondering
how you are supposed to access data that is in other files.

<!-- more -->

This is easy enough. There are a number of ways to do this. You
might as well use `d3.text()`, but there are also more specific
methods like for CSV and TSV (for more details, see the
[API reference](https://github.com/mbostock/d3/wiki/Requests)).

Go ahead and give this a try. Open up the resulting page in your
favorite browser. It's not showing up, why?

Your browser isn't happy because it cannot load your local file.
It is trying to use the XMLHttpRequest for this local file, but
it cannot do this because cross origin requests are only supported
for HTTP requests. In other words, your `file://` request isn't
good enough.

You could always drag your files over to your favorite VPS (mine is
[Linode](http://www.linode.com/)), but let's count out that option
since we are trying to do this locally. Instead, we need to do what
[mbostock](https://github.com/mbostock) refers to on the
[main wiki page](https://github.com/mbostock/d3/wiki) for d3:

> When developing locally, note that your browser may enforce strict permissions for
> reading files out of the local file system. If you use d3.xhr locally (including
> d3.json et al.), you must have a local web server.

My first thought was to setup a MAMP, but that is overkill. The wiki
goes on to suggest running a simple server built-in to Python using the
following command:

    python -m SimpleHTTPServer 8888 &

Go to the directory that has the pages you are developing and run this
command. It will startup a simple HTTP server on port 8888 which you can
access at `http://localhost:8888/`. You can now open your file in the
browser by going to something like:

    http://localhost:8888/d3example.html

This should resolve the issue discussed above. Now go create something
cool with d3!
