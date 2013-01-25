---
layout: post
title: Errors While Setting Up Django&#58; Missing Modules and Environment Errors
summary: Setting up Django seems pretty straightforward, but there are a few nasty and common errors that you may run into.
status: draft
hn-discussion:
tags:
- django
- mysql
- python
---

I have been wanting to try out some of the Python web frameworks that are
floating around in the interwebs. [Django](https://www.djangoproject.com/)
seems to be the most popular, so I decided I would start there. The setup
seemed easy enough, but I ran into a few issues along the way that are not
addressed in the official Django tutorial, but appear to be rather prevalent.
The first issue is a missing module that is needed by Django when using MySQL.
The second issue is tied to the first and is an Environment Error. Thirdly,
there can be a missing library which also ties back to the first issue.

*Note: these are issues I encountered on a Mac running OS X 10.8 and using
MySQL for the Django database.*

Installing Django
-----------------

I soon learned Django is
used by a lot of notable companies and has what appears to be an abundance
of [documentation and tutorials](https://docs.djangoproject.com/en/1.4/).
Excited to give it a try, I followed the [quick install](https://docs.djangoproject.com/en/1.4/intro/install/)
guide to get it on my machine. I used `sudo pip install Django` to install
it and I encountered no issues with this portion of the setup. Let me know
if you had issues here, I can include them.

The Tutorial
------------

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
[postgresql](http://www.postgresql.org/) seems to be quickly growing
in popularity, I imagine that [MySQL](http://www.mysql.com/) still
takes the cake in a popularity contest. I happen to be using MySQL
and the errors discussed below are related to Django's interactions
with MySQL.

Issues
------

Issue 1 links

- [stackoverflow](http://stackoverflow.com/questions/454854/no-module-named-mysqldb)
- [stackoverflow2](http://stackoverflow.com/questions/2952187/getting-error-loading-mysqldb-module-no-module-named-mysqldb-have-tried-pre)

Issue 2 links

- [Enviornment Error](http://blog.infoentropy.com/MySQL-python_EnvironmentError_mysql_config_not_found)
- [stackoverflow]((http://stackoverflow.com/questions/3898750/installing-mysqldb-for-python-2-6-on-osx/14485392#14485392)

Issue 3 links

- [stackoverflow](http://stackoverflow.com/questions/6383310/python-mysqldb-library-not-loaded-libmysqlclient-18-dylib)
- [general mysql guide](http://astonj.com/tech/how-to-install-mysql-on-lion-mac-os-x/)
