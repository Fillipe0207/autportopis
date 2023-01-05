describe('Testar busca de resgistro de Origem', () => {
    it("busca geral", () => {
        cy.request({
            method: "GET",
            url: "https://8s7tnedhu9.execute-api.ca-central-1.amazonaws.com/dev/v1/origem/",
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[5]).to.have.property("NOM_ORIGEM");
            expect(res.body[5].NOM_ORIGEM).to.be.equal("teste6");
            expect(res.body[5]).to.have.property("DAT_FIM_VIGENCIA");
            expect(res.body[5].DAT_FIM_VIGENCIA).to.be.equal(null);
        });
    });

})