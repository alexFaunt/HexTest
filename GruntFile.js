module.exports = function (grunt) {


    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'main.css': 'main.scss'
          }
        }
      },
     watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    connect: {
        server: {
          options: {
            port: 1234,
            hostname: '*'
          }
        }
      }
    });



    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass', 'connect', 'watch']);

};
