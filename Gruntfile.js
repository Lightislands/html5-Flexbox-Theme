module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            dist: {
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },
        
        watch: {
            less: {
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }

        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            your_target: {
                src: 'css/style.css',
                dest: 'css/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'less');
    grunt.loadNpmTasks('grunt-autoprefixer');
};