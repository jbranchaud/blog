---
layout: post
title: How To Get Help With Vim
summary: There is a lot going on in that Vim session; this is how I figure it all out
---

_This originally appeared as [How To Get Help With
Vim](https://hashrocket.com/blog/posts/how-to-get-help-with-vim)
on the [Hashrocket](https://hashrocket.com) blog._

Vim is a behemoth of powerful features, small tricks, copious keybindings,
legacy conventions, and dusty corners. It presents rewards and challenges
whether you are starting to learn the basics, gaining competency, or even
mastering Vim (whatever that looks like). Regardless of the stage in which
you find yourself, Vim always offers more to learn and explore.

Perhaps you fat-finger the wrong key and something unexpected happens; now you want to know what that key does.

Maybe you've started making more use of Vim's *unique* flavor of regex but you cannot quite get that one regex pattern right.

You always use that one feature in normal mode and now you are wondering if there is a visual mode equivalent.

Day in and day out as the curious programmer works in Vim, these sorts of questions and wonderings crop up. By following our curiosities, discovering answers to our questions, and even taking brief peeks down the rabbit hole, we sharpen this tool. We become more efficient. We move toward proficiency and even mastery.

In order to do all of this, we need to know how to ask Vim for help.

## Asking For Help

The easiest way to ask for help is to start with executing `:help` during a Vim session. This will drop us into the main help file which has an overview of the basics.

To get help with a specific command, we can provide that command as an argument to the `:help` command. By invoking `:help gg`, we learn more details about `gg` including that `<C-home>` does the same thing and that by providing a `[count]`, we can use `gg` to jump anywhere in a file.

## Contextual Help

By default, the command we give to `:help` is assumed to be a normal mode command. If we want to find commands that are used in other modes, we must use different conventions. For instance, if we run `:help u`, we will find ourselves in the `undo-commands` section. In normal mode, `u` will undo the latest change. But what does `u` do if we are in visual mode? To find out, we have to format our help command a bit differently. By running `:help v_u`, we discover that `u` has drastically different behavior when invoked from visual mode. It transforms all the text in the visual selection to lowercase. To get to the help for any command used in visual mode, we have to prepend `v_` to that command.

The insert commands can be found by prepending `i_` to the command. For instance, `:help i_<Esc>` will tell us how the escape key will transition us from Insert or Replace mode into Normal mode.

The command-line commands can be found by prepending `:` to the command just as we'd do if we were invoking the command itself. The most obvious example is `:help :help`. So meta.

Regular expressions can be found by prepending `/` to the character in question. For instance, if we type `:help /\w`, we'll discover that `\w` when used in a regex pattern represents any word character. From there, we can browse through the other regex patterns.

There are a couple additional conventions I didn't mention. See `:help help-context` for the whole picture.

## What's That Command Called?

Even with `:help` at our disposal, there are going to be commands that we don't know by keyword and can't seem to find. Not to worry though. If we have an idea of what the command does, we should be able to track it down with `:helpgrep`.

The `:helpgrep` command is aptly named; it allows us to `grep` through our Vim help files. When we give `:helpgrep` a search term, it will look through all help files for occurrences of that term. The end result is a list of locations (filenames and line numbers) where that term appears. Vim will put this list in the `Quickfix List` for our convenience. Let's look at an example.

We want to do a substitution throughout an entire file, but we cannot remember all the details. We try searching `:help substitution` to no avail. Being unsure of how else to get there, we can lean on `:helpgrep`. By invoking `:helpgrep substitution`, we get a big list of places where the word `substitution` occurs in the help files. If we pop open the `Quickfix List` with `:copen`, we see all the places that the word `substitution` shows up. We can navigate around until we find an entry that looks promising. The entry in `change.txt` looks good, so we move the cursor over that line and hit `enter`. After exploring this file a bit, we discover what we were looking for. We also learn that the keyword we should have used with `:help` is `substitute` instead of `substitution`. The Vim help files can be a bit brittle in this way. Good thing we have `:helpgrep`.

## Following Tags

As we read through the help files, we will often encounter keywords about which we want to know more. If these keywords are highlighted in light blue, they are tags which link to a corresponding definition. If we move the cursor over one of those tags and hit `CTRL-]`, Vim will jump us to the definition.

As we explored the `substitute` command in the previous section, we noticed `pattern` mentioned in a number of places. If we want to know more about what `pattern` means and how we can construct a pattern for the substitute command, we just need to move the cursor over that keyword and hit `CTRL-]`. Vim will jump us to the definition of `pattern` where we can read more.

## It's Just Vim

Remember, we are viewing these help files in Vim itself. That means we can take advantage of all our favorite Vim tricks. We can perform a search in the curent buffer with `/`. We can jump to the top of the file with `gg`. We can use the jump list to get back to where we've been after we've gone too far off on a tangent. And so on.

## Plugin Help

Most Vim plugin developers are good about including detailed help files with their plugins. We can use all the same techniques listed above to get help with plugin-specific commands.

Consider the scenario where we have the [`vim-abolish`](https://github.com/tpope/vim-abolish) plugin included. We know `vim-abolish` provides the `crs` command as a way of converting a camel-cased word to snake-case, but what other commands does this plugin provide? We try typing `:help crs`, but there is no match. We then try `:helpgrep abolish` which drops us right into the `vim-abolish` help file. From there, it is trivial to search for `snake` and find details about all the ways we can coerce the case of a word.

## Outside Help

Efforts to get help and discover answers to questions shouldn't be confined to exploring the Vim help files. Though they are usually the best place to start, there are many external resources of which we can take advantage. When googling a Vim question, I usually find myself in one of a few place: [Vim Tips Wiki](http://vim.wikia.com/wiki/Vim_Tips_Wiki), [#vim stackoverflow](http://stackoverflow.com/questions/tagged/vim), or any number of highly-specific blog posts.

At [Hashrocket](http://hashrocket.com/) (in Chicago), we host [VimChi](http://vimchi.com/), a meetup for people to discuss and nerd out on Vim. Even if you aren't in the Chicago-area, we have a VimChi Slack group (let [me](https://twitter.com/jbrancha) know if you want an invite). This is a great place for people to ask questions and share the latest Vim tricks they have learned.

## Final Thoughts

Continue to explore and be curious. By adding new commands little by little to your repertoire, you'll march steadily toward mastery of this powerful tool.

From time to time, it can be valuable to poke around a little. Think of a random command, open the help file for it, and then read about all the other commands around it. If a command's description mentions a keyword that you don't recognize, use the `CTRL-]` trick to follow that keyword tag to its definition. You'll discover cool features and dusty corners of Vim that you couldn't have imagined.

That being said, there is a lot to know in Vim. Too much really. But as long as you know where to look for help, that's not a problem.
