---
layout: post
title: Fun with GitHub's Contribution Graphs
summary: Spelling out words in GitHub's contribution graph by strategically constructing a commit history
---

If you use GitHub with any frequency, then you are probably aware of the
[contribution graph](https://github.com/blog/1360-introducing-contributions)
that is displayed for each user. I've been thinking
for a while that it would be fun to construct the commit history of a git
repository in such a way that it would spell something in the contribution
graph. I was [beat to the chase](https://github.com/gelstudios/gitfiti)
but that finally spurred me to finish my
own implementation. I created a project,
[commitart](https://github.com/jbranchaud/commitart), which I used to
spell out *GITHUB* in the contribution graph of a
[test account](https://github.com/commitart).

<img src="http://i.imgur.com/e6DlzfA.png" alt="GITHUB in Contribution Graph"
style="width: 100%;">

<!-- more -->

I accomplished this using [Rugged](https://github.com/libgit2/rugged),
a ruby binding to [libgit2](https://github.com/libgit2/libgit2). It was
simply a matter of creating a new git repository and jamming a bunch of
commits into it with strategically chosen commit dates.

Check out the [code](https://github.com/jbranchaud/commitart)
and try playing with it yourself. Note: you don't
want to use this on an actual repository that you use for other purposes,
because this will jack up the history of that repository.
