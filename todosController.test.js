const request = require("supertest");
const app = require("./app.js");

const dummy_task = {
  title: "Task Uji Coba",
  task: "Testing Taruh Task4",
  completed: false,
};

describe("Todos API", () => {
  let email = "chixia@admin.com";
  let password = "admin123";
  // Get all task/todos
  it("GET /api/todos - success", async () => {
    const res = await request(app)
      .get("/api/todos?page=1")
      .set("email", email)
      .set("password", password);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  //Input task
  it("POST /api/todos - success", async () => {
    const res = await request(app)
      .post("/api/todos")
      .set("email", email)
      .set("password", password)
      .send(dummy_task);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });

  //Get one task
  it("GET /api/todos/:id - success", async () => {
    const res = await request(app)
      .get("/api/todos/1")
      .set("email", email)
      .set("password", password);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
  });
  //Delete/inactive task
  it("DELETE /api/todos/:id - success", async () => {
    const res = await request(app)
      .delete("/api/todos/1")
      .set("email", email)
      .set("password", password);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
});
