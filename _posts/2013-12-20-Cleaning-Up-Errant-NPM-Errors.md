---
layout: post
title: Cleaning Up Errant NPM Errors
summary: NPM errors got you down, try cleaning the cache
---

Sometimes NPM generates a bunch of bunk errors when it is installing
packages. I first noticed this was happening on my machine when the same
error messages were being generated across various projects. If you suspect
this is happening, try cleaning the cache:

    sudo npm cache clean

If you are still experiences errors after this, then they are probably
actual errors that you are going to have to resolve.
