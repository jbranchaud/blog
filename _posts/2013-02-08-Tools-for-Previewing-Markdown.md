---
layout: post
title: Tools for Previewing Markdown
summary: You can write Markdown with just about anything, but it is nice to be able to preview it too
hn-discussion:
tags:
- markdown
---

From [Jekyll](https://github.com/mojombo/jekyll) posts to outlining
papers to simply writing up some notes, I have started using
[Markdown](http://daringfireball.net/projects/markdown/) a lot more
frequently. You can write markdown just about anywhere you want, I
prefer Vi. Previewing is a different story though, because the Markdown
needs to be rendered by something.

I have found a few different tools for previewing Markdown. I will
present them below and you can pick the one that makes the most sense
for you.

- [Dingus](http://daringfireball.net/projects/markdown/dingus) - straight
from the creator of Markdown is a nice browser-based tool that allows you
to write and preview Markdown and even generate the corresponding HTML.
The page also has a listing of the all the Markdown syntax.

- [Socrates](http://socrates.io/) - this is another nice browser-based
editor and previewer; it uses a side-by-side display. This tool has extended
Markdown to allow for [LaTeX](http://www.latex-project.org/)-style math to
be written and rendered. It also saves your documents and allows you to easily
share them by their unique links.

- [Pencil](http://pencil.asleepysamurai.com/) - yet another browser-based
editor and previewer that saves your documents and allows you to share them
with their unique links. This editor provides a minimal, distraction free
interface with keyboard shortcuts for quickly switching back and forth
between the editor and the preview.

- [EpicEditor](http://oscargodson.github.com/EpicEditor/) - this is an
embeddable Markdown editor written in Javascript with some customizability.
You can even use it in fullscreen mode which provides a side-by-side
display that updates as you type. This also provides a distraction-free
editing environment.

- [qlmarkdown](https://github.com/toland/qlmarkdown) - this is a QuickLook
generator for Markdown files that you want to preview on a Mac. By sticking
the Markdown generator file in the QuickLook directory, you give QuickLook
the ability to render the Markdown files rather than display their raw
content. No internet required!

I personally prefer using qlmarkdown right now because I can do everything
locally and privately on my machine. Plus, it is quick and easy for me to
switch back and forth between Terminal and Finder to see how my changes
look.

Do you know of other great tools for previewing Markdown? Leave a comment
below or tweet at me!
