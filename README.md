# Ember 2.2 Test Project

## Prerequisites

* Node - version 0.12.7
* NPM - version 3.5.2
* Watchman - version 4.1.0
    * via homebrew
    * [details](https://facebook.github.io/watchman/docs/install.html)

    brew install watchman


* Ember CLI - version 2.2.0-beta.1-master-e803ac7fa6
    * via git
    * [details](https://github.com/ember-cli/ember-cli)
    
    # run these outside of the project directory, maybe in ~/git or ~/code
    git clone https://github.com/ember-cli/ember-cli.git
    cd ember-cli
    npm link

    # now you can use ember globally to create your project
    ember new project_name
    cd project_name
    npm link ember-cli
    ember server


## Next Steps

