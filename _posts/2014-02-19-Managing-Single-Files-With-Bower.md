---
layout: post
title: Managing Single Files with Bower
summary: Bower can grab a single file if you don't want the whole project
---

[Bower](http://bower.io/) is a simple and unopinionated package management
tool for front-end web development. It is also incredibly powerful.

> Bower runs over Git, and is package-agnostic. A packaged component can be
> made up of any type of asset, and use any type of transport (e.g., AMD,
> CommonJS, etc.).

The most common use of Bower is to manage dependencies for a web
application. For instance, if your project depends on
[v3.0.0](https://github.com/necolas/normalize.css/releases/tag/3.0.0) of
[Normalize.css](http://necolas.github.io/normalize.css/), you can tell that
to Bower in order to ensure that it is v3.0.0 that is pulled in to your
project. Better yet, when others do development on your project, the
`bower.json` file ensures that everyone is playing with the same equipment.

Assuming you already have [Bower initialized for your
project](http://bower.io/#defining-a-package), the following command will
install Normalize.css and note it as a dependency:

    bower install --save normalize-css

This refers to the latest release, but you can even specify which
version like so:

    bower install --save normalize-css#3.0.0

You will most often find yourself using Bower to pull in an entire
project, like we just did above. However, Bower isn't limited to
doing just this. It is flexible enough that we can specify just a
single file if we like.

    bower install --save https://github.com/github/linguist/blob/master/lib/linguist/languages.yml

GitHub's [Linguist](https://github.com/github/linguist) project
is awesome, but perhaps we don't want the entire thing pulled into our
project, we just want the `languages.yml` file, which is what we
accomplished above.

If we want a specific version of a file, rather than grabbing
the latest version whenever `bower install` is invoked,
then we can dig through the project on GitHub to find a version
of the file tied to a specific release. How about version 2.10.11:

    bower install --save https://github.com/github/linguist/blob/v2.10.11/lib/linguist/languages.yml

There are a lot of other ways to
[specify which package (or file)](http://bower.io/#installing-packages-and-dependencies)
is installed and managed by bower. Like I said, bower is flexible.
