---
layout: post
title: Updating Forked Git Repository With Latest Upstream Changes
summary: Changes to an upstream Git repository got you down? Bring your fork up to date with these simple steps!
---

A few months ago I forked a [GitHub](https://github.com) repository
([jekyll](https://github.com/jekyll/jekyll)) and cloned it onto my local
machine so that I could contribute to it. I made some changes, submitted a
pull request, and forgot about the repository.

I recently noticed some other changes I could contribute to that same
repository, but it had since undergone a lot of change and my local fork of
the repository was sorely out of date. It was then that I realized that I
had no idea how to get the latest changes from that upstream git repository.

It turns out that just a few quick git commands will get you back on the
bleeding edge.

Assuming you are wanting to update the master branch, check it out:

    git checkout master

Add a remote for the upstream repository you are out of sync with:

    git remote add upstream https://github.com/jekyll/jekyll.git

Fetch everything from that upstream repository:

    git fetch upstream

Merge all the changes from upstream's master to your own:

    git merge upstream/master

Your local fork of the repository should now be update with the latest
changes from the original upstream repository.

There are a couple extra things to note though:

- If you want to update a different branch, it is the same set of steps,
  just use the name of the branch you want in place of `master` in the steps
  above.

- Be aware of any local changes you already have made for this repository
  before updating. They will need to be merged with the upstream changes and
  could result in a merge conflict depending on what you had changed.

- Some people suggest using `git rebase upstream/master` in place of `git
  merge upstream/master` if you have local changes to contribute upstream so
  as to maintain a cleaner git history. This can be slightly more complicated,
  so only do so if you understand the `rebase` command.

- While the example above shows you how to get back in sync with a GitHub
  repsitory, you can just as easily do this with any other publicly hosted
  repository as long as you have the URI. Simply replace the URI you want
  with the one used in the `git remote` command.

Source: [How to update GitHub forked repository](http://stackoverflow.com/questions/7244321/how-to-update-github-forked-repository)
