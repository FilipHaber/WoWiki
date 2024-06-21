import Query from "./Query.js";

class Roles {
  static async getAll() {
    const query = `
      SELECT id, role_name, image, alt
      FROM role
      `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
      SELECT id, role_name, image, alt, description
      FROM role
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async add(data) {
    const query = `
      INSERT INTO role (role_name, image, alt, description)
      VALUES (?, ?, ?, ?)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async editById(data) {
    const query = `
      UPDATE role
      SET role_name = ?, image = ?, alt = ?, description = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async deleteById(id) {
    const query = `
            DELETE FROM role
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, id);
    return response;
  }
}

export default Roles;
