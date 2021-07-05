cordova.define("cordova-plugin-smartgarden.smartgarden", function(require, exports, module) {
module.exports = {
    changeTitle: function (title, success, error) {
        cordova.exec(success, error, "Smartgarden", "changeTitle", [ title ]);
    }
}
});
