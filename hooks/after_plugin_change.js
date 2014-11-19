#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

console.log('Updating plugin manifest');
exec("cordova plugin list", function(error, output, code) {

    var plugins = [];
    var lines = output.split("\n");
    lines.forEach(function(line){
        if(line.length < 2) {
            return;
        }

        line = line.replace(' ', '@').replace(new RegExp(' .*'), '')
        plugin = line.substring(0, line.indexOf('@'));
        version = line.substring(line.indexOf('@') + 1);
        fetch = JSON.parse(fs.readFileSync(path.join('plugins', plugin, '.fetch.json'), 'utf-8'));

        plugins.push({ id: plugin, version: version, source: fetch['source'] });
    });

    console.log('Writing plugin manifest to plugins.json');
    fs.writeFileSync('plugins.json', JSON.stringify(plugins), 'utf8');
});