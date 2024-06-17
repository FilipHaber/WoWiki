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
