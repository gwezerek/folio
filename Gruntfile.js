module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    copy: {
      css : {
        files: {
          '_site/css/site.css': 'css/site.css'
        }
      }
    },

    shell: {
      jekyll: {
        // command: 'rm -rf _site/*; jekyll',
        stdout: true
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compassCopy']
      },
      jekyllSources: {
        files: [
          // capture all except css
          '*.html', '*.yml', 'js/**.js', '_posts/**','_includes/**'
        ],
        tasks: ['shell:jekyll']
      }
    },

    connect: {
      server: {
        options: {
          base: '_site/',
          port: 9009
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    }

  });

  // less watch
  grunt.registerTask('compassCopy', ['compass:dev', 'copy:css']);

  grunt.registerTask('server', [
    'connect:server',
    'open:server',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', 'server');

};