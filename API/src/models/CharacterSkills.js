import Query from "./Query.js";

class CharacterSkills {
  /**
   * Retrieves all character skills from the database.
   *
   * @returns {Promise<Array>} - A promise resolving to an array of character skills.
   */

  static async getAll() {
    const query = `
            SELECT *
            FROM character_skills
            `;

    const response = await Query.run(query);
    return response;
  }

  /**
   * Retrieves a specific character skill by ID from the database.
   *
   * @param {number} id - The ID of the character skill to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the character skill object.
   */

  static async getById(id) {
    const query = `
            SELECT *
            FROM character_skills
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  /**
   * Adds a new character skill to the database.
   *
   * @param {Array} data - Array containing character_id, role_id, specialization_id of the new character skill.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async add(data) {
    const query = `
            INSERT INTO character_skills (character_id, role_id, specialization_id)
            VALUES (?, ?, ?)
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Updates an existing character skill in the database.
   *
   * @param {Array} data - Array containing character_id, role_id, specialization_id, and id of the character skill to update.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async edit(data) {
    const query = `
            UPDATE character_skills
            SET character_id = ?, role_id = ?, specialization_id = ?
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Deletes a character skill from the database by ID.
   *
   * @param {number} id - The ID of the character skill to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async deleteById(id) {
    const query = `
      DELETE FROM character_skills
      WHERE id = ?
      `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }
}

export default CharacterSkills;
