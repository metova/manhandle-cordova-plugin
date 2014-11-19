#!/usr/bin/env node

var exec = require('exec-sync');
var fs = require('fs');
var path = require('path');
var sys = require('sys');

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

plugins = JSON.parse(fs.readFileSync(path.join('plugins.json'), 'utf-8'));
plugins.forEach(function(plugin){
    if(!fs.existsSync(path.join('plugins', plugin.id))) {
        if(plugin.source.type == 'registry') {
            exec('cordova plugin add ' + plugin.id + '@' + plugin.version, puts);
        }
        else if (plugin.source.type == 'git') {
            console.warn( 'Plugin ' + plugin.id + '@' + plugin.version + ' was previously retrieved from git, so you will need to manually verify that the appropriate version has been installed.' );
            exec('cordova plugin add ' + plugin.source.url);
        }
        else if (plugin.source.type == 'local') {
            console.warn( 'Plugin ' + plugin.id + '@' + plugin.version + ' was previously retrieved from the local filesystem, so you will need to manually verify that the appropriate version has been installed.' );
            exec('cordova plugin add ' + plugin.source.path);
        }
    }
});
