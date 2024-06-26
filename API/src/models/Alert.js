import Query from "./Query.js";

class Alert {
  /**
   * Retrieves all alerts with a specific status from the database.
   *
   * @param {number} status - The status of alerts to retrieve.
   * @returns {Promise<Array>} - A promise resolving to an array of alerts matching the status.
   */

  static async getAllNoTreaten(status) {
    const query = `
            SELECT *
            FROM alert
            WHERE status = ?
            `;

    const response = await Query.runWithParams(query, [status]);
    return response;
  }

  /**
   * Adds a new alert to the database.
   *
   * @param {number} id - The comment ID associated with the alert.
   * @param {number} userId - The user ID who triggered the alert.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async add(id, userId) {
    const query = `
            INSERT INTO alert (comment_id, user_id)
            VALUES (?, ?)
            `;

    const response = await Query.runWithParams(query, [id, userId]);
    return response;
  }

  /**
   * Updates the status of an alert in the database.
   *
   * @param {number} status - The new status of the alert.
   * @param {number} id - The ID of the alert to update.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async edit(status, id) {
    const query = `
            UPDATE alert
            SET status = ?
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [status, id]);
    return response;
  }
}

export default Alert;
