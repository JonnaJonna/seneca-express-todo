var SenecaWeb = require("seneca-web");
var Express = require("express");
var Router = Express.Router;
var context = new Router();

var senecaWebConfig = {
  context: context,
  adapter: require("seneca-web-adapter-express"),
  options: { parseBody: false }
};

var app = Express()
  .use(require("body-parser").json())
  .use(context)
  .listen(3000, () => console.log(`Server started on port 3000`));
//create seneca instance and load the api plugin,
//use client to send matching actions to microservices
var seneca = require("seneca")()
  .use(SenecaWeb, senecaWebConfig)
  .use(require("./plugins/api"))
  .client({ type: "tcp", pin: "role:categories" })
  .client({ type: "tcp", pin: "role:notes" })
  .client({ type: "tcp", pin: "role:service" });
