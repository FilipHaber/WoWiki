import Query from "./Query.js";

class Auth {
  /**
   * Checks if a user with the given email or nickname already exists in the database.
   *
   * @param {Array} data - Array containing email and nickname to check.
   * @returns {Promise<Array>} - A promise resolving to an array of existing users matching the criteria.
   */

  static async registerCompare(data) {
    const query = `
      SELECT *
      FROM user
      WHERE email = ? OR nickname = ?
      `;

    return await Query.runWithParams(query, data);
  }

  /**
   * Registers a new user in the database.
   *
   * @param {Array} newUser - Array containing nickname, email, and password of the new user.
   * @returns {Promise<Object>} - A promise resolving to the response from the database operation.
   */

  static async register(newUser) {
    const query = `
      INSERT INTO user (nickname, email, password)
      VALUES (?, ?, ?)
      `;

    return await Query.runWithParams(query, newUser);
  }

  /**
   * Retrieves user information based on email for login.
   *
   * @param {string} email - The email of the user to retrieve.
   * @returns {Promise<Object>} - A promise resolving to the user object retrieved from the database.
   */

  static async login(email) {
    const query = `
            SELECT *
            FROM user
            WHERE email = ?
            `;
    const [user] = await Query.runWithParams(query, { email });
    return user;
  }
}

export default Auth;
