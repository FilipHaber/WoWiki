import Users from "../models/User.js";

/**
 * Retrieves all users from the database.
 * Sends a JSON response with the users or an appropriate error message if none found.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllUsers = async (req, res) => {
  try {
    const response = await Users.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun utilisateur présent dans la bdd !",
      });
    }

    res.json({
      msg: "Les utilisateurs ont bien été récupérer !",
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
 * Retrieves a specific user by their ID from the database.
 * Sends a JSON response with the user data or an appropriate error message if not found.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Users.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "L'utilisateur demandé n'a pas été trouvé !",
      });
    }
    res.json({
      msg: "L'utilisateur à bien été récupérer !",
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
 * Updates an existing user's data in the database.
 * Sends a JSON response with the updated user data or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Users.edit(data);

    res.json({
      msg: "Les données de l'utilisateur ont été modifiés ! ",
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
 * Deletes the authenticated user's account from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deleteUserById = async (req, res) => {
  try {
    const id = req.session.user.id;
    const response = await Users.deleteById(id);

    if (!response.affectedRows === 0) {
      return res.status(404).json({
        msg: "L'utilisateur n'a pas pu être supprimé car il n'existe pas dans la bdd!",
      });
    }

    res.json({
      msg: "Vous avez supprimé votre compté",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export { getAllUsers, getUserById, editUser, deleteUserById };
