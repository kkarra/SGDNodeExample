"use strict";

module.exports = function(grunt) {
	var BUILD_PATH = "public_build/";
	var CLIENT_DIR = "client/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
            dev: {
                dest: BUILD_PATH + "js/application.js",
                src: "client/js/application.js",
                options: {
                    debug: true
                }
            }
        },

		sass: {
			dev: {
				files: {
					"public_build/stylesheets/style.css": CLIENT_DIR + "scss/style.scss"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-sass");
};
