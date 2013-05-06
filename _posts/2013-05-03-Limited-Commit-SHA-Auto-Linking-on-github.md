---
layout: post
title: Limited Commit SHA Auto-Linking on GitHub
summary: The commit SHA auto-linking within GitHub's issues is fancy but limited.
status: publish
hn-discussion:
tags:
- github
- git
---

Sometimes I want to quickly look up a commit for a particular project via
[GitHub](https://github.com/)'s website. You'd think there would be a search
bar for it, but nothing like this is provided. The next best thing is to add
`/commit/<sha>` to the end of the repository's URL. This is no fun though.

I then had the idea of taking advantage of the [commit SHA
auto-linking](https://help.github.com/articles/github-flavored-markdown#references)
that GitHub provides within the repository issue tracking.

The list of commits for a repository can be enumerated with a log command.

    git log --pretty=format:"%H"

Which results in a list of SHAs that look something like this:

    9d110a8acdfa317076bf183964cdff2a249dad63
    64788dcbf538c0b215d4b25d4ee7125095720e0d
    e74333d5065ebea0d9318b3ee1a5a463320d26d1
    0dbd440099acf960f8fcc3cd8414be45447bc440
    6ef3b8e9dca5299d03c862e4ecc058a7d2aea66f
    ff6e4aa3f9c93bc838590020901602abc34767fb
    bce8923e4cc8f711319d488e52ef041d87db3ca0
    c39ecf0376171a2fb3d50c51d6be93a79c238845
    12c8486c02b19b1b18b6f8034300265747685230
    80676b6f9de688494e35fe0445d4f0ef5b335f47
    d546d17a389c7ec6aa9ec29e043409aa3e26b9bd
    0e93686d7245b070534eaf7013129611ef528ada
    ...

This list of commits can then be pasted into an issue for that repository.
The [resulting issue](https://github.com/jbranchaud/gistory/issues/1)
will look something like this:

![issue with shas](http://i.imgur.com/7QUdJ4N.png)

This is the point at which I noticed that GitHub limits the number of commit
SHAs it will auto-link in a given issue. Any more than 10 SHAs and it leaves
them as plain text.

I had hoped to have a nice list of hyperlinked commit SHAs, but I ended up
disappointed.
Of course, this can be circumvented by [generating a list of markdown
links]({% post_url 2013-05-05-Hyperlinking-Commit-SHAs-on-GitHub %})
with the commit SHAs as the text and the repository URL with `/commit/<sha>`
as the URL. A list of SHAs in this form could be placed in both an issue or
a markdown document in that repository.
