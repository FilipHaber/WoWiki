import Specialization from "../models/Specialization.js";

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
