cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-clipboard.Clipboard",
      "file": "plugins/cordova-clipboard/www/clipboard.js",
      "pluginId": "cordova-clipboard",
      "clobbers": [
        "cordova.plugins.clipboard"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-clipboard": "1.2.1",
    "cordova-plugin-whitelist": "1.3.3"
  };
});