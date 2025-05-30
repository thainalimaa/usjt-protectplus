const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario");

exports.register = async (req, res) => {
  const { email, nome_completo, senha, cpf, data_nascimento } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const novoUsuario = await Usuario.create({
      email,
      nome_completo,
      senha: hashedPassword,
      cpf,
      data_nascimento,
    });

    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ message: "E-mail ou senha inválidos" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: "E-mail ou senha inválidos" });
    }

    res.status(200).json({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
};
