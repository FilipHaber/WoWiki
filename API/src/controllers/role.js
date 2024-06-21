import Roles from "../models/Role.js";

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

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Roles.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le personnage demandé n'a pas été trouvé",
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

const editRole = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Roles.editById(data);

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

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Roles.deleteById(id);

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
