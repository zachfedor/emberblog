# Ember 2.2 Test Project

## Prerequisites

These prerequisites should be installed globally on your dev machine unless
stated otherwise. As such, they shouldn't be downloaded and compiled from
within the project. Save their source code elsewhere (e.g. `~/code` or
`~/git`). _Note:_ the CI server attempts to use local versions of these
dependencies.

* Node - version 5.3.0
    * ubuntu: [via source]()
    ```

    wget https://nodejs.org/dist/v5.3.0/node-v5.3.0.tar.gz
    tar -xf nod
    ```
    * osx: via homebrew

* NPM - version 3.5.2
    * comes bundled with Node

* Bower - version 1.7.1
    * via npm
    * _Note:_ Jenkins uses the local npm version

* Watchman - version 4.1.0
    * ubuntu: [via source](https://facebook.github.io/watchman/docs/install.html)
    ```
    git clone https://github.com/facebook/watchman.git
    cd watchman
    git checkout v4.1.0  # the latest stable release
    ./autogen.sh
    ./configure
    make
    sudo make install
    ```
    * osx: [via homebrew](https://facebook.github.io/watchman/docs/install.html)
    ```
    brew install watchman
    ```
    * _Note:_ Jenkins does not need this dependency

* Ember CLI - version 2.2.0-beta.1-master-e803ac7fa6
    * [via source](https://github.com/ember-cli/ember-cli)
    ```
    # run these outside of the project directory, maybe in ~/git or ~/code
    git clone https://github.com/ember-cli/ember-cli.git
    cd ember-cli
    npm link

    # now you can use ember globally to create your project
    ember new project_name
    cd project_name
    npm link ember-cli
    ```
    * _Note:_ Jenkins uses the local npm version

* PhantomJS - version 2.0.0
    * ubuntu: [via source](http://phantomjs.org/build.html)
    ```
    # install dependencies
    sudo apt-get install (see dependencies in the link above)
    # get the source
    git clone --recurse-submodules git://github.com/ariya/phantomjs.git
    cd phantomjs
    ./build.py
    ```
    * osx: via homebrew
    ```
    brew install phantomjs
    ```

## Next Steps
