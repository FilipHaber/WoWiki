import bcrypt from "bcrypt";
import Query from "../models/Query.js";
import Auth from "../models/Auth.js";

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
    const email = req.body.email;
    const nickname = req.body.nickname;
    const data = { email, nickname };
    const existingUser = await Auth.registerCompare(data);

    if (existingUser.length) {
      return res.status(409).json({
        msg: "L'email ou le surnom sont déjà utilisé",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      nickname: req.body.nickname,
      email: req.body.email,
      password: hashedPassword,
    };

    await Auth.register(newUser);

    res.status(201).json({
      msg: "Inscription réussie",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Erreur de serveur",
      error: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await Auth.login(email);

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({
        msg: "Information(s) incorrecte(s)",
      });
    }

    if (user.status === 1) {
      return res.status(401).json({
        msg: "Votre compte a été suspendu !",
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
      error: error,
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
