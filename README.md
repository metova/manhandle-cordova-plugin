# Manhandle Cordova Plugin

This plugin will maintain a versioned list of plugin dependencies for your Cordova project. When you add or remove a
plugin, Manhandle will generate a `plugins.json` manifest describing all installed plugins. When you build your project,
Manhandle will ensure you have all the dependencies described in the `plugins.json` manifest.

## Installation

Add this plugin to your Cordova project.

    cordova plugin add https://github.com/metova/manhandle-cordova-plugin

## Usage

Never think about missing plugins again! Install plugins as desired using the `cordova plugin add` command, commit your
generated `plugins.json` file, and safely add your `plugins/` directory contents to `.gitignore`.

## License

This software falls under the MIT License. Copyright (c) 2014 [Metova, Inc](http://metova.com/).
