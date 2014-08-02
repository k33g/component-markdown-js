module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json'),
    npmTasks = [
      'grunt-contrib-copy',
      'grunt-contrib-uglify'
    ];

  grunt.initConfig({
    pkg: pkg,
    uglify: {
      main: {
        options: {
          sourceMap: true
        },
        files: {
          'markdown.min.js': 'markdown.js'
        }
      }
    },
    copy: {
      main: {
        src: 'node_modules/markdown/lib/markdown.js',
        dest: './markdown.js'
      }
    }
  });

  npmTasks.forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['copy', 'uglify']);
};