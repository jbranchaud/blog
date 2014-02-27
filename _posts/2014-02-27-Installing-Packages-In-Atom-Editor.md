---
layout: post
title: Installing Packages in GitHub's Atom Editor
summary: These are the two primary ways to install new packages for Atom
---

GitHub just released (by beta invite only for now) its code editor,
[Atom](https://atom.io), which
[seems to have been a long time in the making](https://twitter.com/defunkt/status/438791340222971904).

It looks to be useable out of the box, but is also flexible and highly customizable.
As the [landing page for Atom](https://atom.io) states:

> Atom is comprised of over 50 open-source packages that integrate around a minimal core.

This means that you can pick and choose the packages that work for you and the
kind of development that you do.

How do you install an Atom package? Well, it isn't immediately clear how to do
so. There are, however, two rather simple ways to search for and install
packages once you know where to look.

## The GUI Approach

From the Atom editor menus, navigate to *Atom* -> *Preferences*.

From there, open the *Packages* tab and have at it.

The other way to get to this menu is to take advantage of command palette.
Press `cmd-shift-P` to bring up the command palette and then start typing,
`packages`. You should see the *Settings View: Install Packages* option show
up in the palette.

## The CLI Approach

When you install Atom, it comes with two command line utilities, *atom* and *apm*.
The latter, similar to [npm](https://www.npmjs.org/), is the Atom Package Manager.

To search for packages, pick your keyword and type this into your terminal:

    apm search <keyword>

To install a package, determine the name of the package you want and type this:

    apm install <package-name>

And that's it.

There are lots of awesome packages already out for Atom and many more are sure
to come. In fact, if you have an idea for your own Atom package, check out this
guide on [creating your first package](https://atom.io/docs/v0.60.0/your-first-package).
