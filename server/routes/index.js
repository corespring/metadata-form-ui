require('coffee-script');

var config = require('../config');

exports.init = function (app, packageJson) {



  app.get('/', function (req, res) {
    var params = {
      jsString: exports.jsString,
      title: "Metadata Form UI",
      appVersion: packageJson.version,
      projectHomepage: packageJson.homepage,
      corespringUrl: config.get("CORESPRING_URL")
    };
    res.render('index', params);
  });
};
