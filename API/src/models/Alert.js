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
            SELECT 
            alert.id, alert.alert_date, alert.comment_id, alert.user_id AS alerting_user_id,
            user_alerting.nickname AS alerting_user_nickname,
            comment.content AS comment_content, comment.publish_date AS comment_publish_date,
            user_commented.id AS comment_from_user_id, user_commented.nickname AS comment_from_user_nickname, user_commented.email AS comment_from_user_email
            FROM alert
            INNER JOIN comment ON comment.id = alert.comment_id
            INNER JOIN user AS user_alerting ON user_alerting.id = alert.user_id
            INNER JOIN user AS user_commented ON user_commented.id = comment.user_id
            WHERE alert.status = 0
            `;

    return await Query.runWithParams(query, [status]);
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

    return await Query.runWithParams(query, [id, userId]);
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

    return await Query.runWithParams(query, [status, id]);
  }
}

export default Alert;
