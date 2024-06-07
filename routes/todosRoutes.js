const express = require("express");
const Todos = require("../controllers/todosController.js");
const auth = require("../middlewares/auth.js");
const todosRoutes = express.Router();

todosRoutes.get("/todos", auth, Todos.getAll);
todosRoutes.get("/todos/:id", auth, Todos.getOne);
todosRoutes.post("/todos", auth, Todos.post);
// todosRoutes.put("/todos/:id", auth, Todos.put);
todosRoutes.delete("/todos/:id", auth, Todos.delete);
module.exports = todosRoutes;
