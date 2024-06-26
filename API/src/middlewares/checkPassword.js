/**
 * Middleware function to validate the format and strength of a password.
 * If the password format is incorrect, sends a 400 Bad Request response.
 * If the password format is correct, allows the request to proceed.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 * @param {Function} next - The next function to pass control to the next middleware/route handler.
 */

function checkPassword(req, res, next) {
  if (!optimalPassword(req.body.password)) {
    return res.status(400).json({
      msg: "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial !",
    });
  }
  next();
}

function optimalPassword(password) {
  const regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
  return regex.test(password);
}

export { checkPassword };
