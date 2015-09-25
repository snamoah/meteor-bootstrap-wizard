Package.describe({
  name: 'snamoah:bootstrap-wizard',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapper for twitter bootstrap wizard',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/snamoah/meteor-bootstrap-wizard.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('bootstrap-wizard.js');
  api.addFiles([
    'jquery.bootstrap.wizard.min.js'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('snamoah:bootstrap-wizard');
  api.addFiles('bootstrap-wizard-tests.js');
});
