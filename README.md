# 🚀 Testes Automatizados de API com Cypress – Restful Booker

Este repositório contém uma suíte de testes automatizados utilizando [Cypress](https://www.cypress.io/) para validar os endpoints da API [Restful API Dev](https://restful-api.dev/), com foco em operações comuns de reserva de hotel.

---

## 📌 Funcionalidades testadas

- ⚙️ Cadastro de reservas de hotel  
- 🔍 Busca de reservas existentes  
- 🔐 Autenticação com geração de token  
- ❌ Exclusão de reservas com autenticação

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io) – Framework de testes de front-end e API  
- [Faker.js](https://fakerjs.dev/) – Geração de dados aleatórios realistas  
- JavaScript
  
---

## 📁 Estrutura dos Testes

Os testes estão organizados na pasta `cypress/e2e/`, separados por funcionalidade:

- 🔍 `buscar-agendamento.cy.js` – Busca de reservas por ID  
- 📝 `cadastrar-agendamento.cy.js` – Criação de novas reservas  
- ❌ `deletar-agendamento.cy.js` – Exclusão de reservas com token
