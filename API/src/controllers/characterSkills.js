import CharacterSkills from "../models/CharacterSkills.js";

const getAllCharacterSkills = async (req, res) => {
  try {
    const response = await CharacterSkills.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun CharacterSkills n'a été trouvé dans la bdd !",
      });
    }

    res.json({
      msg: "Les characterSkills ont été bien été récupérer",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const getCharacterSkillsById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CharacterSkills.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le characterSkills demandé n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le characterSkills à bien été récupérer !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const addCharacterSkills = async (req, res) => {
  try {
    const data = req.body;
    const response = await CharacterSkills.add(data);

    res.json({
      msg: "Le characterSkills à été ajouté avec succès !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const editCharacterSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await CharacterSkills.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le characterSkills n'a pas pu être modifié car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le characterSkills à été modifié avec succès !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const deleteCharacterSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CharacterSkills.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le characterSkills n'a pas pu être supprimé car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le characterSkills à été supprimé avec succès !",
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
  getAllCharacterSkills,
  getCharacterSkillsById,
  addCharacterSkills,
  editCharacterSkills,
  deleteCharacterSkills,
};
