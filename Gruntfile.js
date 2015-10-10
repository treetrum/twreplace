module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					banner: '<%= tag.banner %>'
				},
				files: {
					'css/app.css' : 'scss/app.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		tag: {
			banner: '/*!\n' +
				    ' * <%= pkg.name %>\n' +
				    ' * <%= pkg.description %>\n' +
				    ' * <%= pkg.homepage %>\n' +
				    ' * @author <%= pkg.author %>\n' +
				    ' * @version <%= pkg.version %>\n' +
				    ' * Copyright 2015. <%= pkg.license %> licensed.\n' +
				    ' */\n'
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}