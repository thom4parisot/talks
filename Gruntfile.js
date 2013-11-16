'use strict';

module.exports = function(grunt){
  grunt.initConfig({
   'now': (new Date).getFullYear(),

    copy: {
      core: {
        src: [
          '{2010..<%= now %>}/**/*',
          '!{2010..<%= now %>}/*/*.{md,json}',
          'src/**/*',
          '!src/layouts',
          'bower_components/css.oncletom.io/dist/*.{css,js}',
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

   assemble: {
     options: {
       assets: 'dist',
       layoutdir: 'src/layouts',
       helpers: ['./lib/hbs/index.js']
     },

     presentations: {
       src: '{2010..<%= now %>}/*/*.md',
       dest: 'dist/',
       options: {
         layout: 'presentation.hbs'
       }
     },
     indexes: {
       src: '{2010..<%= now %>}/*/index.json',
       dest: 'dist/',
       options: {
         layout: 'indexes.hbs',
         helpers: ['./lib/hbs/index.js']
       }
     },
     home: {
       src: 'index.md',
       dest: 'dist/',
       options: {
         layout: 'home.hbs'
       }
     }
   },

   'gh-pages': {
      gh: {
        src: [
          '**/*',
          '.gitignore'
        ],
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
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['build', 'connect:dev:keepalive']);
  grunt.registerTask('build', ['copy', 'assemble']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
};
