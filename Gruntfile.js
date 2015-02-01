module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            production: {
                options: {
                    compress: true,
                    cleancss: true,
                    paths: ['bower_components/bootstrap/less', 'bower_components/font-awesome/less']
                },
                files: {
                    'assets/css/bootstrap.min.css': 'bower_components/bootstrap/less/bootstrap.less',
                    'assets/css/font-awesome.min.css': 'bower_components/font-awesome/less/font-awesome.less'
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
            normalize: {
                files: [
                    {expand: true, cwd: 'bower_components/normalize-css/', src: ['normalize.css'], dest: 'assets/css/'}
                ]
            },
            fontawesome: {
                files: [
                    {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['*'], dest: 'assets/fonts/'}
                ]
            }
        },
        watch: {
            styles: {
                files: 'assets/css/main.css',
                tasks: []
            }
        },
        concurrent: {
            dev: ['watch', 'exec:serve'],
            options: {
                logConcurrentOutput: true
            }
        },
        exec: {
            build: {
                cmd: 'bundle exec jekyll build'
            },
            serve: {
                cmd: 'bundle exec jekyll serve --watch'
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
    grunt.registerTask('serve', [ 'less', 'uglify', 'copy', 'exec:serve' ]);
    grunt.registerTask('deploy', [ 'exec:deploy' ]);

};
