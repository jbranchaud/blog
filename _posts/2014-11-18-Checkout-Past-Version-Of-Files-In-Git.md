---
layout: post
title: Checkout past versions of files in Git
summary: Quick rundown of how to get back past versions of files in Git
---

There are those times when you are working away at a project making commit
after commit. You have a pretty good picture of what needs to be done in
your mind. You are in a rhythm and making good progress.

You then come to realize that some changes you made to a file awhile back were
misguided. The real solution would be better off in this other file. You
like the other changes you have made since then, but you need to get that
one file back to how it was. What to do?

Essentially what you want to do is grab the most recent version of that file
before you changed it.
Git's `checkout` command is pretty versatile and is a good choice in this
situation.

Let's say your abbreviated project structure looks like so:

    .
    ├── README.md
    ├── package.json
    ├── src
    │   ├── app.js
    │   ├── helpers.js
    ...

You made some changes to `app.js` about 3 or 4 commits back that you want to
call *take-backs* on. You'd rather make some related changes to `helpers.js`
that solve the problem in a more elegant way. Again, your subsequent changes
to other parts of the application should stand. They are pretty solid.

So, you first need to figure out where you changed `app.js` last and more
importantly the commit before it that holds the old version of `app.js`.

    $ git log -n 5 --oneline
    bf309a8 Add the most recent changes.
    31f4d77 Add even more changes.
    cdc541e Add more changes.
    fa1ac78 Apply semi-elegant solution to problem in app.js
    52a7173 Add changes and such.

It looks like you modified `app.js` at `fa1ac78` which means that `52a7173`
holds the version of `app.js` that you want back. Cool, now just tell
`checkout` that you want that file back.

    $ git checkout 52a7173 src/app.js

`app.js` should now be back to how it was and Git even stuck it on staging
for you.

    $ git status
    On branch some-feature-branch
    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

        modified:   src/app.js

You can even run `git diff --cached src/app.js` to see that you are
reverting your changes as expected.

A quick `git commit` and you are good to go.

Similarly, if you want to checkout the entire state of the project at a
certain past commit, you can use the same approach as above, but instead
specify the top level directory instead of a specific file.

    $ git checkout 52a7173 .

Now back to actually writing code.
