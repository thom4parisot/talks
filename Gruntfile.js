'use strict';

module.exports = function(grunt){
  grunt.initConfig({
   'now': (new Date).getFullYear(),
   'gh-pages': {
      gh: {
        src: [
          '{2012..<%= now %>}/**/*',
          '*.jpg',
          'src/**/*',
          'bower_components/reveal.js/css/**/*.css',
          'bower_components/reveal.js/lib/css/zenburn.css',
          'bower_components/reveal.js/lib/js/head.min.js',
          'bower_components/reveal.js/js/**/*.js',
          'bower_components/reveal.js/plugin/{highlight,markdown}/*.js'
        ],
        options: {
          base: './'
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: process.env.PORT || 3000,
          open: true,
          debug: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['connect:dev:keepalive']);
  grunt.registerTask('deploy', ['gh-pages']);
};
