---
layout: post
title: Using Multiple GitHub Accounts from a Single Computer
summary: You might need to manage multiple GitHub accounts, this blog post explains how.
---

I have been working on a
[goofy side project](https://github.com/jbranchaud/commitart)
and needed to be able to push to an alternate [GitHub](https://github.com)
account. I specified the 
[email and username locally in the config file](http://stackoverflow.com/a/4220493/535590),
but git still thought I wanted to push with my main GitHub username.

I realized what I needed to do was setup a different ssh key. This was easy
enough to do by following this detailed blog post -
[How to Work with GitHub and Multiple
Accounts](http://net.tutsplus.com/tutorials/tools-and-tips/how-to-work-with-github-and-multiple-accounts/)
from [NetTuts](http://net.tutsplus.com/).
