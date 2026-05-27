# 🗳️ Sistema de Enquete em Tempo Real com SSE

Este projeto consiste em uma aplicação simples de **contador de votos em tempo real**, utilizando **Server-Sent Events (SSE)** com **Node.js + Express**.

O sistema permite que usuários votem em uma enquete e acompanhem a atualização dos resultados automaticamente, sem necessidade de atualizar a página.

## 📌 Objetivo

Implementar uma aplicação utilizando **SSE (Server-Sent Events)** para envio de dados em tempo real do servidor para os clientes conectados.

### Cenário escolhido:
**Contador de votos em tempo real para uma enquete**, onde o servidor envia atualizações de votos para os clientes conectados usando SSE.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Server-Sent Events (SSE)**

---

## 📂 Estrutura do Projeto

```txt
sse-votacao/
│── node_modules/
│── public/
│   └── index.html
│── server.js
│── package.json
│── package-lock.json
│── .gitignore
│── README.md
```

---

## ⚙️ Funcionamento do Sistema

O usuário escolhe uma opção de voto:

- Java
- Python
- JavaScript

Quando um voto é registrado:

1. O cliente envia uma requisição para o servidor.
2. O servidor atualiza a contagem de votos.
3. O servidor envia a atualização para todos os clientes conectados usando **SSE**.
4. A interface é atualizada automaticamente em tempo real.

### Fluxo da aplicação

```txt
Cliente vota
      ↓
POST /votar
      ↓
Servidor atualiza votos
      ↓
Servidor envia evento SSE
      ↓
Clientes recebem atualização em tempo real
```

---

## 🔄 Como funciona o SSE

A conexão SSE é criada no cliente utilizando:

```javascript
const eventSource = new EventSource("/eventos");
```

O servidor mantém uma conexão aberta e envia atualizações através do endpoint:

```javascript
app.get("/eventos", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
});
```

Sempre que ocorre um novo voto, o servidor envia os dados atualizados para todos os clientes conectados.

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/AlekCorrea/sse-votacao.git
```

### 2. Entrar na pasta do projeto

```bash
cd sse-votacao
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar o servidor

```bash
node server.js
```

O servidor iniciará em:

```txt
http://localhost:3000
```

---

## 🧪 Como Testar

1. Abra o navegador em:

```txt
http://localhost:3000
```

2. Abra **duas ou mais abas** do navegador.
3. Vote em qualquer opção.
4. Observe que os resultados atualizam automaticamente em todas as abas sem recarregar a página.

---

## 📸 Exemplo do Sistema

A enquete apresenta botões para votação e um contador atualizado em tempo real para cada linguagem.

---

## 👨‍💻 Autor

**Alek Correa**

Projeto desenvolvido para fins acadêmicos utilizando **Server-Sent Events (SSE)**.
