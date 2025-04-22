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
- [📑 Endpoints da API](#endpoints-da-api)
  - [🔹 GET ](#submissao)
  - [🔹 GET:id ](#submissoes)
  - [🔹 GET:title ](#submissoes)
  - [🔹 POST ](#submission)
  - [🔹 PATCH ](#submissao)
  - [🔹 DELETE ](#deletar-submissao)

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
[http://localhost:1084/submission](http://localhost:1084/submission)

---

## 📑 Endpoints da API


#### 🔹 GET:
```bash
/submissoes
```
Retorna todas as submissões cadastradas.

#### 🔹 GET:
```bash
/submission/:id
```
Retorna os dados de uma submissão específica pelo ID.

**Parâmetros:**

- `id` (string) – ID da submissão.

#### 🔹 GET:
```bash
/submission/:title
```
Retorna os dados de uma lista de submissões pelo titulo.

**Parâmetros:**

- `title` (string) – Título da submissão.

#### 🔹 POST:
```bash
/submissao
```
Cria uma nova submissão.


#### 🔹 PATCH:
```bash
/submission/:id
```
Atualiza os dados de uma submissão específica pelo ID.

**Parâmetros:**

- `title` (string) – Novo título da submissão.
- `content` (string) – Novo conteúdo da submissão.
- `type` (string) – Novo tipo da submissão.



#### 🔹 DELETE:
```bash
/submission/:id
```
Deleta uma submissão específica pelo ID.

#### 🔹 GET:
```bash
/
```
Retorna uma mensagem de boas-vindas para testar se está tudo OK.


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

## 📚 Table of Contents

- [▶️ How to run the project](#how-to-run-the-project)
- [📑 Endpoints da API](#endpoints-da-api)
  - [🔹 GET ](#post-submissao)
  - [🔹 GET:id ](#get-submissoes)
  - [🔹 GET:title ](#get-submissoes)
  - [🔹 POST ](#get-submission)
  - [🔹 PATCH ](#post-submission)
  - [🔹 DELETE ](#delete-submission)


---

## ▶️ How to run the project

### 1. Install Node
[Node](https://nodejs.org/pt)

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

### 5. Access the address
[http://localhost:1084/submission](http://localhost:1084/submission)


---

## 📑 API Endpoints


#### 🔹 GET:
```bash
/submissions
```
Returns all registered submissions.



Here is the translation:

#### GET:
```bash
/submission/:id
```
Returns the data of a specific submission by ID.

**Parameters:**

- `id` (string) - ID of the submission.

#### GET:
```bash
/submission/:title
```
Returns the data of a list of submissions by title.

**Parameters:**

- `title` (string) - Title of the submission.
#### 🔹 POST:
```bash
/submission
```
Creates a new submission.


#### 🔹 PATCH:
```bash
/submission/:id
```
Updates the data for a specific submission by ID.

**Parameters:**

- `title` (string) – New submission title.
- `content` (string) – New submission content.
- `type` (string) – New submission type.



#### 🔹 DELETE:
```bash
/submission/:id
```
Deletes a specific submission by ID.

#### 🔹 GET:
```bash
/
```
Returns a welcome message to test if everything is OK.