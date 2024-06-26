import Query from "./Query.js";

class Roles {
  /**
   * Retrieves all roles from the database.
   * @returns {Promise<Array>} - A promise resolving to an array of roles.
   */

  static async getAll() {
    const query = `
      SELECT *
      FROM role
      `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a role by its ID from the database.
   * @param {number} id - The ID of the role to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the role object.
   */

  static async getById(id) {
    const query = `
      SELECT id, role_name, image, alt, description
      FROM role
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Adds a new role to the database.
   * @param {Array} data - An array containing role_name, image, alt, and description.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async add(data) {
    const query = `
      INSERT INTO role (role_name, image, alt, description)
      VALUES (?, ?, ?, ?)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Edits an existing role in the database.
   * @param {Array} data - An array containing role_name, image, alt, description, and id.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async edit(data) {
    const query = `
      UPDATE role
      SET role_name = ?, image = ?, alt = ?, description = ?
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a role from the database by its ID.
   * @param {number} id - The ID of the role to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database.
   */

  static async deleteById(id) {
    const query = `
            DELETE FROM role
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }
}

export default Roles;
