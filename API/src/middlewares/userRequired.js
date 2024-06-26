/**
 * Middleware function to check if a user session exists.
 * If no user session is found, sends a 403 Forbidden response.
 * If a user session exists, allows the request to proceed.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 * @param {Function} next - The next function to pass control to the next middleware/route handler.
 */

function userRequired(req, res, next) {
  if (!req.session.user) {
    res.status(403).json({
      msg: "Erreur de serveur",
    });
    return;
  }
  if (req.session.user) {
    next();
  }
}

export { userRequired };
