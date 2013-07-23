#!/usr/bin/env node

var rest = require('restler');
var sys = require('util');
var program = require('commander');
//var URL = 'http://www.5flares.com';
var URL;

if(require.main == module) {
    program
        .option('-u, --url [URL]', 'Path to URL')
        .parse(process.argv);
}

if (program.url) {
    rest.get(URL).on('complete', function(result) { 
        sys.puts(result);
    });
}
//getURL(URL);
