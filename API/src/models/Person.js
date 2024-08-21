import Query from "./Query.js";

class Persons {
  /**
   * Retrieves all persons from the database.
   *
   * @returns {Promise<Array>} - A promise resolving to an array of persons.
   */

  static async getAll() {
    const query = `
    SELECT * 
    FROM person
    `;
    return await Query.run(query);
  }

  /**
   * Retrieves a specific person by ID from the database.
   *
   * @param {number} id - The ID of the person to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the person object.
   */

  static async getById(id) {
    const query = `
    SELECT
    person.id, person.person_name, person.image AS person_image, person.alt AS person_alt, person.description AS person_description,
    specialization.specialization_name, specialization.image AS specialization_image, specialization.alt AS specialization_alt, specialization.description AS specialization_description, specialization.important_skills, specialization.skill1, specialization.skill2,
    tdh.tdh_name, tdh.image AS tdh_image, tdh.alt AS tdh_alt, tdh.description AS tdh_description,
    comment.id AS comment_id,comment.user_id AS comment_user_id, comment.content AS comment_content, comment.publish_date AS comment_date, comment.status AS comment_status,
    user.nickname AS user_nickname, user.status AS user_status
    FROM person
    LEFT JOIN person_skills ON person.id = person_skills.person_id
    LEFT JOIN specialization ON person_skills.specialization_id = specialization.id
    LEFT JOIN tdh ON person_skills.tdh_id = tdh.id
    LEFT JOIN comment ON comment.person_id = person.id
    LEFT JOIN user ON user.id = comment.user_id
    WHERE person.id = ?
    `;

    return await Query.runWithParams(query, [id]);
  }

  /**
   * Adds a new person to the database.
   *
   * @param {Array} data - Array containing person_name, image, alt, description of the new person.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async add(data) {
    const query = `
    INSERT INTO person (person_name, image, alt, description)
    VALUES (?, ?, ?, ?)
    `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Updates an existing person in the database.
   *
   * @param {Array} data - Array containing person_name, image, alt, description, and id of the person to update.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async edit(data) {
    const query = `
    UPDATE person
    SET person_name = ?, image = ?, alt = ?, description = ?
    WHERE id = ?
    `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Deletes a person from the database by ID.
   *
   * @param {number} id - The ID of the person to delete.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async deleteById(id) {
    const query = `
    DELETE FROM person
    WHERE id = ?
    `;

    return await Query.runWithParams(query, [id]);
  }
}

export default Persons;
