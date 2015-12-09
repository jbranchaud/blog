---
layout: post
title: React.js and contentEditable
summary: React.js and contentEditable don't play well together; here's a workaround
---

[React.js](https://facebook.github.io/react/) does not want you to use
`contentEditable`. If you try to make an element `contentEditable`, it will
respond with a big, scary warning message in the dev tools console.

![contentEditable warning message](http://i.imgur.com/30HtweE.png)

React is concerned that the children of the element that is
`contentEditable` will not be properly managed which could result in the
nodes getting out of sync.

Fortunately, there are some possible workarounds for this. Some approaches
are discussed in [this StackOverflow question](http://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable).
One of those approaches was refined and consolidated into this GitHub
project, [react-contenteditable](https://github.com/lovasoa/react-contenteditable).
The implementation is in ES6 and provides a workaround that React can agree
with.
