'use strict';

var fs = require('fs');
var grunt = require('grunt');
var path = require('path');
var yfm = require('assemble-yaml');

var ifMatches = function ifMatches(text, rule, hbs){
  var re = new RegExp(rule);

  return re.test(text) ? hbs.fn(this) : hbs.inverse(this);
};

function htmlAttr(attribute, value){
  return attribute + '="' + value + '"';
}

var bgAttr = htmlAttr.bind(null, 'data-background');
var classAttr = htmlAttr.bind(null, 'data-state');

module.exports = {
  if_matches: ifMatches.bind(this),
  if_matches_external: function ifMatchesExternal(text, hbs){
    return ifMatches.call(this, text, /^(https?)?\/\//, hbs);
  },
  presentations: function getPresentations(page, hbs){
    var basedir = path.dirname(page.src);
    var presentations = fs.readdirSync(basedir)
      .filter(function(f){
        return path.extname(f) === '.md';
      })
      .map(function(f){
        var data = yfm.extract(path.join(basedir, f)).context;

        data.filename = path.join(page.dirname, path.basename(f, '.md')) + page.extname;
        data.filename = data.filename.replace(/^dist/, page.assets);

        return data;
      });

    return presentations.reduce(function(a, b){
      return a + hbs.fn(b);
    }, '');
  },

  'data-background': function getDataBackgroundAttribute(content){
    if (/^(https?)?\/\//.test(content.background)){
      return bgAttr(content.background);
    }

    if (content.class){
      return classAttr(content.class);
    }

    if (content['background-color']) {
      return bgAttr(content['background-color']);
    }

    if (content.background){
      return bgAttr('images/' + content.background);
    }
  },

  slidePath: function slidePath(slidename, t){
    return path.join(
      path.dirname(t.src),
      'slides',
      slidename
    );
  },

  join: function joinStrings(){
    var argLength = arguments.length;
    var hbs = arguments[argLength - 1];

    var content = [].slice.call(arguments, 0, argLength - 1).join('');

    return content;
  },

  aggregate_by_year: function getYearlyAggregate(hbs){
    var page = this;
    var years = {};

    grunt
      .file.expand('{2008..'+(new Date).getFullYear()+'}/*/*.md')
      .filter(function(f){
        return path.basename(f) !== 'outline.md';
      })
      .forEach(function(f){
        var yaml = yfm.extract(f);
        var data = yaml.context;
        var year = f.match(/(\d{4})/)[1];

        data.content = yaml.content;
        data.filename = path.join(path.dirname(f), path.join(path.basename(f, '.md')) + page.extname);
        data.filename = data.filename.replace(/^dist/, page.assets);

        if (years[year] === undefined){
          years[year] = [];
        }

        years[year].push(data);
      });

    return Object.keys(years).sort().reverse().reduce(function(a, b){
        return a + hbs.fn({
          year: b,
          presentations: years[b].sort(function(a, b){ return b.event.date > a.event.date ? 1 : -1; })
        });
      }, '')
  },

  permalink: function getTalkPermalink(talk){
    return talk.external || talk.filename.replace(/index.html?$/, '');
  },

  clearfix: function generateClearfix(index, limit, hbs){
    return (index + 1) % limit ? hbs.inverse(this) : hbs.fn(this);
  }
};
