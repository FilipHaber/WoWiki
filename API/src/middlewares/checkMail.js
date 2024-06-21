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
