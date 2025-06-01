/// <reference types="cypress"/>

const registerData = require('../fixtures/registerData.json');

// funcionalidade
describe("Buscar agendamentos", () => {
  it("Buscar agendamento com sucesso - cadastro novo", () => {
    cy.cadastrarAgendamento(registerData)
      .then((register) => {
        cy.buscarAgendamento(register.body.bookingid)
          .then((response) => {
              expect(response.status).to.equal(200);
              expect(response.body.firstname).to.equal("Felipe");
              expect(response.body.firstname).not.be.empty;
              expect(response.body.lastname).to.equal("Slobodzian");
              expect(response.body.lastname).not.be.empty;
              expect(response.body.totalprice).to.equal(777);
              expect(response.body.depositpaid).to.be.false;
              expect(response.body.bookingdates.checkin).to.equal("2025-01-19");
              expect(response.body.bookingdates.checkout).to.equal("2025-01-20");
              expect(response.body.additionalneeds).to.equal("Café");
      });
      });
  });

  it("Buscar agendamento com sucesso - pegar um id da lista", () => {
   cy.buscarTodosIds()
      .then((ids) => {
        cy.buscarAgendamento(ids.body[0].bookingid)
          .then((response) => {
              expect(response.status).to.equal(200);
              expect(response.body.firstname).not.be.empty;
              expect(response.body.lastname).not.be.empty;
      });
      });
  });

it("Buscar agendamento inexistente com letras", () => {
  cy.buscarAgendamento("sdfgsgs")
  .then((response) => {
    expect(response.status).to.equal(404);
    expect(response.body).to.equal("Not Found");
  });
});

it("Buscar agendamento nulo", () => {
  cy.buscarAgendamento("null")
  .then((response) => {
    expect(response.status).to.equal(404);
    expect(response.body).to.equal("Not Found");
  });
});

it("Buscar agendamento inexistente com números", () => {
cy.buscarAgendamento("124354445")
  .then((response) => {
    expect(response.status).to.equal(404);
    expect(response.body).to.equal("Not Found");
  });
});

});