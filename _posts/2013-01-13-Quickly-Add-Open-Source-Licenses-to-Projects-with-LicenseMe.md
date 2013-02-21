---
layout: post
title: Quickly Add Open Source Licenses to Projects with LicenseMe
summary: I have started working on LicenseMe, a small project for adding an open source license to a software project.
status: publish
hn-discussion:
---

I recently read *[Pick a License, Any License](http://www.codinghorror.com/blog/2007/04/pick-a-license-any-license.html)*
by Jeff Atwood on his blog, [Coding Horror](http://www.codinghorror.com/blog/).
This post surprised me a little because it talks of the importance of licensing
code when you release it to the public and I have completely neglected doing
so.

> Because I did not explicitly indicate a license, I declared an implicit
> copyright without explaining how others could use my code. Since the code
> is unlicensed, I could theoretically assert copyright at any time and demand
> that people stop using my code. Experienced developers won't touch
> unlicensed code because they have no legal right to use it. That's ironic,
> considering the whole reason I posted the code in the first place was so
> other developers could benefit from that code. I could have easily avoided
> this unfortunate situation if I had done the right thing and included a
> software license with my code.

## What? I Need a License?!

I thought the simple act of throwing my code up on GitHub was a
sufficient way to tell others, "*Hey, if you like my code, you should use it,
copy it, whatever!*". However, it seems that by leaving out a license, I am
doing the opposite; potentially even scaring away developers that might want
to contribute to what I have done.

Fortunately, this is a really easy thing to fix. Go through each of your
publicly available projects and add an open source license to it. It is as
simple as creating a file called `LICENSE`, adding the license's legalese to
that document, and then inserting your name and the year in place of the
respective placeholders.

This is a pretty simple process, but I thought I would make it a bit easier
by creating a little command-line program that does it all for me.

## LicenseMe

This python script takes a premade LICENSE file and adds a copy of it to the
current directory whenever it is called. This means you don't have to track
down the [OSI](http://opensource.org/) page for your favorite license every
time you are setting up a project.

I prefer the [MIT license](http://opensource.org/licenses/MIT)
for most of my work, so I have my LICENSE file setup
for that. You can easily copy the [licenseme script](https://github.com/jbranchaud/mybin/blob/master/licenseme)
and then create your own LICENSE file with the
[Apache License 2.0](http://opensource.org/licenses/Apache-2.0),
the [GNU GPL license](http://opensource.org/licenses/gpl-license),
or whatever license it is that you prefer.

## The Future of LicenseMe

This is a very preliminary version of the script and I have feature ideas that
will make it more versitle and easier to use. The future of LicenseMe involves:

- adding support for multiple licenses, rather than just hardcoding one in
- adding a config file so that name and other info is available to the script
- adding license templates so that info from the config file can be injected
into the licenses

Let me know what you think and as well as any suggestions that you have in the
comments below. I will post updates when major improvements have been
implemented.
