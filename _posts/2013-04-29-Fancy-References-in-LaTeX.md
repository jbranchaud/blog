---
layout: post
title: Fancy References in LaTeX
summary: A handful of LaTeX macros that make your inline references fancier and cleaner
hn-discussion:
---

It is not at all uncommon to have references to tables, figures, or even
sections throughout a LaTeX document. This is a great way to quickly refer
to some entity without having to rely on a specific physical location. These
references are achieved by referring to the label of the entity of interest
like so:

    % assume there is a figure whose label is 'fig:myfigure'
    \ref{fig:myfigure}

If this is your first figure in the document, then it will render a *1*.
That doesn't give much context though, so you might wrap it in something
like:

    As you can see in Figure~\ref{fig:myfigure}, the data points ...

You can do a similar thing for tables, sections, equations, and definitions:

    Table~\ref{tab:mytable}
    Section~\ref{sec:mysection}
    Equation~\ref{eq:myequation}
    Definition~\ref{def:mydefinition}

Great, now when these various references are rendered, we know whether a
table, equation, or whatever is being referred to.

<!-- more -->

However, there are a few minor issues with this approach:

- Each time you want to refer to some entity, you are going to have to add
  the particular entity type to the front of the reference. This can get
  tedious.
- You need to make sure you are consistent. If you say `Figure` one place,
  then you need to make sure you don't say `Fig.` in another place.
- If you do decide to change from one form, such as `Equation`, to another
  form, such as `eq.`. Then you have to go through and change it in every
  place throughout your document.

Fortunately, LaTeX macros can deal with all three of these issues in one go.
Simply add the following macros to your document somewhere before the
`\begin{document}` tag.

    \newcommand{\figref}[1]{Figure~\ref{#1}}
    \newcommand{\tabref}[1]{Table~\ref{#1}}
    \newcommand{\eqnref}[1]{Eq.~\ref{#1}}
    \newcommand{\secref}[1]{Section~\ref{#1}}
    \newcommand{\defref}[1]{Definition~\ref{#1}}

Now, throughout your document, you can make references like this:

    As you can see in \figref{fig:myfigure}, the data points ...

And it will produce the reference as defined: *Figure 1*.

If you then want change the way a reference is rendered, instead of updating
every reference through the document, simply update the macro:

    % \newcommand{\figref}[1]{Figure~\ref{#1}}
    \newcommand{\figref}[1]{Fig.~\ref{#1}}

Hopefully these macros save you some time and keep your LaTeX document
consistent. If you have interesting macros that you swear by, feel free to
share them in the comments below.
