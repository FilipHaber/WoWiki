import Query from "./Query.js";

class Characters {
  /**
   * Retrieves all characters from the database.
   *
   * @returns {Promise<Array>} - A promise resolving to an array of characters.
   */

  static async getAll() {
    const query = `
            SELECT *
            FROM \`character\`
            `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a specific character by ID from the database.
   *
   * @param {number} id - The ID of the character to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the character object.
   */

  static async getById(id) {
    const query = `
    SELECT id, character_name, image, alt, description
    FROM \`character\`
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Adds a new character to the database.
   *
   * @param {Array} data - Array containing character_name, image, alt, description of the new character.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async add(data) {
    const query = `
    INSERT INTO \`character\` (character_name, image, alt, description)
    VALUES (?, ?, ?, ?)
    `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Updates an existing character in the database.
   *
   * @param {Array} data - Array containing character_name, image, alt, description, and id of the character to update.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async edit(data) {
    const query = `
    UPDATE \`character\`
    SET character_name = ?, image = ?, alt = ?, description = ?
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a character from the database by ID.
   *
   * @param {number} id - The ID of the character to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async deleteById(id) {
    const query = `
    DELETE FROM \`character\`
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }
}

export default Characters;
