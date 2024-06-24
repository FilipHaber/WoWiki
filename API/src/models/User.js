import Query from "./Query.js";

class Users {
  static async getAll() {
    const query = `
            SELECT *
            FROM user
            `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
      SELECT *
      FROM user
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async edit(data) {
    const query = `
      UPDATE user
      SET status = ?, function_id = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }
}

export default Users;
