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
  const regex = /^(?!.*\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
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
    /^(?!.*\s)(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

  if (!regex.test(password)) {
    return res.status(400).json({
      msg: "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial !",
    });
  }
  next();
}

/**
 * Middleware function to validate the format of a user's nickname.
 * If the nickname format is incorrect, sends a 400 Bad Request response.
 * If the nickname format is correct, allows the request to proceed.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 * @param {Function} next - The next function to pass control to the next middleware/route handler.
 */

function checkNickname(req, res, next) {
  const nickname = req.body.nickname;
  const regex = /^(?!.*\s)[a-zA-Z0-9]{2,30}$/;

  if (!regex.test(nickname)) {
    return res.status(400).json({
      msg: "Le surnom doit contenir au minimum 2 caractères et au maximum 30 caractères, seuls les lettres et les chiffres sont acceptés !",
    });
  }
  next();
}

export { checkPassword, checkMail, checkNickname };
