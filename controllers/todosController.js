const TodosService = require("../services/todosService.js");

class Todos {
  static async getAll(req, res) {
    try {
      const { page } = req.query;
      const result = await TodosService.getAll(page);
      res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Failed to get tasks",
      });
    }
  }

  static async post(req, res) {
    try {
      const taskData = req.body;
      const result = await TodosService.createTask(taskData);
      res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const result = await TodosService.getOne(id);
      res.status(result.status).json({
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await TodosService.deleteTask(id);
      res.status(result.status).json({
        message: result.message,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}

module.exports = Todos;
