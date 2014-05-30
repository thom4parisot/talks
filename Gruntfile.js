'use strict';

module.exports = function(grunt){
  grunt.initConfig({
   'now': (new Date).getFullYear(),
   'src': '{2008..<%= now %>}',

    copy: {
      core: {
        src: [
          '<%= src %>/**/*',
          '!<%= src %>/*/*.{md,json}'
        ],
        dest: 'dist/'
      },
      ui: {
        src: [
          'src/**/*',
          '!src/layouts',
          '!src/less'
        ],
        dest: 'dist/'
      },
      dependencies: {
        src: [
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
       helpers: [
         './lib/hbs/index.js'
       ],
       partials: [
         'src/partials/**/*.hbs',
         'bower_components/css.oncletom.io/src/partials/**/*.hbs'
       ],
       data: [
         'bower_components/css.oncletom.io/package.json',
         'bower_components/css.oncletom.io/src/config.json'
       ]
     },

     presentations: {
       src: [
         '<%= src %>/*/*.md',
         '!outline.md'
       ],
       dest: 'dist/',
       options: {
         layout: 'presentation.hbs'
       }
     },
     indexes: {
       src: '<%= src %>/*/index.json',
       dest: 'dist/',
       options: {
         layout: 'indexes.hbs'
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

    less: {
      core: {
        expand: true,
        flatten: true,
        ext: '.css',
        src: 'src/less/*.less',
        dest: 'src/css'
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
    },

    watch: {
      core: {
        files: '<%= copy.core.src %>',
        tasks: ['copy:core']
      },
      less: {
        files: '<%= less.core.src %>',
        tasks: ['less']
      },
      ui: {
        files: '<%= copy.ui.src %>',
        tasks: ['copy:ui']
      },
      dependencies: {
        files: '<%= copy.dependencies.src %>',
        tasks: ['copy:dependencies']
      },
      presentations: {
        files: [
          'src/layouts/**/*.hbs',
          '<%= assemble.presentations.src %>'
        ],
        tasks: ['assemble']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['build', 'connect:dev:keepalive']);
  grunt.registerTask('build', ['less', 'copy', 'assemble']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
};
