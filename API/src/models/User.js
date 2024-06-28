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

    return await Query.run(query);
  }

  /**
   * Retrieves a user by their ID from the database.
   * @param {number} id - The ID of the user to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the user object.
   */

  static async getById(id) {
    const query = `
      SELECT 
      user.id, user.nickname, user.email, user.password, user.created_at, user.status,
      role.role_name
      FROM user
      INNER JOIN role ON user.role_id = role.id
      WHERE user.id = ?
      `;

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Updates a user's status and role_id in the database.
   * @param {Array} data - An array containing status, role_id, and user_id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE user
      SET status = ?, role_id = ?
      WHERE id = ?
      `;

    return await Query.runWithParams(query, data);
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

    return await Query.runWithParams(query, [id]);
  }
}

export default Users;
