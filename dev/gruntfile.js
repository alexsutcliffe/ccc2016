module.exports = function(grunt){  
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var jsVendorList = [
    	'vendor/jquery/dist/jquery.min.js'
    ];
    var jsFileList = [
    	'js/main.js'
    ];

	// Configure tasks here
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
					loadPath: require('node-bourbon').includePaths
				},
				files: {
					'../assets/css/main.css': 'scss/main.scss' 
				}
			}
		},

		jshint: {
			files: [jsFileList]
		},
        
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: [jsVendorList, jsFileList],
                dest: 'js/scripts.js'
            },
        },

        uglify: {
            my_target: {
	            options: {
	                compress: {
	                    drop_console: false 
	                },
	                sourceMap: false,
	                preserveComments: false
	            },
                files: {
                    '../assets/js/scripts.min.js': ['js/scripts.js'],
                }
            },
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'Firefox > 23', 'Chrome > 23', 'ios >= 6', 'android 2.3', 'android 4', 'opera 12']
            },
            default: {
                src: '../assets/css/main.css'
            }
        },

		watch: {
			grunt: { 
				files: ["gruntfile.js"], 
				tasks: ["default"] 
			},

			script: {
				files: [
                    jsVendorList, jsFileList
                ],
				tasks: ['default']
			},

			sass: {
				files: [
                    'scss/*.scss',
                    'scss/**/*.scss',
                ],
				tasks: ["default"]
			}

		}
	});

	// Register tasks here
	grunt.registerTask('default', [
		'sass',
		'jshint', 
		'concat',
		'uglify',
		'autoprefixer'
	]);
	
}