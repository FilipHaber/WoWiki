import Role from "../models/Role.js";

/**
 * Retrieves all Roles from the database.
 * Sends a JSON response with the Roles or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllRoles = async (req, res) => {
  try {
    const response = await Role.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucune Role trouvé dans la bdd !",
      });
    }

    res.json({
      msg: "Toutes les Roles ont bien été récupérer !",
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
 * Retrieves a specific Role by its ID from the database.
 * Sends a JSON response with the Role or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Role.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "La Role demandé n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La Role à bien été récupérer !",
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
 * Adds a new Role to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addRole = async (req, res) => {
  try {
    const data = req.body;
    const response = await Role.add(data);

    res.json({
      msg: "La Role à bien été ajoutée !",
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
 * Edits an existing Role in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editRole = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Role.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La Role n'a pas pu être modifiée car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La Role à été modifié avec succès !",
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
 * Deletes a specific Role by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Role.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La Role n'a pas pu être supprimé car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La Role à été supprimer avec succès !",
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
