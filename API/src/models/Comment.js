import Query from "./Query.js";

class Comment {
  /**
   * Retrieves all comments with a specific status from the database.
   * @param {number} status - The status of comments to retrieve.
   * @returns {Promise<Array>} - A promise resolving to an array of comments.
   */

  static async getAll(status) {
    const query = `
      SELECT *
      FROM comment
      WHERE status = ?
      `;

    const response = await Query.runWithParams(query, [status]);
    return response;
  }

  /**
   * Retrieves comments by user ID and specific status from the database.
   * @param {number} id - The user ID to filter comments.
   * @param {number} status - The status of comments to retrieve.
   * @returns {Promise<Array>} - A promise resolving to an array of comments.
   */

  static async getByUserId(id, status) {
    const query = `
      SELECT *
      FROM comment
      WHERE user_id = ? AND status = ?
      `;

    const response = await Query.runWithParams(query, [id, status]);
    return response;
  }

  /**
   * Retrieves comments by character ID and specific status from the database.
   * @param {number} id - The character ID to filter comments.
   * @param {number} status - The status of comments to retrieve.
   * @returns {Promise<Array>} - A promise resolving to an array of comments.
   */

  static async getByCharacterId(id, status) {
    const query = `
      SELECT *
      FROM comment
      WHERE character_id = ? AND status = ?
      `;

    const response = await Query.runWithParams(query, [id, status]);
    return response;
  }

  /**
   * Adds a new comment to the database.
   * @param {Object} data - The comment data to be inserted.
   * @param {string} data.content - The content of the comment.
   * @param {number} data.user_id - The user ID associated with the comment.
   * @param {number} data.character_id - The character ID associated with the comment.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async add(data) {
    // La requete devra être changer "character_id"
    const query = `
      INSERT INTO comment (content, user_id, character_id)
      VALUES (?, ?, 6)
      `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  /**
   * Edits an existing comment in the database.
   * @param {string} content - The updated content of the comment.
   * @param {number} id - The ID of the comment to be updated.
   * @param {number} userId - The user ID of the comment's owner.
   * @returns {Promise<Object>} - A promise resolving to the response object from the database.
   */

  static async edit(content, id, userId) {
    const query = `
      UPDATE comment
      SET content = ?
      WHERE id = ? AND user_id = ?
      `;

    const response = await Query.runWithParams(query, [content, id, userId]);
    return response;
  }
}

export default Comment;
