import Query from "./Query.js";

class Specialization {
  /**
   * Retrieves all specializations from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of specialization objects.
   */

  static async getAll() {
    const query = `
            SELECT *
            FROM specialization
            `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a specialization by its ID from the database.
   * @param {number} id - The ID of the specialization to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the specialization object.
   */

  static async getById(id) {
    const query = `
            SELECT *
            FROM specialization
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Adds a new specialization to the database.
   * @param {Array} data - An array containing specialization_name, description, image, alt, and role_id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async add(data) {
    const query = `
            INSERT INTO specialization (specialization_name, description, image, alt, role_id)
            VALUES (?, ?, ?, ?, ?)
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Edits an existing specialization in the database.
   * @param {Array} data - An array containing specialization_name, description, image, alt, role_id, and id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
            UPDATE specialization
            SET specialization_name = ?, description = ?, image = ?, alt = ?, role_id = ?
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a specialization from the database by its ID.
   * @param {number} id - The ID of the specialization to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async deleteById(id) {
    const query = `
            DELETE FROM specialization
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }
}

export default Specialization;
