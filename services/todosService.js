const TodosRepository = require("../repositories/todosRepository.js");

class TodosService {
  static async getAll(page) {
    const limit = 10;
    const offset = (page - 1) * limit;
    const data = await TodosRepository.findAll(offset, limit);
    return {
      status: 200,
      message: "Successfully retrieved tasks",
      data,
    };
  }

  static async createTask(taskData) {
    const { title, task, completed } = taskData;

    if (!title || !task || completed === undefined || completed === null) {
      return { status: 400, message: "Invalid input" };
    }

    const existingTask = await TodosRepository.findOneByTask(task);

    if (existingTask) {
      return { status: 400, message: "Task already exists" };
    }

    const postTask = await TodosRepository.create({ title, task, completed });
    return {
      status: 200,
      message: "Task successfully created",
      data: postTask,
    };
  }

  static async getOne(id) {
    const data = await TodosRepository.findById(id);
    if (!data) {
      return { status: 404, message: "Task not found" };
    }
    return {
      status: 200,
      message: "Task found",
      data,
    };
  }

  static async deleteTask(id) {
    const result = await TodosRepository.updateStatus(id, false);
    if (result[0] === 0) {
      return { status: 404, message: "Task not found" };
    }
    return { status: 200, message: "Task successfully deleted" };
  }
}

module.exports = TodosService;
