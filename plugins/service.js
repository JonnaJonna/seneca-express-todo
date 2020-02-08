const serviceData = require("../data/service");
module.exports = function service(options) {
  //get service info
  this.add("role:service,cmd:get", getServiceInfo);
};

function getServiceInfo(msg, respond) {
  respond(null, { serviceData });
}

//service plugin
