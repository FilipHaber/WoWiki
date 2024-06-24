import Query from "./Query.js";

class Auth {
  static async registerCompare(data) {
    const query1 = `
      SELECT *
      FROM user
      WHERE email = ? OR nickname = ?
      `;

    const existingUser = await Query.runWithParams(query1, data);
    return existingUser;
  }

  static async register(newUser) {
    const query2 = `
      INSERT INTO user (nickname, email, password)
      VALUES (?, ?, ?)
      `;

    const response = await Query.runWithParams(query2, newUser);
    return response;
  }

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
