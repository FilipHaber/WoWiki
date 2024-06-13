import Query from "../model/Query.js";

const getAllCharacter = async (req, res) => {
  try {
    const query = `
        SELECT id, character_name, image, alt
        FROM \`character\`
        `;

    const response = await Query.run(query);

    res.json({
      msg: "Je suis sur la route API pour récupérer tous les characters !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
    SELECT id, character_name, image, alt, description
    FROM \`character\`
    WHERE id = ?
    `;

    const [response] = await Query.runWithParams(query, id);

    if (!response)
      return res.status(404).json({
        msg: "Le personnage demandé n'a pas été trouvé",
      });

    res.json(response);
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const addCharacter = async (req, res) => {
  try {
    const query = `
    INSERT INTO \`character\` (character_name, image, alt, description)
    VALUES (?, ?, ?, ?)
    `;

    const response = await Query.runWithParams(query, req.body);

    res.json({
      msg: "Les données ont bien été insérées dans character !",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const editCharacter = async (req, res) => {
  try {
    const query = `
    UPDATE \`character\`
    SET character_name = ?
    WHERE id = ?
    `;

    const response = await Query.runWithParams(query, req.body);

    res.json({
      msg: "Les données du character ont bien été modifié !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export { getAllCharacter, getCharacterById, addCharacter, editCharacter };
