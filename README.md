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

- [📦 Submission](#submission)
  - [🔍 list](#list)
  - [💾 save](#save)
  - [❌ delete](#delete)
  - [✏️ update](#update)
  - [🔎 getById](#getbyid)

---

## 📦 Submission

Classe que representa as **submissões** do sistema. Armazena, lista, modifica e remove objetos do tipo `Submission`.

---

### 🔍 `list()`

Retorna todas as submissões registradas no sistema.

**Retorna:**  
`Array<Submission>` — Lista de todas as submissões.

---

### 💾 `save(submission)`

Adiciona uma nova submissão.

**Parâmetros:**

| Parâmetro   | Tipo        | Descrição                    |
|-------------|-------------|------------------------------|
| `submission`| `Submission`| Submissão a ser registrada.  |

---

### ❌ `delete(id)`

Remove uma submissão com base no ID.

**Parâmetros:**

| Parâmetro | Tipo     | Descrição                        |
|-----------|----------|----------------------------------|
| `id`      | `string` | ID da submissão a ser removida. |

**Retorna:**  
`Submission | null` — A submissão deletada ou `null` se não encontrada.

---

### ✏️ `update(id, newData)`

Atualiza uma submissão com base no ID.

**Parâmetros:**

| Parâmetro  | Tipo     | Descrição                             |
|------------|----------|-----------------------------------------|
| `id`       | `string` | ID da submissão a ser atualizada.      |
| `newData`  | `Object` | Dados novos para substituir os antigos.|

**Retorna:**  
`Submission | null` — A submissão atualizada ou `null` se não encontrada.

---

### 🔎 `getById(id)`

Busca uma submissão com base no ID.

**Parâmetros:**

| Parâmetro | Tipo     | Descrição                        |
|-----------|----------|----------------------------------|
| `id`      | `string` | ID da submissão a ser buscada.  |

**Retorna:**  
`Submission | undefined` — A submissão encontrada ou `undefined` se não existir.

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

- [📦 Submission](#submission)
  - [🔍 list](#list)
  - [💾 save](#save)
  - [❌ delete](#delete)
  - [✏️ update](#update)
  - [🔎 getById](#getbyid)

---

## 📦 Submission

Represents the system’s **submissions**. This class is responsible for storing, retrieving, updating, and deleting submission records.

---

### 🔍 `list()`

Retrieves all registered submissions.

**Returns:**  
`Array<Submission>` — List of all submissions.

---

### 💾 `save(submission)`

Adds a new submission to the system.

**Parameters:**

| Parameter     | Type        | Description                  |
|---------------|-------------|------------------------------|
| `submission`  | `Submission`| The submission to be added.  |

---

### ❌ `delete(id)`

Removes a submission based on its ID.

**Parameters:**

| Parameter | Type     | Description                     |
|-----------|----------|---------------------------------|
| `id`      | `string` | The ID of the submission to delete. |

**Returns:**  
`Submission | null` — The deleted submission or `null` if not found.

---

### ✏️ `update(id, newData)`

Updates a submission using its ID.

**Parameters:**

| Parameter  | Type     | Description                          |
|------------|----------|--------------------------------------|
| `id`       | `string` | The ID of the submission to update.  |
| `newData`  | `Object` | New data to replace the old values.  |

**Returns:**  
`Submission | null` — The updated submission or `null` if not found.

---

### 🔎 `getById(id)`

Finds a submission by its ID.

**Parameters:**

| Parameter | Type     | Description                     |
|-----------|----------|---------------------------------|
| `id`      | `string` | The ID of the submission to find. |

**Returns:**  
`Submission | undefined` — The submission found or `undefined` if not found.

---

