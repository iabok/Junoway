# Junoway
Junoway is a med-intelligence web-platform which provides Doctors and Patients with an up to the second pro re nata log of your health(Medical) history.

# Setup

## Installing dependencies

[Bower](http://twitter.github.com/bower/) is used as for package management, the default client-side dependencies are listed in the `bower.json` file.

**Note** you will need [node.js and npm](http://nodejs.org) and [phantomJS](http://phantomjs.org) for headless unit tests.

```sh
# Install bower package manager
$ npm install -g bower

# Install grunt build tool
$ npm install -g grunt-cli

# Install additional grunt tasks
$ npm install

# Install client-side packages
$ bower install
```

### Installing new dependencies - [Bower documentation](http://bower.io)

```sh
# Search for a library
$ bower search [name..]

# Install a library and save it to the bower.json file
$ bower install [name..] --save
```

* * *
 

## Building your code

All of the JavaScript is pre-build using [grunt](http://gruntjs.com/) and the r.js optimiser, this means your development environment better simulates what will be served in production. The built CSS and JS are then version and  index.html file will automatically be updated with the versioned filename.

```sh
# Watch src/ and test/ files and test, then build on change
$ grunt watch

# Do a one off build - will lint and test your code first
$ grunt build

# Compile the handlebars templates
$ grunt handlebars

# Compile less and css styles
$ grunt styles
```


Authors Of The Junoway Project
---------------------------------------------------------
* Omega Emmy Jean - @ omegaemmy@gmail.com
* Abok Isaac - @ abokisaac@gmail.com
* Tugume Humphrey - @ humphie7@gmail.com
* Noah Kange - @ noahkange28@gmail.com
* Arthur Wandeka - @ wartyw@gmail.com

