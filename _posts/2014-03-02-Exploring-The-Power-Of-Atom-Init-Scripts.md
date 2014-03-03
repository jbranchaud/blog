---
layout: post
title: Exploring the Power of Atom Init Scripts
summary: A tutorial on taking advantage of Atom's init file and an improved Jekyll workflow
---

As those of us with beta-access to the new [Atom](https://atom.io) editor from
[GitHub](https://github.com) clamor to build fancy packages and sexy themes,
we have to be careful to not overlook some of the other great offerings of this
(dare I say) revolutionary, new editor.

The potentially overlooked feature that I want to discuss in this post is the
`init.coffee` file hidden in `~/.atom`.

Earlier today, [Jason Rudolph](https://github.com/jasonrudolph)
wrote about how easy it is to take advantage of Atom's `init` file.
He describes how you can
[quickly define commands in your `init` file](http://jasonrudolph.com/blog/2014/03/02/defining-atom-commands-in-your-init-script/)
that can do just about anything. In instances where creating a full-blown
package isn't necessary, you can instead define some functionality in your
`init` file.

In this post, I will take us beyond the trivial example that Jason gives in
his post.

## The Problem

I use [Jekyll](http://jekyllrb.com/), the static site generator used by GitHub
pages, for a number of my own blogs, most notably, this blog.

So, why not create some built-in commands for Atom to improve my Jekyll
workflow. There is already
[some discussion around creating a Jekyll package](https://github.com/jekyll/atom-jekyll/issues/1)
for Atom. It is going to take some time to decide on what features will be
included as well as actually build the package. In the meantime, I decided it
would be quicker to build some of my *wish-list* functionality as `init`
script commands.

I want a command that I can type into Atom's command palette to create a new
Jekyll post with the frontmatter already filled in.

## Getting Started

Let's get started by taking a look at the simple example found in Jason's post.

    # demo command from Jason Rudolph
    atom.workspaceView.command 'dot-atom:demo', ->
      console.log "Hello from dot-atom:demo"

These two lines of code add a command that can be accessed from the command
palette (`Cmd-shift-P`) by typing *demo*.
It will log our happy message to the dev tools
console in Atom (press `option-Cmd-i` to open up the console and check).

Atom evaluates `init.coffee` each time you open a new window, so you can add
this command and be sure that it is available everywhere. If you have a window
already open and want the command available there, press `control-option-Cmd-l`
to reload the window. In fact, remember that keybinding because you will want
to use it each time you modify and save your `init.coffee` file throughout this
tutorial and when you are adding/testing your own scripts.

Well, `dot-atom:demo` is great, but can we print something more useful?

    # log something more interesting
    atom.workspaceView.command 'dot-atom:project-path', ->
      console.log atom.project.getPath()

We now have a `project-path` command available from the command palette that
will print the path of the current project to the console.

What about doing something besides printing to the console?

## Injecting Jekyll Frontmatter

The first thing I do whenever opening a new file to write a Jekyll blog post is
type in the **same** Jekyll frontmatter. Every single time.

Let's build a command that injects the boilerplate for me, then I can just fill
in the specifics.

Here is the Jekyll frontmatter that I want every post to start with:

    ---
    layout: post
    title:
    author:
    tags:
    ---

If you have already worked through the
[ascii-art Atom package tutorial](https://atom.io/docs/v0.64.0/your-first-package)
(which I highly recommend), then you already know how to inject arbitrary text
into an Atom editor.

Adding the following code to our `init.coffee` should do the trick:

    # add jekyll frontmatter to a file
    atom.workspaceView.command 'dot-atom:jekyll-fm', ->
      # assumes we are looking at an editor
      editor = atom.workspace.activePaneItem
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

If I open up a new file (`Cmd-n`) and invoke this command, Atom will comply
by appending the frontmatter text to the beginning of that file.

Though, to be more specific, the command appends the frontmatter text, not to
beginning of the file, but instead, to the location of the cursor. That is
fine for a brand new file, but is obnoxious for other files that already
contain text.

We can make our command a bit more robust, though, by moving the cursor to the
beginning of the file, like so:

    # add jekyll frontmatter to a file
    atom.workspaceView.command 'dot-atom:jekyll-fm', ->
      # assumes we are looking at an editor
      editor = atom.workspace.activePaneItem
      editor.moveCursorToTop()
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

Now it doesn't matter if the file is new or already has some content, our
command will always inject the frontmatter at the beginning.

We can take this a step further by creating a command that combines the steps
of opening a new file and injecting the frontmatter in it.

## New Jekyll Post

Let's create an entirely new command, `dot-atom:jekyll-new`, that we can
invoke to create a new file with our frontmatter. By digging through the
[Atom API](https://atom.io/docs/api/v0.64.0/api/), we discover that the
`Workspace` class has an `open` method available to it. It seems like we should
be able to tell Atom to open a new file and then use the code we just wrote
from above. How about something like this:

    # create new jekyll post and add frontmatter
    atom.workspaceView.command 'dot-atom:jekyll-new', ->
      atom.workspace.open()
      # assumes we are looking at an editor
      editor = atom.workspace.activePaneItem
      editor.moveCursorToTop()
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

You can try running that command if you want, but you will quickly find that
it doesn't work. That is because the `open` happens asynchronously. So while a
new file is being opened, the frontmatter text is injected in the current
editor.

If you look a bit closer at the API, you will see that `open` returns a promise
that resolves to an `Editor`. That is the editor of our new file; the one that
we want to inject the frontmatter into. This code should do the trick:

    # create new jekyll post and add frontmatter
    atom.workspaceView.command 'dot-atom:jekyll-new', ->
      atom.workspace.open().then (editor) ->
        # the open promise responds with an newly opened editor object
        editor.moveCursorToTop()
        editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

Go ahead and give it a try. It actually works quite well. For just a few lines
of code, I am quite pleased with the result.

There are two more improvements we can make to the code we've written here.

## The Finishing Touches

The first improvement we can make is pulling out common blocks of code so that
they can be written once and reused wherever they are needed.

The common code in our example is:

      editor.moveCursorToTop()
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

We can put this in a separate function like so:

    injectJekyllFrontmatter = (editor) ->
      editor.moveCursorToTop()
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

Taking advantage of this new function, the resulting code looks like this:

    # inject jekyll frontmatter to the front of the given editor
    injectJekyllFrontmatter = (editor) ->
      editor.moveCursorToTop()
      editor.insertText '---\nlayout: post\ntitle: \nauthor: \ntags:\n---\n\n'

    # add jekyll frontmatter to a file
    atom.workspaceView.command 'dot-atom:jekyll-fm', ->
      # assumes we are looking at an editor
      editor = atom.workspace.activePaneItem
      injectJekyllFrontmatter(editor)

    # create new jekyll post and add frontmatter
    atom.workspaceView.command 'dot-atom:jekyll-new', ->
      atom.workspace.open().then (editor) ->
        # the open promise responds with a newly opened editor object
        injectJekyllFrontmatter(editor)

This more modularized code is easier to understand and means that if we want
to update our frontmatter boilerplate, we only have to make the change in one
place.

The second improvement I suggest is to pull out common collections of
initialization code into separate files and then have them required by your
main `init.coffee` file. For instance, I might want to move the above code
to `jekyll-init.coffee`.

## Other Improvements

I've thought about sticking the boilerplate frontmatter in the
`snippets.cson` file and then having the above code programmatically grab that
snippet from the file. I fiddled around with this a little,
but couldn't figure out how to get at the parsed contents of
the snippet file. Any suggestions here?

Another fun improvement would be for `jekyll-new` to open the new file dialog
that is triggered by the new file option in the tree-view package. You could
then name the file before it is opened. At that
point though, it might make more sense to turn this into a package.

## Parting Words

Myself and other Atom early-adopters are putting together more guides like
this in a
[common, community-built repo, Splitting Atoms](https://github.com/jbranchaud/splitting-atoms).
If you have been hacking around with the Atom beta, we'd love your input and
contributions. Open some issues and send some pull requests!