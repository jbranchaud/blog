---
layout: post
title: Creating a Remote Git Repo on Linode
summary: A quick guide to setting up a remote git repository on Linode that you can push to.
status: publish
hn-discussion:
tags:
- git
- linode
---

It is nice to have your files, whether they be code, notes, or your next novel,
backed by some version control system. My personal favorite is
[git](http://git-scm.com/) which makes it the subject of this post.

It is a start to have all those files versioned locally on your machine with
git, but the next step you will want to take is pushing it all to a remote
location. If it is a personal repo, this provides an extra layer of backup.
If it is a group repo, this gives you the backup and provides an outlet for
sharing the code with your collaborators.

It is simple enough to create a remote repository on
[GitHub](https://github.com/) and push everything over there. But what if you
you don't want to use GitHub or would just like to put the code on existing
server space you have? No problem.

The Formalities
---------------

First, I am assuming you already have a server you want to use. I personally
use [Linode](http://www.linode.com/) and I would recommend it to others. The
steps I follow are based on Linode, but should transfer to other VPS providers.

Second, I am assuming you already have some sort of non-root user setup. If
not, you will want to do this (for security reasons at the very least). If you
are not sure how to do this, Linode has a very comprehensive wiki which
includes this article on 
[Adding a New User](http://library.linode.com/securing-your-server#sph_adding-a-new-user).

Third, I am assuming that git is already installed on your server. You will
kinda need this. If you are not sure whether or not you have git installed,
you can do a quick check by typing `git` or `git --version`. If you get a
favorable response, then you are good to go. If your server wants to know what
the hell a *git* is, then you should probably follow this guide for
[installing git](http://library.linode.com/linux-tools/version-control/git#sph_installing-git)
or this other [more general guide](http://git-scm.com/book/en/Getting-Started-Installing-Git).

The Setup
---------

Now for the fun part, setting up the git repo.

First, you will need to log in with your non-root user.

    $ ssh username@domain.com

You should now be in that user's home directory, something like `/home/username`.
You can setup the directory structure however you want, but for me, I like to
keep things organized by first creating a directory called git for storing all
my repositories.

    $ mkdir git
    $ cd git

Now you can create a directory for a particular repository with whatever name
you want for it and then append .git to the end.

    $ mkdir blog.git
    $ cd blog.git

The repository can be initialized now (with the *bare* option).

    $ git --bare init

That's it, it is all setup. I know it was difficult, but definitely worth the
struggle.

One last step to simplify your life is to switch back to your local repository
and setup the remote repository with a name that can be easily referenced.

    $ git remote add linode username@domain.com:~/git/blog.git

Note: This last step is done locally (not on your linode server) in the
existing git repository that cooresponds to the one you plan to push to the
remote linode repository.

This last step makes pushing your changes to the linode server easy.

    $ git push linode master

Chip, Chop, Chip!

References
----------

- [How to set up your own private Git server on Linux](http://tumblr.intranation.com/post/766290565/how-set-up-your-own-private-git-server-linux)
- [jekyll's wiki for auto-deployment](https://github.com/mojombo/jekyll/wiki/Deployment)
