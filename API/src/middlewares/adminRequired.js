/**
 * Middleware function to check if the user is an administrator.
 * If the user is not an administrator (isAdmin !== 2), sends a 403 Forbidden response.
 * If the user is an administrator, allows the request to proceed.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 * @param {Function} next - The next function to pass control to the next middleware/route handler.
 */

function adminRequired(req, res, next) {
  if (!req.session.user || req.session.user.isAdmin !== 2) {
    console.log(req.session.user.function);
    res.status(403).json({
      msg: "Vous n'avez pas l'autorisation",
    });
    return;
  }
  if (req.session.user.isAdmin === 2) {
    next();
  }
}

export { adminRequired };
