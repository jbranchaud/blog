# Website and Blog

This is the repository for my
[personal website](http://joshbranchaud.com) and
[blog](http://joshbranchaud.com/blog/). I tend to blog about tech and
software, but also include other parts of my life from time to time.

To **build** the site, simply run

```
$ grunt build
```

which will use a combination of grunt tasks and jekyll to build the site.
See the `_site` directory.

To **serve** the site locally, simply run

```
$ grunt serve
```

which will use a combination of grunt tasks and jekyll to locally serve the
site and re-serve as changes are made. See
[localhost:4000](http://localhost:4000).

To **deploy** the site to production, simply run

```
$ grunt deploy
```

which will push to both the GitHub repo (`master`) and the production server
(`deploy`) that hosts the site.

## Deploy with Ansible

``bash
$ ansible blog -m synchronize -a "src=/Users/jbranchaud/Documents/git/forks/blog/_site/ dest=/home/jbranchaud/www/joshbranchaud.com/public_html/"
```

## Dependencies

- `npm`
- `bower`
- `grunt`
- `jekyll 1.5.1`

## License

&copy; 2013-2015 [Josh Branchaud](http://joshbranchaud.com)

Everything is licensed under the MIT License with the exception of the files
and content contained within the `_posts` directory. See
[LICENSE](https://github.com/jbranchaud/blog/blob/master/LICENSE)
for the details of the MIT License.
