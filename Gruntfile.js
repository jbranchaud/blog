module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    paths: ['bower_components/bootstrap/less']
                },
                files: {
                    'assets/css/bootstrap.min.css': 'bower_components/bootstrap/less/bootstrap.less'
                }
            }
        },
        uglify: {
            jquery: {
                files: {
                    'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
                }
            }
        },
        copy: {
            images: {
                files: [
                    {expand: true, cwd: 'img/', src: ['**'], dest: 'assets/img/'}
                ]
            },
            styles: {
                files: [
                    {expand: true, cwd: 'css/', src: ['styles.css', 'main.css'], dest: 'assets/css/'}
                ]
            },
            normalize: {
                files: [
                    {expand: true, cwd: 'bower_components/normalize-css/', src: ['normalize.css'], dest: 'assets/css/'}
                ]
            },
            fontawesome: {
                files: [
                    {expand: true, cwd: 'bower_components/font-awesome/css/', src: ['font-awesome.min.css'], dest: 'assets/css/'},
                    {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['*'], dest: 'assets/fonts/'}
                ]
            }
        },
        watch: {
            styles: {
                files: 'css/**/*',
                tasks: ['copy:styles']
            },
            images: {
                files: 'img/**/*',
                tasks: ['copy:images']
            }
        },
        concurrent: {
            dev: ['watch', 'exec:serve']
        },
        exec: {
            build: {
                cmd: 'jekyll build'
            },
            serve: {
                cmd: 'jekyll serve --watch'
            },
            deploy: {
                cmd: 'git push deploy master; git push origin master;'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', [ 'less', 'uglify', 'copy', 'exec:build' ]);
    grunt.registerTask('serve', [ 'less', 'uglify', 'copy', 'concurrent:dev' ]);
    grunt.registerTask('deploy', [ 'exec:deploy' ]);

};
