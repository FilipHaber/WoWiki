import Query from "./Query.js";

class PersonSkills {
  /**
   * Retrieves all person skills from the database.
   *
   * @returns {Promise<Array>} - A promise resolving to an array of person skills.
   */

  static async getAll() {
    const query = `
            SELECT *
            FROM person_skills
            `;

    return await Query.run(query);
  }

  /**
   * Retrieves a specific person skill by ID from the database.
   *
   * @param {number} id - The ID of the person skill to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the person skill object.
   */

  static async getById(id) {
    const query = `
            SELECT *
            FROM person_skills
            WHERE id = ?
            `;

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Adds a new person skill to the database.
   *
   * @param {Array} data - Array containing person_id, role_id, specialization_id of the new person skill.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async add(data) {
    const query = `
            INSERT INTO person_skills (person_id, tdh_id, specialization_id)
            VALUES (?, ?, ?)
            `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Updates an existing person skill in the database.
   *
   * @param {Array} data - Array containing person_id, role_id, specialization_id, and id of the person skill to update.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async edit(data) {
    const query = `
            UPDATE person_skills
            SET person_id = ?, tdh_id = ?, specialization_id = ?
            WHERE id = ?
            `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Deletes a person skill from the database by ID.
   *
   * @param {number} id - The ID of the person skill to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async deleteById(id) {
    const query = `
      DELETE FROM person_skills
      WHERE id = ?
      `;

    return await Query.runWithParams(query, [id]);
  }
}

export default PersonSkills;
