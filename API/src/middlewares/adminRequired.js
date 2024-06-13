function isAdmin(req, res, next) {
  if (!req.session.user || !req.session.user.isAdmin) {
    res.status(403).json({ message: "Vous n'avez pas l'autorisation" });
    return;
  }
  if (req.session.user.isAdmin) {
    next();
  }
}

export default isAdmin;
