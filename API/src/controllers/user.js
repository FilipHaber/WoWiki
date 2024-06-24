import Users from "../models/User.js";

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

export { getAllUsers, getUserById, editUser };
