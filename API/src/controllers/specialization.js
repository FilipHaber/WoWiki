import Specialization from "../models/Specialization.js";

/**
 * Retrieves all specializations from the database.
 * Sends a JSON response with the specializations or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllSpecializations = async (req, res) => {
  try {
    const response = await Specialization.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucune specialization trouvé dans la bdd !",
      });
    }

    res.json({
      msg: "Toutes les spécializations ont bien été récupérer !",
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
 * Retrieves a specific specialization by its ID from the database.
 * Sends a JSON response with the specialization or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getSpecializationById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Specialization.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "La specialization n'a pas été trouvée !",
      });
    }

    res.json({
      msg: "La specialization à bien été récupérer !",
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
 * Adds a new specialization to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addSpecialization = async (req, res) => {
  try {
    const data = req.body;
    const response = await Specialization.add(data);

    res.json({
      msg: "La specialization à été ajoutée avec succès !",
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
 * Edits an existing specialization in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Specialization.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La specialization n'a pas pu être modifiée car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La specialization à été modifée avec succès !",
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
 * Deletes a specific specialization by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Specialization.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La specialization n'a pas pu être supprimée car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La specialization à été supprimée avec succès !",
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
  getAllSpecializations,
  getSpecializationById,
  addSpecialization,
  editSpecialization,
  deleteSpecialization,
};
