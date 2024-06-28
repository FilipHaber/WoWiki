import Alert from "../models/Alert.js";

/**
 * Retrieves all alerts that have not been treated (status 0).
 * Sends a JSON response with the retrieved alerts or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const getAllNoTreatenAlerts = async (req, res) => {
  try {
    const status = 0;
    const response = await Alert.getAllNoTreaten(status);

    if (!response) {
      return res.status(404).json({
        msg: "Aucune alerte non traité présente !",
      });
    }

    res.json({
      msg: "La récupération des alertes à gérer à été un succès !",
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
 * Adds a new alert to the system.
 * The alert is associated with a specific user ID retrieved from the session.
 * Sends a JSON response with the result of the addition or an error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const addAlert = async (req, res) => {
  try {
    const id = 2;
    const userId = req.session.user.id;
    const response = await Alert.add(id, userId);

    res.json({
      msg: "L'alert à bien été ajoutée !",
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
 * Edits an existing alert's status.
 * The alert ID is retrieved from the request parameters and the new status from the request body.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const editAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log("data :", status, id);
    const response = await Alert.edit(status, id);

    if (!response.affectedRows === 0) {
      res.status(404).json({
        msg: "L'alert n'a pas été modifiée car elle n'existe pas dans la bdd !",
      });
    }

    res.json({
      msg: "L'alert à été modifée avec succès !",
      response,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error,
    });
  }
};

export { getAllNoTreatenAlerts, addAlert, editAlert };
