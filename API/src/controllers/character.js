import Characters from "../models/Character.js";

const getAllCharacters = async (req, res) => {
  try {
    const responses = await Characters.getAll();

    if (!responses.length) {
      return res.status(404).json({
        msg: "Aucun personnage présent dans la bdd !",
      });
    }

    res.json({
      msg: "les characters ont bien été récupérer!",
      responses,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Characters.getById(id);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le personnage demandé n'a pas été trouvé",
      });
    }

    res.json({
      msg: "Le personnage à bien été récupérer !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const addCharacter = async (req, res) => {
  try {
    const data = req.body;
    const response = await Characters.add(data);

    res.json({
      msg: "Les données ont bien été insérées dans character !",
      response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const editCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Characters.editById(data);

    res.json({
      msg: "Les données du character ont bien été modifié !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

const deleteCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Characters.deleteById(id);

    res.json({
      msg: "Le charactere à été supprimé avec succès !",
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
  getAllCharacters,
  getCharacterById,
  addCharacter,
  editCharacter,
  deleteCharacterById,
};
