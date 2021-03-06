module.exports = function(grunt) {
  var testConfig = grunt.file.readJSON('tasks/test-deploy.json');
  var productionConfig = grunt.file.readJSON('tasks/production-deploy.json');
  grunt.config('sshexec', {
    testRemovePath: {
      command: 'rm -rf ' + testConfig.path,
      options: {
        host: testConfig.host,
        username: testConfig.username,
        password: testConfig.password
      }
    },
    prductionRemovePath: {
      command: 'rm -rf ' + productionConfig.path,
      options: {
        host: productionConfig.host,
        username: productionConfig.username,
        password: productionConfig.password
      }
    }

  });

  grunt.config('sftp', {
    test: {
      files: {
        "./": "dist/**"
      },
      options: {
        path: testConfig.path,
        srcBasePath: "dist/",
        createDirectories: true,
        host: testConfig.host,
        username: testConfig.username,
        password: testConfig.password,
        showProgress: true
      }
    },
    production: {
      files: {
        "./": "dist/**"
      },
      options: {
        path: productionConfig.path,
        srcBasePath: "dist/",
        createDirectories: true,
        host: productionConfig.host,
        username: productionConfig.username,
        password: productionConfig.password,
        showProgress: true
      }
    }
  });

};
