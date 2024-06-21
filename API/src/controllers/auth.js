import bcrypt from "bcrypt";
import Query from "../models/Query.js";

const checkAuth = (req, res) => {
  if (req.session.user) {
    res.json({
      msg: "Utilisateur connecté",
      user: req.session.user,
    });
  } else {
    res.status(401).json({
      msg: "Utilisateur non connecté",
    });
  }
};

const register = async (req, res) => {
  try {
    const query1 = `
            SELECT *
            FROM user
            WHERE email = ?
            `;

    const existingUser = await Query.runWithParams(query1, {
      email: req.body.email,
    });

    if (existingUser.length) {
      return res.status(409).json({
        msg: "Cet utilisateur existe déjà",
      });
    }

    const query2 = `
            INSERT INTO user (nickname, email, password)
            VALUES (?, ?, ?)
            `;

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    };

    await Query.runWithParams(query2, newUser);

    res.status(201).json({
      msg: "Inscription réussie",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const query = `
            SELECT *
            FROM user
            WHERE email = ?
            `;
    const [user] = await Query.runWithParams(query, { email: req.body.email });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({
        msg: "Information(s) incorrecte(s)",
      });
    }

    const infoUser = {
      email: user.email,
      nickname: user.nickname,
      isAdmin: user.function_id,
    };

    req.session.user = infoUser;

    res.status(200).json({
      msg: "Connexion réussie",
      user: infoUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        msg: "Erreur de serveur",
      });
    }
    res.clearCookie("session_id");
    res.status(200).json({
      msg: "Déconnexion réussie",
    });
  });
};

export { checkAuth, register, login, logout };
