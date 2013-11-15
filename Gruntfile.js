'use strict';

module.exports = function(grunt){
  grunt.initConfig({
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

  grunt.registerTask('default', ['connect:dev:keepalive']);
};
