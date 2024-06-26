import pool from "../config/db.js";

class Query {
  /**
   * Executes a SQL query without parameters using the pool connection.
   * @param {string} query - The SQL query to execute.
   * @returns {Promise<Array>} - A promise resolving to the result of the query.
   */

  static async run(query) {
    const [result] = await pool.query(query);
    return result;
  }

  /**
   * Executes a parameterized SQL query using the pool connection.
   * @param {string} query - The SQL query with placeholders.
   * @param {Object} data - An object containing parameter values for the query.
   * @returns {Promise<Array>} - A promise resolving to the result of the query.
   */

  static async runWithParams(query, data) {
    const [result] = await pool.execute(query, Object.values(data));
    return result;
  }
}

export default Query;
