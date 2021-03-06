module.exports = function (grunt) {

  var client = 'client';
  var js = client + '/assets/js';

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    clean: [ client + "/assets/js/bower_components"],

    shell: {
      prepareTests: {
        command: './'+client+'/spec/install-runner-dependencies ' + client + '/spec/runner',
        options: {
          stdout: true
        }
      }
    },
    jshint: {
      all: [
      'Gruntfile.js',
      'client/assets/js/controllers/**/*.js',
      'client/assets/js/directives/**/*.js',
      'server/**/*.js']
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', []);
  grunt.registerTask('test', [ 'jshint', 'shell:prepareTests', 'jasmine']);
};