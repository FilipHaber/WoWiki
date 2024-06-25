import Comment from "../models/Comment.js";

const getAllComments = async (req, res) => {
  try {
    const response = await Comment.getAll();

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

const getCommentsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const status = 0;
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

const getCommentsByCharacterId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Comment.getByCharacterId(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun commentaire pour ce character",
      });
    }

    res.json({
      msg: "La récupération des commentaires pour ce character à été un succès !",
      response,
    });
  } catch (erorr) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const data = req.body;
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

const editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Comment.edit(data);

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
  getCommentsByCharacterId,
  addComment,
  editComment,
};
