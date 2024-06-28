/**
 * Middleware function to validate the format of an email address.
 * If the email format is incorrect, sends a 400 Bad Request response.
 * If the email format is correct, allows the request to proceed.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 * @param {Function} next - The next function to pass control to the next middleware/route handler.
 */

function checkMail(req, res, next) {
  const email = req.body.email;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  if (!regex.test(email)) {
    return res.status(400).json({
      msg: "Le email est incorrect",
    });
  }
  next();
}

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
  const password = req.body.password;
  const regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

  if (!regex.test(password)) {
    return res.status(400).json({
      msg: "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial !",
    });
  }
  next();
}

export { checkPassword, checkMail };
