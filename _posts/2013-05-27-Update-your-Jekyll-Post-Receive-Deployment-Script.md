---
layout: post
title: Update your Jekyll Post-Receive Deployment Script
summary: With major updates to Jekyll via 1.0, you need to update your deployment scripts as well
---

![Jekyll Logo](http://i.imgur.com/byN5s0x.png)

If you haven't heard, [Jekyll](http://jekyllrb.com) has seen some major
updates lately resulting in the
[release of 1.0](http://blog.parkermoore.de/2013/05/06/jekyll-1-dot-0-released/).
And with it are a lot of fancy, new features which are detailed in the
previous link. So go update your gem to the latest and greatest!

<!-- more -->

There is also a little (necessary) breakage including the way you tell
Jekyll to build your website. Pre-1.0, you could type the following:

    jekyll

And it would build the contents of the current directory into a site which would
then be placed into the `_site` folder of the current directory. Not anymore.
You now need the `build` subcommand, like so:

    jekyll build

Clearly, this affects the correctness of build scripts that worked with
older versions of Jekyll. My deployment scheme involves pushing my changes
to [a Git repository hosted on
Linode]({% post_url 2013-01-16-Creating-a-Remote-Git-Repo-on-Linode %}) with
a post-receive script like this:

{% highlight bash %}
GIT_REPO=$HOME/myrepo.git
TMP_GIT_CLONE=$HOME/tmp/myrepo
PUBLIC_WWW=/var/www/myrepo

git clone $GIT_REPO $TMP_GIT_CLONE
jekyll --no-auto $TMP_GIT_CLONE $PUBLIC_WWW
rm -rf $TMP_GIT_CLONE
{% endhighlight %}

As I've already discussed, this isn't going to work with Jekyll 1.0. To
update the script, you will need to modify the line where the site is built.
The resulting script should look like this:

{% highlight bash %}
GIT_REPO=$HOME/myrepo.git
TMP_GIT_CLONE=$HOME/tmp/myrepo
PUBLIC_WWW=/var/www/myrepo

git clone $GIT_REPO $TMP_GIT_CLONE
jekyll build -s $TMP_GIT_CLONE -d $PUBLIC_WWW
rm -rf $TMP_GIT_CLONE
{% endhighlight %}

This script uses the `build` subcommand and tells Jekyll which path is the
source directory and which path is the destination directory.

Update Your Scripts and Carry On!
