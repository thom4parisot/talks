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

    watch: {
      core: {
        files: '<%= copy.core.src %>',
        tasks: ['copy:core']
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['copy', 'assemble']);
};
