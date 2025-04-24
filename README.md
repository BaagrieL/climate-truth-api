# 📄 Climate Truth API

**English version below the Portuguese version.**

---

## 🌎 Descrição em Português
**Este projeto foi desenvolvido como parte do Mini Projeto do Módulo 4 (M4) do curso PDA.**  

A Climate Truth API é uma plataforma colaborativa voltada para a coleta e curadoria de notícias e artigos confiáveis sobre mudanças climáticas e questões ambientais.

Apoiadores podem enviar conteúdos verificados, que são revisados e aprovados por curadores voluntários antes de serem publicados.

Nossa missão é fortalecer a divulgação de informações verdadeiras, apoiar movimentos ambientais e oferecer um espaço seguro e transparente para combater a desinformação sem amplificá-la.

- 📚 Envio e compartilhamento de notícias climáticas confiáveis
- ✅ Moderação comunitária
- 🌍 Central de informações aberta e transparente


---

## 📚 Índice
- [▶️ Como rodar o projeto](#como-rodar-o-projeto)
- [🔐 Autenticação](#-autenticação)
- [🧪 Arquivos de testes ](#-arquivos-de-testes)
- [📦 Submissões `/submission`](#-submissões-submission)
  - [GET `/submission`](#-get-submission)
  - [GET `/submission/filter`](#-get-submissionfilter)
  - [POST `/submission/register`](#-post-submissionregister)
  - [DELETE `/submission/delete/:id`](#-delete-submissiondeleteid)
  - [PATCH `/submission/update/:id`](#-patch-submissionupdateid)
  - [PATCH `/submission/update/:id/status`](#-patch-submissionupdateidstatus)
- [👤 Autenticação e Usuários `/auth`](#-autenticação-e-usuários-auth)
  - [POST `/auth/login`](#-post-authlogin)
  - [POST `/auth/register`](#-post-authregister)
  - [GET `/auth/users`](#-get-authusers)
  - [PATCH `/auth/update/:id/role`](#-patch-authupdateidrole)
- [✅ Tabela de Permissões](#-status-de-autorização)
- [🌳 Estrutura do Projeto](#estrutura-do-projeto)
---
## ▶️ Como rodar o projeto
### 1. Instale o Node
[Node](https://nodejs.org/pt)

### 2. Clone o repositório

```bash
git clone https://github.com/BaagrieL/climate-truth-api.git

cd climate-truth-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor
```bash
npm run start
```

### 5. Acesse o endereço
[http://localhost:1084/](http://localhost:1084/)

#### retorno esperado:
```bash
Hello Wolrd!
```

---

## 🔐 Autenticação

A autenticação é feita via **JWT**. Para acessar rotas protegidas, envie o token no cabeçalho:

```http
Authorization: Bearer <seu_token>
```

---

## 🧪 Arquivos de Teste `.http`

Há arquivos `.http` com requisições prontas para facilitar os testes da API. Eles funcionam com a extensão **REST Client** do VS Code e outras ferramentas como **Insomnia** ou **Postman**.

**Inclui exemplos para:**
- Login e registro de usuário
- CRUD de submissões
- Alteração de permissões

> 📌 **Edite os valores** como `<token>`, `<id>`, `<title>`, etc., antes de enviar.
---

## 📦 Submissões (`/submission`)

### 🔹 GET `/submission`
Lista todas as submissões.  
🔒 Requer token.

---

### 🔹 GET `/submission/filter`
Filtra submissões com base em critérios definidos no query params.  
🔒 Requer token.  
Exemplo:
```bash
/submission/filter?title=Primeriro Artigo
```

---

### 🔹 POST `/submission/register`
Cria uma nova submissão.  
🔒 Requer token.

**Corpo da requisição:**
```json
{
  "title": "Título",
  "content": "Conteúdo da submissão",
  "type": "Tipo"
}
```

---

### 🔹 DELETE `/submission/delete/:id`
Deleta uma submissão específica pelo id.  
🔒 Requer token + Admin.

---

### 🔹 PATCH `/submission/update/:id`
Atualiza os dados de uma submissão.  
🔒 Requer token + Admin.

**Corpo da requisição:**
```json
{
  "title": "Novo título",
  "content": "Novo conteúdo",
  "type": "Novo tipo"
}
```

---

### 🔹 PATCH `/submission/update/:id/status`
Atualiza **apenas o status** de uma submissão.
Usada pelos admin para aceitar ou não uma submissão.  
🔒 Requer token + Admin.

**Corpo da requisição:**
```json
{
  "status": "accepted" // ou "rejected"
}
```

---

## 👤 Autenticação e Usuários (`/auth`)

### 🔸 POST `/auth/login`
Faz login de um usuário.  
**Público.**

**Corpo da requisição:**
```json
{
  "username": "nome",
  "password": "senha"
}
```

---

### 🔸 POST `/auth/register`
Cadastra um novo usuário.  
**Público.**

**Corpo da requisição:**
```json
{
  "username": "nome",
  "password": "senha"
}
```

---

### 🔸 GET `/auth/users`
Lista todos os usuários.  
🔒 Requer token + Admin.

---

### 🔸 PATCH `/auth/update/:id/role`
Atualiza o nível de acesso de um usuário.  
🔒 Requer token + Admin.

**Corpo da requisição:**
```json
{
  "role": "admin" // ou "common" para um usuário padrão
}
```

---

## ✅ Status de Autorização

| Rota                               | Autenticação | Admin |
|------------------------------------|---------------|--------|
| `POST /auth/login`                | ❌            | ❌     |
| `POST /auth/register`             | ❌            | ❌     |
| `GET /auth/users`                 | ✅            | ✅     |
| `PATCH /auth/update/:id/role`     | ✅            | ✅     |
| `GET /submission`                 | ✅            | ❌     |
| `GET /submission/filter`          | ✅            | ❌     |
| `POST /submission/register`       | ✅            | ❌     |
| `DELETE /submission/delete/:id`   | ✅            | ✅     |
| `PATCH /submission/update/:id`    | ✅            | ✅     |
| `PATCH /submission/update/:id/status` | ✅         | ✅     |

## 🌳 Estrutura do Projeto
```bash
├── src/
│   ├── controller/
│   │   ├── auth.controller.js
│   │   ├── Submission.controller.js
│   │   └── User.controller.js
│   ├── data/ **gerado automaticamente**
│   │   ├── submissions.json
│   │   └── users.json
│   ├── http/ 
│   │   ├── login.http
│   │   └── submission.http
│   ├── logs/ **gerado automaticamente**
│   │   └── api.log
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── authAdmin.middleware.js
│   │   └── logger.middleware.js
│   ├── model/
│   │   ├── Submission.model.js
│   │   └── User.model.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── submission.js
│   └── util/
│       ├── Logger.js
│       └── StorageManager.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

---

## 🌎 English Version
**This repository was developed as part of the "Mini Project" of Module 4 (M4) of the PDA course.**

The Climate Truth API is a community-driven platform focused on gathering and curating reliable news and articles about climate change and environmental issues.

Supporters can submit trustworthy content, which is then reviewed and approved by volunteer curators before being published.

Our mission is to amplify credible information, empower environmental movements, and provide a safe and transparent space to counter misinformation without giving it a platform.

- 📚 Submit and share reliable climate news
- ✅ Community-driven moderation
- 🌍 Open and transparent information hub

---

Aqui está a versão em inglês, fiel à estrutura do original:

---

## 📚 Index
- [▶️ How to run the project](#how-to-run-the-project)
- [🔐 Authentication](#authentication)
- [🧪 Test files](#test-files)
- [📦 Submissions `/submission`](#submissions-submission)
  - [GET `/submission`](#get-submission)
  - [GET `/submission/filter`](#get-submissionfilter)
  - [POST `/submission/register`](#post-submissionregister)
  - [DELETE `/submission/delete/:id`](#delete-submissiondeleteid)
  - [PATCH `/submission/update/:id`](#patch-submissionupdateid)
  - [PATCH `/submission/update/:id/status`](#patch-submissionupdateidstatus)
- [👤 Authentication and Users `/auth`](#authentication-and-users-auth)
  - [POST `/auth/login`](#post-authlogin)
  - [POST `/auth/register`](#post-authregister)
  - [GET `/auth/users`](#get-authusers)
  - [PATCH `/auth/update/:id/role`](#patch-authupdateidrole)
- [✅ Authorization Table](#authorization-status)
- [🌳 Project Structure](#project-structure)
---

## ▶️ How to run the project
### 1. Install Node
[Node](https://nodejs.org/en)

### 2. Clone the repository

```bash
git clone https://github.com/BaagrieL/climate-truth-api.git

cd climate-truth-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server
```bash
npm run start
```

### 5. Access the URL
[http://localhost:1084/](http://localhost:1084/)

#### Expected return:
```bash
Hello Wolrd!
```

---

## 🔐 Authentication

Authentication is handled via **JWT**. To access protected routes, send the token in the header:

```http
Authorization: Bearer <your_token>
```

---

## 🧪 Test Files `.http`

There are `.http` files with ready-to-use requests to make API testing easier. They work with the **REST Client** extension for VS Code and tools like **Insomnia** or **Postman**.

**Includes examples for:**
- User login and registration  
- Submissions CRUD  
- Role updates

> 📌 **Edit values** like `<token>`, `<id>`, `<title>`, etc., before sending the requests.

---

## 📦 Submissions (`/submission`)

### 🔹 GET `/submission`
Lists all submissions.  
🔒 Requires token.

---

### 🔹 GET `/submission/filter`
Filters submissions based on query parameters.  
🔒 Requires token.  
Example:
```bash
/submission/filter?title=First Article
```

---

### 🔹 POST `/submission/register`
Creates a new submission.  
🔒 Requires token.

**Request body:**
```json
{
  "title": "Title",
  "content": "Submission content",
  "type": "Type"
}
```

---

### 🔹 DELETE `/submission/delete/:id`
Deletes a specific submission by ID.  
🔒 Requires token + Admin.

---

### 🔹 PATCH `/submission/update/:id`
Updates a submission's data.  
🔒 Requires token + Admin.

**Request body:**
```json
{
  "title": "New title",
  "content": "New content",
  "type": "New type"
}
```

---

### 🔹 PATCH `/submission/update/:id/status`
Updates **only the status** of a submission.  
Used by admins to accept or reject a submission.  
🔒 Requires token + Admin.

**Request body:**
```json
{
  "status": "accepted" // or "rejected"
}
```

---

## 👤 Authentication and Users (`/auth`)

### 🔸 POST `/auth/login`
Logs a user in.  
**Public.**

**Request body:**
```json
{
  "username": "name",
  "password": "password"
}
```

---

### 🔸 POST `/auth/register`
Registers a new user.  
**Public.**

**Request body:**
```json
{
  "username": "name",
  "password": "password"
}
```

---

### 🔸 GET `/auth/users`
Lists all users.  
🔒 Requires token + Admin.

---

### 🔸 PATCH `/auth/update/:id/role`
Updates a user's access level.  
🔒 Requires token + Admin.

**Request body:**
```json
{
  "role": "admin" // or "common" for a regular user
}
```

---

## ✅ Authorization Status

| Route                                  | Auth Required | Admin Only |
|---------------------------------------|----------------|-------------|
| `POST /auth/login`                    | ❌             | ❌          |
| `POST /auth/register`                 | ❌             | ❌          |
| `GET /auth/users`                     | ✅             | ✅          |
| `PATCH /auth/update/:id/role`         | ✅             | ✅          |
| `GET /submission`                     | ✅             | ❌          |
| `GET /submission/filter`              | ✅             | ❌          |
| `POST /submission/register`           | ✅             | ❌          |
| `DELETE /submission/delete/:id`       | ✅             | ✅          |
| `PATCH /submission/update/:id`        | ✅             | ✅          |
| `PATCH /submission/update/:id/status` | ✅             | ✅          |

## 🌳 Project Structure
```bash
├── src/
│   ├── controller/
│   │   ├── auth.controller.js
│   │   ├── Submission.controller.js
│   │   └── User.controller.js
│   ├── data/ **gerado automaticamente**
│   │   ├── submissions.json
│   │   └── users.json
│   ├── http/ 
│   │   ├── login.http
│   │   └── submission.http
│   ├── logs/ **gerado automaticamente**
│   │   └── api.log
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── authAdmin.middleware.js
│   │   └── logger.middleware.js
│   ├── model/
│   │   ├── Submission.model.js
│   │   └── User.model.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── submission.js
│   └── util/
│       ├── Logger.js
│       └── StorageManager.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```