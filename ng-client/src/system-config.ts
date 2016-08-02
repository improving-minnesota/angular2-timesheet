// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'angular2-jwt': 'vendor/angular2-jwt'
};

/** User packages configuration. */
const packages: any = {};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/auth',
  'app/landing-page',
  'app/login',
  'app/navigatiom',
  'app/navigation',
  'app/timesheets',
  'app/project',
  'app/project-list',
  'app/employee-list',
  'app/timesheet-list',
  'app/timesheet-detail',
  'app/project-new',
  'app/employee-new',
  'app/timesheet-new',
  'app/time-units',
  'app/timesheet',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'moment': 'vendor/moment',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// put the names of any of your Material components here
const materialPkgs: string[] = [
  'core',
  'button',
  'card',
  'toolbar',
  'input',
  'list',
  'progress-circle',
  'icon',
  'checkbox'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

/** User packages configuration. */
packages['angular2-jwt'] = {
  main: 'angular2-jwt.js'
};

packages['moment'] = {
  main: 'moment.js'
};

// Apply the user's configuration.
System.config({map, packages});
