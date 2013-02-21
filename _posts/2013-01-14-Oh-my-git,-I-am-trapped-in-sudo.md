---
layout: post
title: Oh my git, I am trapped in sudo!
summary: After using sudo to create a git repo in root space, I moved it into my space, but was still required to use sudo.
status: publish
hn-discussion:
---

I have a handful of scripts that I have written that do small time-saving
tasks for me. Obviously I want these on my path, just like all those fancy
commands sitting in `/usr/bin` and `/usr/local`. At the time, it seemed like
a no-brainer to create a directory called `mybin` under `/usr/local/`. It also
seemed like a great idea to version all of this with git and subsequently put
it up on [GitHub](https://github.com/) in a repository I cleverly named
[mybin](https://github.com/jbranchaud/mybin).

One of these things was a good idea and the other was a bad idea.

Putting my scripts up on GitHub for all the world to see and use was the good
idea. Why not? Surely there is someone out there that will find some part of
it useful.

The bad idea was creating that directory in the root space which not only
initially required prepending sudo, but also required it for just about every
command after that. This quickly became tedious and annoying, so I decided
to move it into my space.

## What do you mean I still need sudo?

After moving the mybin directory along with all of its contents, I was pretty
excited that I wouldn't need to be typing sudo all the time anymore and so I
decided to start working on a new feature straight away. However, I was quickly
disappointed to find that sudo was still required. *What is this? I thought I
moved it somewhere that I had full permissions over.*

I figured it might have something to do with the permissions, but they all
checked out. The directories and the files where all 755 and 544 respectively.

It was then with the help of a [friend](https://twitter.com/mattdsteele) that
I realized the problem actually had to do with the owner, not with the
permissions. The root user was still the owner of all of these directories and
files. I needed to switch it all over to be owned by me.

## The Solution

I figured out two quick ways of getting the ownership switched all over to me.

The first uses the existing `mybin` directory. By running the find command over
all directories and files and then using the chown command on each of them, I
could quickly get it all switched over, like so:

    sudo mv /usr/local/mybin /Users/jbranchaud/
    for each a in `find /Users/jbranchaud/mybin`; sudo chown jbranchaud $a; done

Obviously, you will need to insert your own path and username in where mine
have been used.

The second option which requires that everything you care about is already
versioned remotely in GitHub (or whatever git host you are using). You can
then simply remove the existing directory and clone a new one where you want
it, like so:

    rm -rf /usr/local/mybin
    cd /Users/jbranchaud
    git clone http://github.com/jbranchaud/mybin.git

By cloning it in your own space, it will automatically give you the ownership
of all the directories and files.

Either way the problem is solved and I can get back to writing nifty little
scripts.
