import { faker } from '@faker-js/faker';

describe("Excluir agendamento", () => {
  it("Excluir agendamento com sucesso", () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();

    const data = {
      firstname,
      lastname,
      totalprice: 10000,
      depositpaid: false,
      bookingdates: {
        checkin: "2025-01-19",
        checkout: "2025-01-20"
      },
      additionalneeds: "Café"
    };

    // 1. Cadastrar o agendamento
    cy.cadastrarAgendamento(data)
    .then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.booking.firstname).to.equal(firstname);
      expect(response.body.booking.lastname).to.equal(lastname);

      const id = response.body.bookingid;

      // 2. Autenticar e obter token
      cy.criarToken()
      .then((authResponse) => {
        expect(authResponse.status).to.equal(200);

        const token = authResponse.body.token;

        // 3. Deletar o agendamento com o token
        cy.deletarAgendamento(id, token)
        .then((deleteResponse) => {
          expect(deleteResponse.status).to.be.oneOf([200, 201, 204]);
        });
      });
    });
  });
});
