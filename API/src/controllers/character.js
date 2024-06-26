import Characters from "../models/Character.js";

/**
 * Retrieves all characters from the database.
 * Sends a JSON response with the characters or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllCharacters = async (req, res) => {
  try {
    const response = await Characters.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun personnage présent dans la bdd !",
      });
    }

    res.json({
      msg: "les personnages ont bien été récupérer!",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

/**
 * Retrieves a character by its ID from the database.
 * Sends a JSON response with the character or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Characters.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le personnage demandé n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le personnage à bien été récupérer !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

/**
 * Adds a new character to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addCharacter = async (req, res) => {
  try {
    const data = req.body;
    const response = await Characters.add(data);

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

/**
 * Edits an existing character in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Characters.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le character n'a pas pu être modifié car il n'existe pas dans la bdd !",
      });
    }

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

/**
 * Deletes a character by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Characters.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le character n'a pas pu être supprimé car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le charactere à été supprimé avec succès !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export {
  getAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacterById,
};
