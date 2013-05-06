---
layout: post
title: Hyperlinking to Commits on GitHub
summary: An approach to hyperlinking to commits for GitHub repositories
status: publish
hn-discussion:
tags:
- github
- git
---

I recently wrote a post about how [GitHub's auto-linking of commit SHAs]({% post_url 2013-05-03-Limited-Commit-SHA-Auto-Linking-in-GitHub-Issues %}) is a bit
limited. The auto-linking of commit SHAs is a nice feature of GitHub's
issues, but, as you can see in my previous post, each issue links a maximum
of 10 commit SHAs. This is not a problem though because the links can be
created without GitHub's help by using markdown links.

## Linking to Commits

If GitHub won't link to the commits for us, then we can create the links
ourselves using markdown links. The URL to a given commit for a GitHub
repository looks like this:

    https://github.com/<username>/<reponame>/commit/<sha>

If we know the username and the name of the repository as well as the SHA
for the commit we are interested in linking to, then we can throw together a
markdown link like the following:

{% raw %}
    [9d110a8acdfa317076bf183964cdff2a249dad63](https://github.com/jbranchaud/gistory/commit/9d110a8acdfa317076bf183964cdff2a249dad63)
{% endraw %}

We can then jam a list of these markdown links into an issue or a markdown
file.

## Automating the Process

It is easy enough to automate the generation of a markdown link list like
this. I wrote a small python script for it using the GitPython library. You
can check out the script,
[CommitLinker.py](https://github.com/jbranchaud/gistory/blob/master/CommitLinker.py),
to see exactly how I did it.

Given the local repository path, the username, and the repository name,
the process involves a few simple steps:

- Access the git repository at the specified path
- Grab all the commits for that repository
- Construct a partial URL with the username and repository name
  (`https://github.com/<username>/<reponame>/commit/`)
- For each commit, append the commit's SHA to the partial URL and then
  output it as a markdown link

To see this at work, I generated a list of these for my
[gistory](https://github.com/jbranchaud/gistory)
repository and committed it as
[commits.md](https://github.com/jbranchaud/gistory/blob/master/commits.md).

Take that auto-linking!
