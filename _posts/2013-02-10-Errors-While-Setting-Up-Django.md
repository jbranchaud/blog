---
layout: post
title: Errors While Setting Up Django&#58; Missing Modules and Environment Errors
summary: Setting up Django seems pretty straightforward, but there are a few nasty and common errors that you may run into.
status: publish
hn-discussion:
tags:
- django
- mysql
- python
---

I have been wanting to try out some of the Python web frameworks that are
floating around the interwebs. [Django](https://www.djangoproject.com/)
seems to be the most popular, so I decided I would start there. The setup
seemed easy enough, but I ran into a few issues along the way that are not
addressed in the official Django tutorial, but appear to be rather prevalent.
The first issue is a missing module that is needed by Django when using MySQL.
The second issue is tied to the first and is an Environment Error. Thirdly,
there can be a missing library which is also tied back to the first issue.

*Note: these are issues I encountered on a Mac running OS X 10.8 and using
MySQL for the Django database.*

## Installing Django

I soon learned Django is
used by a lot of notable companies and has what appears to be an abundance
of [documentation and tutorials](https://docs.djangoproject.com/en/1.4/).
Excited to give it a try, I followed the [quick install](https://docs.djangoproject.com/en/1.4/intro/install/)
guide to get it on my machine. I used `sudo pip install Django` to install
it and I encountered no issues with this portion of the setup. Let me know
if you had issues here, I can include them.

## The Tutorial

Django has a nice concise [tutorial](https://docs.djangoproject.com/en/1.4/intro/tutorial01/)
for people new to the framework that
allows them to create a simple app and through that process get a nice
overview of the framework. Just follow it step by step, what could go
wrong?

Quite a few things actually.

I assume you are working through the tutorial. You should already have
created a Django project. If you haven't already,
try launching the development server and
make sure the auto-generated page shows up in your browser.

Now you need to setup your database and while
[PostgreSQL](http://www.postgresql.org/) seems to be quickly growing
in popularity, I imagine that [MySQL](http://www.mysql.com/) still
takes the cake in a popularity contest. I chose to use MySQL
and the errors discussed below are related to Django's interactions
with MySQL.

## Issues

**Missing Module - MySQLdb**

You will get to a point in the tutorial where you are ready to setup
your database with all the tables that Django needs, so you run:

    $ python manage.py syncdb

If you are reading this article, then script probably failed once it
tried to use a module called `MySQLdb`. As you might suspect, you are
going to have to install this module with something like
`pip install python-mysqldb` (depending on your OS). For more details
regarding this issue, see this [question](http://stackoverflow.com/questions/454854/no-module-named-mysqldb)
or this [question](http://stackoverflow.com/questions/2952187/getting-error-loading-mysqldb-module-no-module-named-mysqldb-have-tried-pre)
on StackOverflow.

{% comment %}
Issue 1 links

- [stackoverflow](http://stackoverflow.com/questions/454854/no-module-named-mysqldb)
- [stackoverflow2](http://stackoverflow.com/questions/2952187/getting-error-loading-mysqldb-module-no-module-named-mysqldb-have-tried-pre)
{% endcomment %}

**Environment Error**

Again, you try running the command to setup the database for Django.
The missing module is no longer a problem, but now you are getting this
thing called an environment error:

    EnvironmentError: mysql_config not found

MySQLdb needs this file called `mysql_config`, but it does not know where
to look for it. This is easy enough to fix though. MySQLdb looks in a file
called `site.cfg` for things like the location of this file, so we can
simply add or update the location.

First, find the location of the mysql_config file. I found it with the
following command:

    $ sudo find / -name 'mysql_config'

Second, find the location of the site.cfg file for MySQLdb. I found it
with a similar command:

    $ sudo find / -name 'site.cfg'

It is then just a matter of editing the site.cfg file by adding or
replacing the line specifying the location of the mysql_config. It
should now read something like this:

    mysql_config = /usr/local/path/to/mysql_config

where the path you specify is the one you got earlier when finding
the location of the mysql_config file.

To see references for this part of the solution, go to this
[blog post](http://blog.infoentropy.com/MySQL-python_EnvironmentError_mysql_config_not_found)
or this [answer](http://stackoverflow.com/questions/3898750/installing-mysqldb-for-python-2-6-on-osx/14485392#14485392)
on StackOverflow.

{% comment %}
Issue 2 links

- [Enviornment Error](http://blog.infoentropy.com/MySQL-python_EnvironmentError_mysql_config_not_found)
- [stackoverflow](http://stackoverflow.com/questions/3898750/installing-mysqldb-for-python-2-6-on-osx/14485392#14485392)
{% endcomment %}

**Missing Library - libmysqlclient**

Go ahead and try creating the tables for the Django database again. It
might finally work for you, but if not, then chances are you are now
missing a library that MySQLdb depends on. Actually, you likely are not
missing it, but rather it is somewhere that MySQLdb does not expect it
to be.

MySQLdb thinks that `libmysqlclient` will be in `/usr/lib`, but it is
probably somewhere like `/usr/local/mysql/lib`. So, let's just create a
symbolic link to it with a command like the following:

    $ sudo ln -s /usr/local/mysql/lib/libmysqlclient.18.dylib /usr/lib/libmysqlclient.18.dylib

My references for this issue are this [StackOverflow question](http://stackoverflow.com/questions/6383310/python-mysqldb-library-not-loaded-libmysqlclient-18-dylib)
and this [blog post](http://astonj.com/tech/how-to-install-mysql-on-lion-mac-os-x/).

{% comment %}
Issue 3 links

- [stackoverflow](http://stackoverflow.com/questions/6383310/python-mysqldb-library-not-loaded-libmysqlclient-18-dylib)
- [general mysql guide](http://astonj.com/tech/how-to-install-mysql-on-lion-mac-os-x/)
{% endcomment %}

At this point, your issues related to getting MySQL to play nice with
Django are hopefully resolved. If you ran into other issues, you should
let me know what it was and how you solved it.

A lot of people recommend PostgreSQL. Perhaps getting that to work with
Django is less of a hassle. It is certainly worth a try.

Happy Djangoing!
