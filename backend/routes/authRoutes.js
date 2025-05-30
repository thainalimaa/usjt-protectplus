const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const Usuario = require("../models/usuario");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/user/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await Usuario.findOne({
      where: { email },
      attributes: ["nome_completo", "email", "data_nascimento"],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar usuário" });
  }
});

router.put("/user/:email", async (req, res) => {
  const { email } = req.params;
  const { nome_completo, data_nascimento } = req.body;

  try {
    const [updated] = await Usuario.update(
      {
        nome_completo,
        data_nascimento,
      },
      {
        where: { email },
      }
    );

    if (updated) {
      const updatedUser = await Usuario.findOne({ where: { email } });
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "Usuário não encontrado para atualizar." });
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ message: "Erro ao atualizar usuário." });
  }
});

module.exports = router;

