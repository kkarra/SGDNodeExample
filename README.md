# About this Application

This is a boilerplate [express 4](http://expressjs.com/4x/api.html) application.

# Pre-Installation

You should have node installed globally, either via download-n-click from http://nodejs.org
or
    $ brew install node (MacOSX)
    $ apt-get install node (Ubuntu)
    etc. for other versions


You should have grunt-cli installed globally via:
    $ sudo npm install -g grunt-cli

# Installation of packages

Run NPM install

    $ npm install

Start node

    $ node bin/www

Navigate to the application in your browser at http://localhost:3000, or http://localhost:3000/api to see the example API response.


## Using Grunt

To compile CSS using SASS, run:

    $ grunt sass

You can edit the sass files in client/scss.

To compile JS with browserify, run:

    $ grunt browserify

You can edit the precompilation JS in client/js.
