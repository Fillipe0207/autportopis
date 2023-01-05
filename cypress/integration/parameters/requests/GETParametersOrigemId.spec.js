describe('Testar busca de resgistro de Origem', () => {
    it("busca geral", () => {
        cy.request({
            method: "GET",
            url: "https://8s7tnedhu9.execute-api.ca-central-1.amazonaws.com/dev/v1/origem/:id",
            params: {
                 'id': 1 // verificar como pegar o id para passar na consulta
             },
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property("COD_ORIGEM");
            expect(res.body[0].COD_ORIGEM).to.be.equal(1);
            expect(res.body[0]).to.have.property("NOM_ORIGEM");
            expect(res.body[0].NOM_ORIGEM).to.be.equal("teste1");
        });
    });

})