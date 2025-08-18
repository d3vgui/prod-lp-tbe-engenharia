require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 🔹 aqui falamos pro express servir a pasta public
app.use(express.static(path.join(__dirname, "public")));

// 🔹 rota raiz carrega index.html automaticamente
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Configuração do transporter Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Rota para formulário da página INDEX
app.post("/send-contact", async (req, res) => {
  try {
    const { name, phone, email, servico, imovel, localizacao, mensagem } = req.body;

    await transporter.sendMail({
      from: `"Site Engenharia TED" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Novo contato pelo site",
      html: `
        <h2>Novo contato recebido</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Telefone:</b> ${phone}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Serviço:</b> ${servico}</p>
        <p><b>Imóvel:</b> ${imovel}</p>
        <p><b>Localização:</b> ${localizacao}</p>
        <p><b>Mensagem:</b> ${mensagem}</p>
      `,
    });

    res.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Erro ao enviar e-mail." });
  }
});

// Rota para formulário da página SUPPLIER-CONTACT
app.post("/send-supplier", async (req, res) => {
  try {
    const { nomeEmpresa, cpfCnpj, responsavel, telefone, email, cidadeEstado, segmento, descricao, portfolio } = req.body;

    await transporter.sendMail({
      from: `"Fornecedor - Site Engenharia TED" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Novo fornecedor interessado",
      html: `
        <h2>Novo fornecedor entrou em contato</h2>
        <p><b>Empresa/Profissional:</b> ${nomeEmpresa}</p>
        <p><b>CPF/CNPJ:</b> ${cpfCnpj}</p>
        <p><b>Responsável:</b> ${responsavel}</p>
        <p><b>Telefone:</b> ${telefone}</p>
        <p><b>E-mail:</b> ${email}</p>
        <p><b>Cidade/Estado:</b> ${cidadeEstado}</p>
        <p><b>Segmento:</b> ${segmento}</p>
        <p><b>Descrição:</b> ${descricao}</p>
        <p><b>Portfólio:</b> ${portfolio}</p>
      `,
    });

    res.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Erro ao enviar e-mail." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
