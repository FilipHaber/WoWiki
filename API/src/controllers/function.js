import Function from "../models/Function.js";

const getAllFunctions = async (req, res) => {
  try {
    const response = await Function.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucune function trouvé dans la bdd !",
      });
    }

    res.json({
      msg: "Toutes les functions ont bien été récupérer !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const getFunctionById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Function.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "La function demandé n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La function à bien été récupérer !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const addFunction = async (req, res) => {
  try {
    const data = req.body;
    const response = await Function.add(data);

    res.json({
      msg: "La function à bien été ajoutée !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const editFunction = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Function.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La function n'a pas pu être modifiée car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La function à été modifié avec succès !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const deleteFunction = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Function.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "La function n'a pas pu être supprimé car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "La function à été supprimer avec succès !",
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
  getAllFunctions,
  getFunctionById,
  addFunction,
  editFunction,
  deleteFunction,
};
