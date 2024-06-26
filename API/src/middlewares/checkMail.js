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
  if (!optimalMail(req.body.email)) {
    return res.status(400).json({
      msg: "Le email est incorrect",
    });
  }
  next();
}

function optimalMail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}

export { checkMail };
