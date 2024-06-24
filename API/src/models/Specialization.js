import Query from "./Query.js";

class Specialization {
  static async getAll() {
    const query = `
            SELECT *
            FROM specialization
            `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
            SELECT *
            FROM specialization
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async add(data) {
    const query = `
            INSERT INTO specialization (specialization_name, description, image, alt, role_id)
            VALUES (?, ?, ?, ?, ?)
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async edit(data) {
    const query = `
            UPDATE specialization
            SET specialization_name = ?, description = ?, image = ?, alt = ?, role_id = ?
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async deleteById(id) {
    const query = `
            DELETE FROM specialization
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, id);
    return response;
  }
}

export default Specialization;
