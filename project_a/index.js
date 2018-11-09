// hardcoded dependency
var projectB = require("../project_b/");

projectB.printMsg();

exports.printMsg = function() {
    console.log("Project A");
}