const { verifySystem } = require('workshop-setup');
const { exec } = require('child_process');

const getAngularCliVersion = () => {
  return new Promise((resolve, reject) => {
    exec(`ng --version`, (err, stdout) => {
      if (err) {
        return reject(`Please install @angular/cli. npm install -g @angular/cli`);
      }
      const version = stdout.match(/@angular\/cli:\s*(\d+\.\d+\.\d+)/).pop();
      return resolve(version);
    });
  });
};

const validateAngularCli = () => {
  return getAngularCliVersion()
    .then(version => {
      const range = '>=1.0.0';
      const valid = verifySystem.utils.semver.satisfies(version, range);
      if (valid) {
        return null;
      }
      return [
        `You have version ${version} of @angular/cli, but`,
        `should have a version in the range: ${range}`
      ].join(' ');
    });
};

const validateGlobals = function () {
  return verifySystem([
    verifySystem.validators.node('>=6.0.0'),
    verifySystem.validators.yarnNpm('>=0.20.0', '>=3.0.0')
  ]
    .concat(validateAngularCli)
  )
    .catch(errors => {
      console.error(errors);
      process.exit(1);
    });
};

validateGlobals()
  .then(() => {
    console.log('🎉  Congrats! Your system is setup properly')
    console.log('You should be good to install and run things.')
  })
