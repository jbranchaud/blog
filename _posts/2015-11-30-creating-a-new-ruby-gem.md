---
layout: post
title: Creating A New Ruby Gem
summary: Using Bundler to create a new Ruby gem
---

Bundler can be used to quickly generate the boilerplate for a new Ruby gem.
This is accomplished with the `bundle gem` command. You can simply provide a
name for the game and go from there (e.g. `bundle gem my-new-gem`), but
there are a few flags you can use for further customization. This is the
full command that I generally use:

```
$ bundle gem my-new-gem --no-bin --coc --mit --test=rspec
```

This command will generate the `my-new-gem` directory with everything you
need to start building your next gem.

The `--no-bin` flag tells bundler not to generate an executable for your gem.

The `--coc` flag tells bundler that you'd like a Code of Conduct generated in
the directory.

The `--mit` flag tells bundler that you'd like a `LICENSE.txt` file included
with the MIT license legalese.

Lastly, you can specify whichever testing framework you'd like, but I
prefer `rspec` which is communicated to bundler with the `--test` flag.
