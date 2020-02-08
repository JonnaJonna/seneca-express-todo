require("seneca")()

  .use("plugins/categories.js")
  .use("plugins/notes.js")
  .use("plugins/service.js")

  // create microservices calling seneca.listen
  // must match seneca.client
  .listen({
    type: "tcp",
    pin: "role:categories",
    pin: "role:notes",
    pin: "role:service"
  });

console.log("notes pin service");
