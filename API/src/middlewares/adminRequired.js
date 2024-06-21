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
