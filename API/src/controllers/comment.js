import Comment from "../models/Comment.js";

/**
 * Retrieves all comments with a status of 0 (not treated).
 * Sends a JSON response with the comments or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllComments = async (req, res) => {
  try {
    const status = 0;
    const response = await Comment.getAll(status);

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun commentaire affichable trouvé !",
      });
    }

    res.json({
      msg: "La récupération des commentaires affichables à été un succès !",
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
 * Retrieves comments by the user ID stored in the session.
 * Sends a JSON response with the comments or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getCommentsByUserId = async (req, res) => {
  try {
    const id = req.session.user.id;
    console.log("req session user id: ", req.session.user.id);
    const status = 0;
    console.log(id);
    console.log("status :", status);
    const response = await Comment.getByUserId(id, status);

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun commentaire de cet utilisateur",
      });
    }

    res.json({
      msg: "Les commentaires de l'utilisateur par son id ont bien été récupérer !",
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
 * Retrieves comments by Person ID from the database.
 * Sends a JSON response with the comments or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getCommentsByPersonId = async (req, res) => {
  try {
    const { id } = req.params;
    const status = 0;
    const response = await Comment.getByPersonId(id, status);

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun commentaire pour ce Person",
      });
    }

    res.json({
      msg: "La récupération des commentaires pour ce Person à été un succès !",
      response,
    });
  } catch (erorr) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

/**
 * Adds a new comment to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addComment = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const data = { ...req.body, userId };
    const response = await Comment.add(data);

    res.json({
      msg: "Votre commentaire à été ajouté avec succès !",
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
 * Edits an existing comment in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.session.user.id;
    const { content } = req.body;
    const response = await Comment.edit(content, id, userId);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le commentaire n'a pas pu être modifié car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le commentaire à bien été modifié !",
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
  getAllComments,
  getCommentsByUserId,
  getCommentsByPersonId,
  addComment,
  editComment,
};
