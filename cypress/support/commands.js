const TOKEN = Cypress.env('URL_TOKEN')

//Token
Cypress.Commands.add('token_pisworkflow', () => {
    cy.request({
        method: 'POST',
        url:`${TOKEN}`,
        headers: {
            'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e',
            'Authorization' : 'Basic MWRkZDM4YzEtMWEyYS00ZjEzLTk1ZDItYjFmNTAzY2M1MjdlOjY5N2I4ZTM1LWZhNjItNDUxMS05MTBlLTdiNzFkOWVhNzNhZg==',
            'Content-Type' : 'application/json'
        },
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.be.equal(201)
        expect(response.body).is.not.empty
        const tokenoferta = response.body.access_token
        Cypress.env('token_pisworkflow', tokenoferta);
        return tokenoferta
    })
});