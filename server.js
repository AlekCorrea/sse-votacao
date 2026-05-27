const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let votos = {
  Java: 0,
  Python: 0,
  JavaScript: 0,
};

let clientes = [];

// Função para enviar atualização para todos os clientes
function enviarAtualizacao() {
  clientes.forEach((cliente) => {
    cliente.write(`data: ${JSON.stringify(votos)}\n\n`);
  });
}

// Endpoint SSE
app.get("/eventos", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.flushHeaders();

  clientes.push(res);

  // Envia estado atual ao conectar
  res.write(`data: ${JSON.stringify(votos)}\n\n`);

  req.on("close", () => {
    clientes = clientes.filter((cliente) => cliente !== res);
  });
});

// Endpoint para votar
app.post("/votar", (req, res) => {
  const { linguagem } = req.body;

  if (votos[linguagem] !== undefined) {
    votos[linguagem]++;
    enviarAtualizacao();

    return res.json({
      mensagem: "Voto registrado!",
      votos,
    });
  }

  res.status(400).json({
    erro: "Opção inválida",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});