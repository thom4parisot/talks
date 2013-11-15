'use strict';

module.exports = function(grunt){
  grunt.initConfig({
   'now': (new Date).getFullYear(),

    copy: {
      core: {
        src: [
          '{2010..<%= now %>}/**/*',
          'src/**/*',
          'bower_components/reveal.js/{css,js,lib}/**/*.{css,js}',
          'bower_components/reveal.js/plugin/{markdown,highlight}/**/*.{css,js}'
        ],
        dest: 'dist/'
      },
      bower_trick: {
        expand: true,
        flatten: true,
        src: 'src/.gitignore',
        dest: 'dist/'
      }
    },

   'gh-pages': {
      gh: {
        src: '**/*',
        options: {
          base: 'dist/'
        }
      }
    },

    connect: {
      dev: {
        options: {
          port: process.env.PORT || 3000,
          open: true,
          debug: true,
          base: 'dist/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['copy', 'connect:dev:keepalive']);
  grunt.registerTask('deploy', ['copy', 'gh-pages']);
};
