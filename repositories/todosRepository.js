const model = require("../models");

class TodosRepository {
  static async findAll(offset, limit) {
    return await model.Todos.findAll({
      where: {
        active: true,
      },
      offset: offset,
      limit: limit,
    });
  }

  static async findOneByTask(task) {
    return await model.Todos.findOne({
      where: {
        task: task,
      },
    });
  }

  static async create(taskData) {
    return await model.Todos.create(taskData);
  }

  static async findById(id) {
    return await model.Todos.findByPk(id);
  }
  // Soft delete menggunakan active/inactive
  static async updateStatus(id, status) {
    return await model.Todos.update(
      { active: status },
      {
        where: {
          id: parseInt(id),
        },
      }
    );
  }
}

module.exports = TodosRepository;
