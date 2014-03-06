---
layout: post
title: A Workaround for Opening Multiple Projects in Atom
summary: Using symlinks as a workaround for opening multiple projects in the same Atom window
tags:
- Atom
---

[Atom](https://atom.io) is a little rough around the edges. Though that is
to be expected with any product in its beta.

One of the rough spots that a lot of people have been gripping about lately
is Atom's inability to open multiple projects in the same window. Instead,
each new project (directory is probably a more accurate term) will be opened in
a separate window. With editors like Sublime Text and Eclipse, you can open
whatever you want within the same window. We've come to expect it as a standard
feature in any editor worth its salt.

So why the hell can't Atom seem to do this?!

First, I have no idea. Second, I imagine that sort of functionality is on its
way. Third, I have a workaround for you in the meantime.

## The Workaround

Atom works with directories. If you tell Atom to open a directory, it opens
a new window with that directory as the root. Everything inside that directory
is populated in the tree-view and that is what you get to work with.

Since that is the case, the solution is easy enough. Move the projects that
you want to work on together into some common directory and then tell Atom
to open that common directory.

Now, before you scoff at me, I know how absurd that sounds. You aren't going to
reorganize your code directories just because Atom doesn't want to play nice.
And I don't blame you. I am certainly not going to rearrange things just for
that.

We don't need to though. We just need to give the illusion that we have
rearranged things into a single directory.

For that, some symbolic links will do the trick.

Create a dummy directory, symbolically link the root directories of the projects
you want to access into that dummy directory, and then have Atom open that
dummy directory.

## Can you show me?

Sure.

Let's say I have the following three projects that I want to open in Atom:

- `~/git/themes/sexy-ui-theme`
- `~/git/themes/sexy-syntax-theme`
- `~/.atom`

Looks like I am working on a theme for Atom and possibly making some changes
to my Atom configuration files.

Now, I need a dummy directory; I'll call it `project1`.
Also, let's assume that I may want to
use this technique for different sets of projects, so I will also
need a directory that can contain all of these potential projects,
I guess I'll call it `atom-projects`:

    $ cd ~/git
    $ mkdir atom-projects
    $ cd atom-projects
    $ mkdir project1
    $ cd project1
    $ ln -s ~/git/themes/sexy-ui-theme ./
    $ ln -s ~/git/themes/sexy-syntax-theme ./
    $ ln -s ~/.atom ./

This leaves me with a directory, `project1`, inside of `atom-projects`
that contains symbolically-linked directories to each of the three
projects I am interested in. Now I can open `project1` with Atom and
play with all three projects from the same window:

    $ atom ~/git/atom-projects/project1

See, that wasn't so bad.

Enjoy your improved development experience with Atom!