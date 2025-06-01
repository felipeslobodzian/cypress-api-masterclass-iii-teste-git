import { faker } from '@faker-js/faker';

describe("Cadastrar agendamento", () => {

    it("Cadastrar agendamento com sucesso", () => {

        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();

        const data = {
            firstname: firstname,
            lastname: lastname,
            totalprice: 10000,
            depositpaid: false,
            bookingdates: {
                checkin: "2025-01-19",
                checkout: "2025-01-20"
            },
        additionalneeds: "Café",
        };

        cy.cadastrarAgendamento(data)
        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.booking.firstname).to.equal(firstname);
            expect(response.body.booking.lastname).to.equal(lastname);
        })
    })

})