import Query from "./Query.js";

class CharacterSkills {
  static async getAll() {
    const query = `
            SELECT *
            FROM character_skills
            `;

    const response = await Query.run(query);
    return response;
  }

  static async getById(id) {
    const query = `
            SELECT *
            FROM character_skills
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, [id]);
    return response;
  }

  static async add(data) {
    const query = `
            INSERT INTO character_skills (character_id, role_id, specialization_id)
            VALUES (?, ?, ?)
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

  static async edit(data) {
    const query = `
            UPDATE character_skills
            SET character_id = ?, role_id = ?, specialization_id = ?
            WHERE id = ?
            `;

    const response = await Query.runWithParams(query, data);
    return response;
  }

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
