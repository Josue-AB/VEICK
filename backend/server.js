const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ==========================
   CONEXIÓN POSTGRESQL
========================== */
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "veick_db",
  password: "PostgreSQL2026",
  port: 5432,
});

/* ==========================
   NODEMAILER
========================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ==========================
   LOGIN
========================== */
app.post("/login", async (req, res) => {
  try {
    const { correo, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [correo.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Correo no registrado",
      });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }

    res.json({
      nombre: user.nombre,
      email: user.email,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error del servidor",
    });
  }
});

/* ==========================
   REGISTER
========================== */
app.post("/register", async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [correo.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "Este correo ya está registrado",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `
      INSERT INTO users (
        nombre,
        email,
        password_hash
      )
      VALUES ($1, $2, $3)
      `,
      [
        nombre,
        correo.toLowerCase(),
        hashedPassword,
      ]
    );

    res.status(201).json({
      message: "Usuario registrado correctamente",
      nombre,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error del servidor",
    });
  }
});

/* ==========================
   FORGOT PASSWORD
========================== */
app.post("/forgot-password", async (req, res) => {
  try {
    const { correo } = req.body;

    if (!correo) {
      return res.status(400).json({
        message: "El correo es obligatorio",
      });
    }

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [correo.toLowerCase()]
    );

    // No revelar si existe o no
    if (user.rows.length === 0) {
      return res.json({
        message:
          "Si el correo existe, recibirás instrucciones",
      });
    }

    // Token seguro
    const token = crypto.randomBytes(32).toString("hex");

    // Expira en 15 min
    const expiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    );

    //Borra tokens acumulados
    await pool.query(
  `
  DELETE FROM password_resets
  WHERE email = $1
  `,
  [correo.toLowerCase()]
);

    // Guardar token
    await pool.query(
      `
      INSERT INTO password_resets
      (email, token, expires_at)
      VALUES ($1, $2, $3)
      `,
      [
        correo.toLowerCase(),
        token,
        expiresAt,
      ]
    );

    // URL del frontend
    const resetLink =
      `${process.env.FRONTEND_URL}/reset-password/${token}`;

    // Enviar correo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: correo,
      subject: "Recuperar contraseña - VEICK",
      html: `
        <h2>Recuperación de contraseña</h2>

        <p>Recibimos una solicitud para cambiar tu contraseña.</p>

        <p>
          Haz clic en el siguiente enlace:
        </p>

        <a href="${resetLink}">
          Restablecer contraseña
        </a>

        <p>
          Este enlace expira en 15 minutos.
        </p>

        <p>
          Si no fuiste tú, ignora este correo.
        </p>
      `,
    });

    res.json({
      message: "Correo enviado",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

/* ==========================
   RESET PASSWORD
========================== */
app.post("/reset-password", async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({
        message: "Datos incompletos",
      });
    }

    // Buscar token válido
    const result = await pool.query(
      `
      SELECT *
      FROM password_resets
      WHERE token = $1
      AND expires_at > NOW()
      `,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "Token inválido o expirado",
      });
    }

    const email = result.rows[0].email;

    // Encriptar nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Actualizar contraseña
    await pool.query(
      `
      UPDATE users
      SET password_hash = $1
      WHERE email = $2
      `,
      [hashedPassword, email]
    );

    // Borrar token usado
    await pool.query(
      `
      DELETE FROM password_resets
      WHERE token = $1
      `,
      [token]
    );

    res.json({
      message: "Contraseña actualizada correctamente",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error del servidor",
    });
  }
});

/* ==========================
   SERVER
========================== */
app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});