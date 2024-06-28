import Query from "./Query.js";

class Tdh {
  /**
   * Retrieves all Tdh from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of Tdh.
   */

  static async getAll() {
    const query = `
      SELECT *
      FROM tdh
      `;

    return await Query.run(query);
  }

  /**
   * Retrieves a tdh by its ID from the database.
   * @param {number} id - The ID of the tdh to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the tdh object.
   */

  static async getById(id) {
    const query = `
      SELECT *
      FROM tdh
      WHERE id = ?
      `;

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Adds a new tdh to the database.
   * @param {Array} data - An array containing tdh_name, image, alt, and description.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async add(data) {
    const query = `
      INSERT INTO tdh (tdh_name, image, alt, description)
      VALUES (?, ?, ?, ?)
      `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Edits an existing tdh in the database.
   * @param {Array} data - An array containing tdh_name, image, alt, description, and id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE tdh
      SET tdh_name = ?, image = ?, alt = ?, description = ?
      WHERE id = ?
      `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Deletes a tdh from the database by its ID.
   * @param {number} id - The ID of the tdh to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async deleteById(id) {
    const query = `
            DELETE FROM tdh
            WHERE id = ?
            `;

    return await Query.runWithParams(query, [id]);
  }
}

export default Tdh;
