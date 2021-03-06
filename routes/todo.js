module.exports = app => {
    const todos = require("../controllers/todo.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", todos.create);
  
    // Retrieve all todos
    router.get("/", todos.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", todos.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", todos.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", todos.delete);

    // Create a new Tutorial
    router.delete("/", todos.deleteAll);

    app.use('/api/todos', router);
};