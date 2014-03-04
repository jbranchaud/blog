---
layout: post
title: Modularizing Atom Init Scripts
summary: I propose an approach to modularizing Atom init scripts as a best practice
tags:
- Atom
---

In [a recent post]({% post_url 2014-03-02-Exploring-The-Power-Of-Atom-Init-Scripts %}),
I gave an introduction to using the `init.coffee` file for the
[Atom](https://atom.io) editor. I showed how you can quickly put together a
series of commands with just a few lines of code to improve your experience
or workflow. My particular examples involved improving my
[Jekyll](http://jekyllrb.com/) workflow.

One of the last improvements I made to the example before wrapping up the post was
to move the three small blocks of code I had written to a separate file. These
three blocks of code were specific to Jekyll, so it seemed natural to stick
them in a separate file, say `jekyll.coffee`.

<!-- more -->

## The Setup

I started by adding a new directory to my `~/.atom` directory. I called mine
`inits` because it is going to contain all sorts of init scripts for Atom.

I then created a new file for my Jekyll commands and helper functions inside
that new directory. I called mine `jekyll.coffee`.

With a few items omitted, my `~/.atom` directory now looks like this:

    .
    ├── ...
    ├── init.coffee
    └── inits/
        ├── jekyll.coffee
        └── ...

The last step is to require the new Jekyll-specific init file so that it gets
included when Atom processes `init.coffee`. Toward the top of `init.coffee`, I
added the following statement:

    # import other inits
    jekyll = require './inits/jekyll.coffee'

This one line shows you that I include a script of jekyll commands and where
it can be found.

## The Reasoning

As I continue to add more Jekyll-specific commands, the commands and their
helper function can go in `jekyll.coffee` instead of polluting `init.coffee`.

As I fill out my toolbelt with other technology, language, and tool specific
commands, I can keep them all organized in separate files within my `inits`
directory.

- This makes it easier for me to maintain them.

- This makes it easier for people checking out
[my dotfiles on GitHub](https://github.com/jbranchaud/dotfiles)
to find scripts that are relavent to them.

Because Atom is anchored in open source contributions, I believe this is a
**best practice** for anyone developing init scripts and releasing them on
GitHub.

Have you built anything cool within your init script? Shoot me a link; I'd
love to check it out!
