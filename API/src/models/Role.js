import Query from "./Query.js";

class Role {
  /**
   * Retrieves all Roles from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of Roles.
   */

  static async getAll() {
    const query = `
      SELECT *
      FROM role
      `;

    return await Query.run(query);
  }

  /**
   * Retrieves a Role by its ID from the database.
   * @param {number} id - The ID of the Role to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the Role object.
   */

  static async getById(id) {
    const query = `
      SELECT *
      FROM role
      WHERE id = ?
      `;

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Adds a new Role to the database.
   * @param {string} Role_name - The name of the Role to add.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async add(data) {
    const query = `
      INSERT INTO role (role_name)
      VALUES (?)
      `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Updates an existing Role's name in the database.
   * @param {string} role_name - The updated name of the Role.
   * @param {number} id - The ID of the Role to update.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE role
      SET role_name = ?
      WHERE id = ?
      `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Deletes a Role from the database by its ID.
   * @param {number} id - The ID of the Role to delete.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async deleteById(id) {
    const query = `
      DELETE FROM role
      WHERE id = ?
      `;

    return await Query.runWithParams(query, [id]);
  }
}

export default Role;
