module.exports = function api(options) {
  var valid_ops = { all: "all", byId: "byId" };
  //path for categories
  this.add("role:api,path:categories", function(msg, respond) {
    var operation = msg.args.params.operation;
    var id = msg.args.query.id;
    console.log("api categories");
    this.act(
      "role:categories",
      {
        cmd: valid_ops[operation], //categories/..
        id: id
      },
      respond
    );
  });
  //path for notes
  this.add("role:api,path:notes", function(msg, respond) {
    var operation = msg.args.params.operation;
    var id = msg.args.query.id;
    console.log("api notes");
    this.act(
      "role:notes",
      {
        cmd: valid_ops[operation], //notes/..
        id: id
      },
      respond
    );
  });
  //path for service info
  this.add("role:api,path:service", function(msg, respond) {
    console.log("api service");
    this.act(
      "role:service",
      {
        cmd: "get"
      },
      respond
    );
  });
  //api routes -> routes defined through seneca.act('role:web', {routes: routes})
  this.add("init:api", function(msg, respond) {
    console.log("init api");
    this.act(
      "role:web",
      {
        routes: {
          prefix: "/api", //url
          pin: "role:api,path:*", //patterns to match
          map: {
            //url endpoints (api/...), parameters and http methods
            categories: { GET: true, suffix: "/:operation" },
            notes: { GET: true, suffix: "/:operation" },
            service: { GET: true }
          }
        }
      },
      respond
    );
  });
};
