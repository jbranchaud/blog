---
layout: post
title: A Peek Into The Clojure Community
summary: Some observations and recommended talks from Clojure Conj 2015
---

_This originally appeared as [A Peek Into The Clojure
Community](https://hashrocket.com/blog/posts/a-peek-into-the-clojure-community)
on the [Hashrocket](https://hashrocket.com) blog._

Several weeks ago, folks from a myriad of technology backgrounds including
Java, Ruby, Lisp, and academia in general converged on the Philadelphia
neighborhood of Society Hill which is situated just a few blocks southeast
of Independence Hall and the resting place of the Liberty Bell. It was in
this historic setting that the [2015 Clojure Conj](http://clojure-conj.org/)
would take place.

As someone intrigued by [Clojure](http://clojure.org/), but still very new to the language and
unfamiliar with the community, attending Clojure Conj seemed like the best
next step forward. My hope was to glean both excitement and perspective from
the talks and the community at large. There are a few talks in particular
that stand out to me as I look back on the conference.

## Solving Problems with Automata

The Conj kicked things off with a talk from Mark and Alex Engleberg, titled
[*Solving Problems with Automata*](https://www.youtube.com/watch?v=AEhULv4ruL4). The premise of the talk is that as
programmers we have to solve problems day to day and some, if not many, of
those problems can be modeled as automata. If we can model a problem with
automata, then ultimately the problem can be boiled down to a graph problem.
This is an exciting revelation because there have been decades of research
into solving graph problems with graph theory. In other words, we've got a
lot of time tested theory and techniques with which to work.
Mark and Alex split the talk time in half each
presenting an interesting programming problem, showing how the problem could
be modeled with automata, and then using techniques like constraint solving
to quickly move to a general solution.

## Debugging With The Scientific Method

The first day was capped off with an excellent keynote from Stuart Halloway on being better debuggers. Though
this was a Clojure conference, the improvements to the debugging process
that Halloway suggests are applicable in the context of any programming language. All too often when our
programs break or behave in unexpected ways, we take a tedious, error-prone,
haphazard approach to tracking down the problem. In [*Debugging With The Scientific Method*](https://www.youtube.com/watch?v=FihU5JxmnBg), Halloway challenges us to
apply the scientific process by stating what we know, forming a hypothesis,
and then validating or, more often than not, invalidating our hypothesis. I
think this is a talk that every programmer should watch. By incorporating
these practices into our existing development workflow, we will become more
intentional and efficient programmers.

## ClojureScript For Skeptics and Om Next

The Clojure and [ClojureScript](https://github.com/clojure/clojurescript) communities continue to refine their web
story. Derek Slager, in his talk [*ClojureScript For Skeptics*](), makes the
case for why ClojureScript is increasingly becoming a viable choice for web
application development. He addresses many of the concerns that *skeptics*
raise and also goes over key weaknesses and shortcomings that the community
needs to address as they move forward.

Slager's talk couples well with David Nolen's talk, [*Om Next*](https://www.youtube.com/watch?v=MDZpSIngwm4), which focuses on the rapidly stabilizing next major version of [Om](https://github.com/omcljs/om). Nolen describes the current state of
Om Next, recent breakthroughs, and the rationale behind the significant evolutions in how Om works. He then goes on to discuss the future of Om Next. It's clear
that Om Next is not simply a port of React.js to Clojure but is in fact the
next step in functional reactive web frameworks taking inspiration from
[React](https://facebook.github.io/react/), [Relay](https://facebook.github.io/relay/), and [Falcor](http://netflix.github.io/falcor/).

I'd be remiss in not also mentioning the talk given by Maria Geller in which she
takes us on a fascinating and accessible tour of the internals of the
ClojureScript compiler. For those interested in ClojureScript and its
compiler, [*The ClojureScript Compiler - A Look
Behind The Curtain*](https://www.youtube.com/watch?v=Elg17s_nwDg) is a must
watch.

## The Takeaway

Though there were many other excellent talks at Clojure Conj (check them out [here](https://www.youtube.com/playlist?list=PLZdCLR02grLrl5ie970A24kvti21hGiOf)), these were the talks that set themselves apart for a number of reasons. In addition to simply being full of engaging content, these talks revealed for me a lot about Clojure Conj and the Clojure community in general.

By starting the conference with the *Solving Problems With Automata* talk, the organizers of Clojure Conj made plain that this conference seeks to find the intersection between the practical and the theoretical; between fun problems and academic rigor. This father-son duo shows that Clojure has a broad appeal and can make an excellent language for cutting one's teeth on programming.

Stuart Halloway emphasized a value that showed up time and again throughout the conference. Rationale. The Clojure community values always having a rationale behind what they do. There should be a rationale behind each step in the debugging process. There should be a rationale behind the tools that they build. There should be a rationale behind each and every talk. All this rationale leads to intentionality and quality.

The talks on ClojureScript and Om Next emphasize that the Clojure community has an eye on the future. Not only is it valuable to be able to write full-stack Clojure, but this community is helping push forward the state of the practice when it comes to how we build increasingly large and complex frontend web applications. There is a strong mindset that lots can be learned from other languages and technologies.
