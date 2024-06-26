import Roles from "../models/Role.js";

/**
 * Retrieves all roles from the database.
 * Sends a JSON response with the roles or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllRoles = async (req, res) => {
  try {
    const response = await Roles.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun role présent dans la bdd !",
      });
    }

    res.json({
      msg: "La récupération de tous les roles à été réussi !",
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
 * Retrieves a specific role by its ID from the database.
 * Sends a JSON response with the role or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Roles.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le role demandé n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "La récupartion du role par son ID à été réussi !",
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
 * Adds a new role to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addRole = async (req, res) => {
  try {
    const data = req.body;
    const response = await Roles.add(data);

    res.json({
      msg: "Le role à été ajouté avec succès !",
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
 * Edits an existing role in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editRole = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Roles.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "le role n'a pas pu être modifiée car il n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "Le role à été modifié avec succès !",
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
 * Deletes a specific role by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Roles.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "le role n'a pas pu être supprimée car il n'existe pas dans la bdd",
      });
    }

    res.json({
      msg: "Le role à été supprimer avec succès",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export { getAllRoles, getRoleById, addRole, editRole, deleteRole };
