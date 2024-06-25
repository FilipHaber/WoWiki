import Query from "./Query.js";

class Comment {
  static async getAll() {
    const query = `
      SELECT *
      FROM comment
      `;

    const response = await Query.run(query);
    return response;
  }

  static async getByUserId(id, status) {
    const query = `
      SELECT *
      FROM comment
      WHERE user_id = ? AND status = ?
      `;

    const response = await Query.runWithParams(query, [id, status]);
    return response;
  }

  static async getByCharacterId(id) {
    const query = `
      SELECT *
      FROM comment
      WHERE character_id = ? AND status = 0
      `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async add(data) {
    const query = `
      INSERT INTO comment (content)
      VALUES (?)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async edit(data) {
    const query = `
      UPDATE comment
      SET content = ?
      WHERE user_id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }
}

export default Comment;
