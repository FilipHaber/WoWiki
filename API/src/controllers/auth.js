import bcrypt from "bcrypt";
import Auth from "../models/Auth.js";

/**
 * Checks if the user is authenticated by verifying the session.
 * Sends a JSON response with the user information if authenticated, or a 401 status if not.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

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

/**
 * Registers a new user by checking for existing users and hashing the password.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

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

/**
 * Logs in a user by verifying the email and password, and checking the account status.
 * Sets the session user and sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await Auth.login(email);

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({
        msg: "Information(s) incorrecte(s)",
      });
    }

    const infoUser = {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      isAdmin: user.role_id,
      status: user.status,
      password: user.passwrd,
      created_at: user.created_at,
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

/**
 * Logs out the user by destroying the session and clearing the session cookie.
 * Sends a JSON response indicating success or an appropriate error message.
 *
 * @param {Object} req - The request object from the client.
 * @param {Object} res - The response object to be sent to the client.
 */

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
