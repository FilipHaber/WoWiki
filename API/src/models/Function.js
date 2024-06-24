import Query from "./Query.js";

class Function {
  static async getAll() {
    const query = `
      SELECT *
      FROM \`function\`
      `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
      SELECT *
      FROM \`function\`
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async add(data) {
    const query = `
      INSERT INTO \`function\` (function_name)
      VALUES (?)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async edit(data) {
    const query = `
      UPDATE \`function\`
      SET function_name = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async deleteById(data) {
    const query = `
      DELETE FROM \`function\`
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }
}

export default Function;
