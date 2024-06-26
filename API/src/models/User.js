import Query from "./Query.js";

class Users {
  /**
   * Retrieves all users from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of user objects.
   */

  static async getAll() {
    const query = `
            SELECT *
            FROM user
            `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a user by their ID from the database.
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the user object.
   */

  static async getById(id) {
    const query = `
      SELECT *
      FROM user
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Updates a user's status and function_id in the database.
   * @param {Array} data - An array containing status, function_id, and user_id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE user
      SET status = ?, function_id = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a user from the database by their ID.
   * @param {number} id - The ID of the user to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async deleteById(id) {
    const query = `
    DELETE FROM user
    where id = ?
    `;

    const response = await Query.runWithParams(query, id);
    return response;
  }
}

export default Users;
