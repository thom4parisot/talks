'use strict';

var fs = require('fs');
var path = require('path');
var assemble = require('assemble');

module.exports = {
  presentations: function getPresentations(page, hbs){
    var basedir = path.dirname(page.src);
    var presentations = fs.readdirSync(basedir)
      .filter(function(f){
        return path.extname(f) === '.md';
      })
      .map(function(f){
        var data = assemble.data.readYFM(path.join(basedir, f));

        data.filename = path.join(page.dirname, path.basename(f, '.md')) + page.extname;
        data.filename = data.filename.replace(/^dist/, page.assets);

        return data;
      });

    return presentations.reduce(function(a, b){
      return a + hbs.fn(b);
    }, '');
  }
};