---
layout: post
title: Getting Started with D3.js in 121 Seconds
summary: The quickest way to get up and running with D3.js, results may vary
---

Okay, so 121 seconds is how long it took me. It might take you a little
longer.

Head on over to [codepen.io](http://codepen.io/pen/). It is a great place to
play around with HTML, CSS, and JavaScript (as well as all their evil
twins). Don't worry about creating an account just yet. Remember, you are on
the clock.

First thing is first, you are going to need some D3. It is easy enough to
include in the HTML section with the follow script tag:

    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>

We now have access to all of the D3.js goodies through the `d3` variable.
D3 lets us play around with everything on the DOM. That includes adding
things to the DOM. So let's go ahead and tell D3 to add a paragraph to the
page by adding the following to the JS section:

    d3.select('body').append('p').text('Now we are cooking with gas!');

Give it a second and you should see your new paragraph appear below.

Now remember, clean code is happy code, so go ahead and clean it up a bit:

    var body = d3.select('body');
    body.append('p').text('Now we are cooking with gas!');

There, that is a little better.

D3 is more fun when we combine it with SVG (you know, [scalable vector
graphics](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics)).

Why don't we programmatically add an `svg` element to the `body` of our
page. Also, we better give it a width and height. How about this:

    var svg = d3.select('body').append('svg')
                .attr('width', 500)
                .attr('height', 20);

Great! Except we wait a couple precious seconds and nothing appears. I'd
tell you it is definitely there, but I know you won't believe me. So, let's
prove it to ourselves by adding some CSS:

    svg {
      border: solid 3px #e55e55;
    }

Ah, so there is our little SVG box, wrapped in red. We should probably
actually do something with this box and all its SVG goodness. Let's just add
a `text` element to it in the JS section:

    svg.append('text')
        .text('Now we are really cooking with gas!');

That isn't quite what we were expecting though. It looks like most of the
`text` element is being rendered above the bounds of our box. We can easily
fix that by modifying the `x` and `y` attributes. Update the last bit like
so:

    svg.append('text')
        .text('Now we are really cooking with gas!')
        .attr('x', 3)
        .attr('y', 15);

That's a lot better.

You are now up and running with D3.js and it took only about 121 seconds. I
hope you enjoyed it. The world of data-driven DOM manipulation is now at
your fingertips. Let me know if you build anything cool.

Also, leave me a comment if you beat my time. It'll be our unofficial leader board.
