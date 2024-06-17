function adminRequired(req, res, next) {
  if (!req.session.user || req.session.user.function !== 2) {
    console.log(req.session.user.function);
    res.status(403).json({
      msg: "Vous n'avez pas l'autorisation",
    });
    return;
  }
  if (req.session.user.function === 2) {
    next();
  }
}

export { adminRequired };
