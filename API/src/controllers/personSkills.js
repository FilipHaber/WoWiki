import PersonSkills from "../models/PersonSkills.js";

/**
 * Retrieves all person skills from the database.
 * Sends a JSON response with the person skills or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllPersonSkills = async (req, res) => {
  try {
    const response = await PersonSkills.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun personSkills n'a été trouvé dans la bdd !",
      });
    }

    res.json({
      msg: "Les personSkills ont été bien été récupérer",
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
 * Retrieves person skills by their ID from the database.
 * Sends a JSON response with the person skills or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getPersonSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await PersonSkills.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le personSkills demandé n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le personSkills à bien été récupérer !",
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
 * Adds new person skills to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addPersonSkills = async (req, res) => {
  try {
    const data = req.body;
    const response = await PersonSkills.add(data);

    res.json({
      msg: "Le personSkills à été ajouté avec succès !",
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
 * Edits existing person skills in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editPersonSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await PersonSkills.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le personSkills n'a pas pu être modifié car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le personSkills à été modifié avec succès !",
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
 * Deletes person skills by their ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deletePersonSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await PersonSkills.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le personSkills n'a pas pu être supprimé car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le personSkills à été supprimé avec succès !",
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
  getAllPersonSkills,
  getPersonSkillsById,
  addPersonSkills,
  editPersonSkills,
  deletePersonSkills,
};
