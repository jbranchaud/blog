---
layout: post
title: Rails New App
summary: How I Start A New Rails Project
---

Rails is well-known for how quickly it can be used to hit the ground
running on a new application. You can run `rails new app` and
`rails s` to have a working application running on a web server in less
than a minute. You can begin prototyping an idea for a new app in no time.

Rails is also well-known for being a rather opinionated framework.
There are all kinds of default settings and gems that a newly generated
project comes with. Many of these defaults don't work for me. The following
is how I like to start a new Rails project.

*Note: this is for Rails 4+ applications*

Any new Rails app starts with a `rails new <app name>`. I don't have to
settle for just that though. There are tons of flags that can be set to
configure the specifics of how the app is generated. These configuration
flags are pretty well documented at `rails new -h`.

This is what I generally use to generate a new app:

    rails new awesome-app -T -d postgresql --skip-turbolinks

The `-T` tells Rails to not generate the `Test::Unit` boilerplate for me.
I am going to end up using `rspec` for unit-level testing. The `-d
postgresql` will initialize the project for use with a postgres database
which is my preference when it comes to relational databases. Lastly,
the `--skip-turbolinks` flag does just what it says. The turbolinks gem
will be excluded from the `Gemfile`. Turbolinks generally just gets in my
way, so I tend to exclude it right from the beginning.

I personally prefer to use JavaScript instead of CoffeeScript in my Rails
projects. New Rails projects are defaulted to using CoffeeScript; note
these
lines in the generated `Gemfile`:

    # Use CoffeeScript for .coffee assets and views
    gem 'coffee-rails', '~> 4.1.0'

To get back to JavaScript as the default, I just have to remove the `coffee-rails` gem
from the `Gemfile` and then `bundle install`.

The next step is to get a baseline testing environment setup. I start
with [`rspec`](https://github.com/rspec/rspec-rails) and
[`factory_girl`](https://github.com/thoughtbot/factory_girl) and only add
things like [`capybara`](https://github.com/jnicklas/capybara) and
[`webmock`](https://github.com/bblimke/webmock) once I need them.

I add the `rspec` and `factory_girl` gems to the *development* and *test*
groups:

    group :development, :test do
      # ...
      gem 'rspec-rails', '~> 3.0'
      gem 'factory_girl_rails', "~> 4.0"
    end

After doing a `bundle install`, I can finish setting up `rspec` by running:

    $ rails generate rspec:install

I used to configure `rspec` such that all the `factory_girl` methods don't
need to be namespaced with `FactoryGirl`. This can be achieved by using the following snippet:

    RSpec.configure do |config|
      # ...

      # Factory Girl
      config.include FactoryGirl::Syntax::Methods
    end

I no longer do this though because I believe it is an unnecessary shortcut
and ultimately detracts from the readability of the test suite.

Lastly, I like to have the Rails console enhanced by
[`pry`](https://github.com/pry/pry) so I'll add
[`pry-rails`](https://github.com/rweng/pry-rails) to both the *development*
and *test* groups as well:

    group :development, :test do
      # ...

      gem 'pry-rails'

      gem 'rspec-rails', '~> 3.0'
      gem 'factory_girl_rails', "~> 4.0"
    end

Another `bundle install` followed by invoking `rails c` will show the
enhanced Rails console.

There are, of course, other setup steps I do that vary from project to
project, but the above are the essentials that I've found myself using
almost every time I `rails new app`.
