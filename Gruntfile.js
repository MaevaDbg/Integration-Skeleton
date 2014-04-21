module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch')

  var jsSrc = ['_components/scripts/jquery-2.1.0.js', '_components/scripts/home.js']
    , jsDist = 'js/app.js'

  // Configuration de Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // configuration des tâches grunt
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: jsSrc,
        dest: jsDist
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: jsSrc,
        dest: jsDist
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: '**/*.js', // tous les fichiers JavaScript de n'importe quel dossier
        tasks: ['concat:dist']
      },
      styles: {
        files: '**/*.scss', // tous les fichiers Sass de n'importe quel dossier
        tasks: ['compass:dist']
      }
    }

  });

  // Les tâches sont enregistrées ici
  grunt.registerTask('default', ['dev', 'watch'])
  grunt.registerTask('dev', ['concat:dist','compass:dist']);
  grunt.registerTask('prod', ['uglify:dist']);

};