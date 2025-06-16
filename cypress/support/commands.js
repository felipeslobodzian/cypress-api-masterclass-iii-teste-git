// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("buscarAgendamento", (id) => {
    cy.request({
        method: "GET",
        url: `https://restful-booker.herokuapp.com/booking/${id}`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add("cadastrarAgendamento", (bodyRecebido) => {
    cy.request({
      method: "POST",
      url: "https://restful-booker.herokuapp.com/booking",
      body: bodyRecebido,
    })
})

Cypress.Commands.add("buscarTodosIds", () => {
    cy.request({
        method: "GET",
        url: `https://restful-booker.herokuapp.com/booking`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add("criarToken", () => {
    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: {
          username: 'admin',
          password: 'password123'
        }
      })
});

Cypress.Commands.add("deletarAgendamento", (id, token) => {
    cy.request({
        method: "DELETE",
        url: `https://restful-booker.herokuapp.com/booking/${id}`,
        headers: {
            Cookie: `token=${token}`
        },
        failOnStatusCode: false,
    });
});