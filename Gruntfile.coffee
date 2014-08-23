module.exports = (grunt) ->
  
  grunt.registerTask 'printStuff', -> console.log 'doing stuff..'
  
  # load NPM tasks
  grunt.loadNpmTasks "grunt-browserify"
  
  grunt.initConfig({})
  
    # browserify
    # browserify:
    #   dev:
    #   production:
  
  # default task
  grunt.registerTask 'default', ['printStuff']
