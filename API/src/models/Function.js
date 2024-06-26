import Query from "./Query.js";

class Function {
  /**
   * Retrieves all functions from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of functions.
   */

  static async getAll() {
    const query = `
      SELECT *
      FROM \`function\`
      `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a function by its ID from the database.
   * @param {number} id - The ID of the function to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the function object.
   */

  static async getById(id) {
    const query = `
      SELECT *
      FROM \`function\`
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Adds a new function to the database.
   * @param {string} function_name - The name of the function to add.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async add(data) {
    const query = `
      INSERT INTO \`function\` (function_name)
      VALUES (?)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Updates an existing function's name in the database.
   * @param {string} function_name - The updated name of the function.
   * @param {number} id - The ID of the function to update.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE \`function\`
      SET function_name = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a function from the database by its ID.
   * @param {number} id - The ID of the function to delete.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async deleteById(id) {
    const query = `
      DELETE FROM \`function\`
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }
}

export default Function;
