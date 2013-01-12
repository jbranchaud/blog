---
layout: post
title: Jekyll-Post&#58; a script to initialize blog posts for Jekyll
summary: I needed a quick and easy way to initialize blog posts for Jekyll, so I wrote this script.
status: publish
hn-discussion:
---

Since switching from Wordpress to [Jekyll](https://github.com/mojombo/jekyll)
for blogging, I have found myself
writing *more* blog posts. I think this is, in part, due to the ease of use
and simplicity of Jekyll. There is just very little friction.

However, I quickly noticed that each time I wanted to write a post, I had to
do a little *setup*. To create a Jekyll post, you need to appropriately date
and name the file and then you have to add all the initial yaml data at the
beginning of the file. Doing this everytime quickly became tedious. It also
was a bit of an inspiration killer when it came to quickly jotting down the
beginnings of a post that was sitting at the front of my mind. I suddenly have
all these juicy ideas flowing, but I feel like I first need to get things
setup. Bummer!

To fix this and save myself some time, I created
[jekyll-post](https://github.com/jbranchaud/mybin/blob/master/jekyll-post).

jekyll-post is a handy, little python script that sits on my machine's PATH
ready to initialize a Jekyll blog post the instant that inspiration strikes.

Running jekyll-post can be as easy as typing the following command in my \_posts
directory: `jekyll-post "My Jekyll Blog Post"`

This command will generate a file in the \_posts directory named
2013-01-11-My-Jekyll-Blog-Post.md and will initialize it with yaml data like
the title and whatever else it is that you need (as specified in the script).

As you can see, the script takes today's date formatting it as required by Jekyll
and then prepends that to the title of the post as separated by hyphens. The
default file extension is `md` (markdown).

I have also equipped this script with a few optional flags that give it a bit
more power.

- `-d` - allows you to specify a date other than today's date which will be used when naming the file. This needs to be done in the format YYYY-MM-DD.
- `-D` - allows you to specify the directory that the file will be created in. So, if I am in the root directory of my blog, then I can add `-D _posts` to have it created with the rest of the posts.
- `-n` - allows you to specify the naming of the file after the date in case the standard naming convention isn't desired.
- `-w` - this flag tells the script to open in the newly initialized file in the current shell window for immediate editing.

This script can be found in my [MYBIN github project](https://github.com/jbranchaud/mybin)
. Let me know what you think and if you have any suggestions for improvement.
