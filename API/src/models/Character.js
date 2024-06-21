import Query from "./Query.js";

class Characters {
  static async getAll() {
    const query = `
            SELECT id, character_name, image, alt
            FROM \`character\`
            `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
    SELECT id, character_name, image, alt, description
    FROM \`character\`
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, id);
    return response;
  }

  static async add(data) {
    const query = `
    INSERT INTO \`character\` (character_name, image, alt, description)
    VALUES (?, ?, ?, ?)
    `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async editById(data) {
    const query = `
    UPDATE \`character\`
    SET character_name = ?, image = ?, alt = ?, description = ?
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async deleteById(id) {
    const query = `
    DELETE FROM \`character\`
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, id);
    return response;
  }
}

export default Characters;
