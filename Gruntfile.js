var grunt = require('grunt');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        preprocess: {
            main: {
                src: './src/Melvin.js',
                dest: './lib/melvinjs.js'
            }
        },
        uglify: {
            main: {
                src: './lib/melvinjs.js',
                dest: './lib/melvinjs.min.js'
            }
        }
    });

    grunt.registerTask('build', ['preprocess']);
    grunt.registerTask('release', ['build', 'uglify']);

    grunt.registerTask('default', ['release']);
};