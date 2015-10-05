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
        dest: 'dist/',
        expand: true
      },
      ui: {
        src: [
          'src/**/*',
          '!src/layouts',
          '!src/less'
        ],
        dest: 'dist',
        expand: true
      },
      dependencies: {
        src: [
          'bower_components/reveal.js/{css,js,lib}/**/*.{css,js}',
          'bower_components/reveal.js/plugin/{markdown,highlight,notes}/**/*.{css,js,html}'
        ],
        dest: 'dist/',
        expand: true
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
         '!<%= src %>/*/outline.md'
       ],
       dest: 'dist/',
       options: {
         layout: 'slides/cyneticmonkey.hbs'
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

    bower: 'bower_components',
    less: {
      core: {
        expand: true,
        flatten: true,
        ext: '.css',
        src: [
          'src/less/*.less',
          '!src/less/slides-*.less'
        ],
        dest: 'src/css',
        options: {
          paths: [
            '<%= bower %>/css.oncletom.io/src/less',
            '<%= bower %>/bootstrap/less'
          ]
        }
      },
      'slides-oncletom': {
        flatten: true,
        src: 'src/less/slides-oncletom.less',
        dest: 'src/css/slides-oncletom.css',
        options: {
          paths: [
            '<%= bower %>/css.oncletom.io/src/less',
            '<%= bower %>/bootstrap/less'
          ]
        }
      },
      'slides-cyneticmonkey': {
        flatten: true,
        src: 'src/less/slides-cyneticmonkey.less',
        dest: 'src/css/slides-cyneticmonkey.css',
        options: {
          paths: [
            '<%= bower %>/css.oncletom.io-cyneticmonkey/src/less/common',
            '<%= bower %>/bootstrap/less'
          ]
        }
      }
    },

    connect: {
      dev: {
        options: {
          hostname: 'localhost',
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
        files: [
          'src/less/**/*.less',
          'bower_components/css.oncletom.io/**/*.{css,less}',
          'bower_components/css.oncletom.io-cyneticmonkey/**/*.{css,less}'
        ],
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
