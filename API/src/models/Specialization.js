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

    return await Query.run(query);
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

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Adds a new specialization to the database.
   * @param {Array} data - An array containing specialization_name, description, image, alt, and tdh_id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async add(data) {
    const query = `
            INSERT INTO specialization (specialization_name, description, image, alt, tdh_id)
            VALUES (?, ?, ?, ?, ?)
            `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Edits an existing specialization in the database.
   * @param {Array} data - An array containing specialization_name, description, image, alt, tdh_id, and id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
            UPDATE specialization
            SET specialization_name = ?, description = ?, image = ?, alt = ?, tdh_id = ?
            WHERE id = ?
            `;

    return await Query.runWithParams(query, data);
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

    return await Query.runWithParams(query, [id]);
  }
}

export default Specialization;
