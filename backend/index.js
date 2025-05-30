require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/usuario");

const app = express();
const PORT = process.env.PORT || 8086;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);

// Conectar ao banco e iniciar o servidor
sequelize.sync()
  .then(() => {
    console.log("Banco de dados conectado e sincronizado.");
    app.listen(PORT, () => {
      console.log(`Servidor porta: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
