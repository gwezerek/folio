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

    // shell: {
    //   jekyll: {
    //     command: 'rm -rf _site/*; jekyll',
    //     stdout: true
    //   }
    // },

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
      }
      // jekyllSources: {
      //   files: [
      //     // capture all except css
      //     '*.html', '*.yml', 'js/**.js', '_posts/**','_includes/**'
      //   ]
      //   // tasks: ['shell:jekyll']
      // }
    }

    // connect: {
    //   server: {
    //     options: {
    //       base: '_site/',
    //       port: 9009
    //     }
    //   }
    // },

    // open: {
    //   server: {
    //     path: 'http://localhost:<%= connect.server.options.port %>/'
    //   }
    // }

  });

  // less watch
  grunt.registerTask('compassCopy', ['compass:dev', 'copy:css']);

  grunt.registerTask('server', [
    // 'connect:server',
    // 'open:server',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', 'server');

};



      // sass: {
      //   files: ['sass/**/*.scss'],
      //   tasks: ['compassCopy']
      // }


// module.exports = function(grunt) {

//     // Bring in all the plugins listed in the packages.json file and load their tasks
//     require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

//     grunt.initConfig({

//       copy: {
//         css : {
//           files: {
//             '_site/css/site.css': 'css/site.css'
//           }
//         }
//       },

//       shell: {
//           // jekyllBuild: {
//           //     command: 'jekyll build'
//           // },
//           // jekyllServe: {
//           //     command: 'jekyll serve'
//           // }
//           jekyll: {
//             command: 'rm -rf _site/*; jekyll',
//             stdout: true
//           }
//       },
//       compass: {
//         dev: {
//           options: {
//             // 2. Compiling task
//             sassDir: 'sass',
//             cssDir: 'css'
//           }
//         }
//       },


//       // watch: {
//       //   sass: {
//       //     // 1. We watch and compile sass files as normal but don't live reload here
//       //     files: ['sass/**/*.scss'],
//       //     tasks: ['compass']
//       //   },
//       //   files: [
//       //       '_includes/*.html',
//       //       '_layouts/*.html',
//       //       '_posts/*.html',
//       //       '_config.yml',
//       //       'index.html'
//       //   ],
//       //   tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
//       //   livereload: {
//       //     // 3. Here we watch the css file the compass task will compile to
//       //     //    These files are sent to the live reload server after compass compiles to them
//       //     //    atBegin reloads upon the terminal command and not just on save 
//       //     options: { livereload: true, atBegin: true, interrupt: true },
//       //     files: ['css/site.css'],
//       //   }
//       // }

//       watch: {
//         options: {
//           livereload: true
//         },
//         compass: {
//           files: ['sass/**/*.scss'],
//           tasks: ['sassCopy']
//         },
//         jekyllSources: {
//           files: [
//             // capture all except css
//             '*.html', '*.yml', 'js/**.js', '_posts/**','_includes/**'
//           ],
//           tasks: ['shell:jekyll']
//         }
//       },



//       connect: {
//         server: {
//           options: {
//             base: '_site/',
//             port: 4000
//           }
//         }
//       },
//       open: {
//         server: {
//           path: 'http://localhost:<%= connect.server.options.port %>/'
//         }
//       }

//     });
 
//     grunt.registerTask('sassCopy', ['compass:dev', 'copy:css']);

//     grunt.registerTask('server', [
//       // 'connect:server',
//       // 'open:server',
//       'watch'
//     ]);

//     // Default task.
//     grunt.registerTask('default', 'server');

//   // the default task can be run just by typing "grunt" on the command line
//     // grunt.registerTask('default', 'watch');
// };

