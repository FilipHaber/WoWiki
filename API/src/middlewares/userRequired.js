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
