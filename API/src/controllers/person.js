import Persons from "../models/Person.js";

/**
 * Retrieves all Persons from the database.
 * Sends a JSON response with the Persons or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllPersons = async (req, res) => {
  try {
    const response = await Persons.getAll();

    if (!response.length) {
      return res.status(404).json({
        msg: "Aucun personnage présent dans la bdd !",
      });
    }

    res.json({
      msg: "les personnages ont bien été récupérer!",
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
 * Retrieves a Person by its ID from the database.
 * Sends a JSON response with the Person or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Persons.getById(id);

    console.log(response);

    if (!response.length) {
      return res.status(404).json({
        msg: "Le personnage demandé n'existe pas dans la bdd !",
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

/**
 * Adds a new Person to the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addPerson = async (req, res) => {
  try {
    const data = req.body;
    const response = await Persons.add(data);

    res.json({
      msg: "Les données ont bien été insérées dans Persons !",
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

/**
 * Edits an existing Person in the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editPerson = async (req, res) => {
  try {
    const { id } = req.params;
    const data = { ...req.body, id };
    const response = await Persons.edit(data);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le Persons n'a pas pu être modifié car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Les données du Persons ont bien été modifié !",
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
 * Deletes a Person by its ID from the database.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const deletePersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Persons.deleteById(id);

    if (response.affectedRows === 0) {
      return res.status(404).json({
        msg: "Le Persons n'a pas pu être supprimé car il n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "Le Personse à été supprimé avec succès !",
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
  getAllPersons,
  getPersonById,
  addPerson,
  editPerson,
  deletePersonById,
};
