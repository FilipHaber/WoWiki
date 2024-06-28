import Tdh from "../models/Tdh.js";

/**
 * Retrieves all Tdh from the database.
 * Sends a JSON response with the Tdh or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllTdh = async (req, res) => {
  try {
    const response = await Tdh.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun Tdh présent dans la bdd !",
      });
    }

    res.json({
      msg: "La récupération de tous les Tdh à été réussi !",
      response,
    });
  } catch (error) {
    res.json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

/**
 * Retrieves a specific Tdh by its ID from the database.
 * Sends a JSON response with the Tdh or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getTdhById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tdh.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le Tdh demandé n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "La récupartion du Tdh par son ID à été réussi !",
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
 * Adds a new Tdh to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addTdh = async (req, res) => {
  try {
    const data = req.body;
    const response = await Tdh.add(data);

    res.json({
      msg: "Le Tdh à été ajouté avec succès !",
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
 * Edits an existing Tdh in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editTdh = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Tdh.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "le Tdh n'a pas pu être modifiée car il n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "Le Tdh à été modifié avec succès !",
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
 * Deletes a specific Tdh by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteTdh = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Tdh.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "le Tdh n'a pas pu être supprimée car il n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "Le Tdh à été supprimer avec succès",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export { getAllTdh, getTdhById, addTdh, editTdh, deleteTdh };
