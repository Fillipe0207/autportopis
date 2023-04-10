import * as GET_Ofertaid from '../requests/GET_OfertaId.request';

describe('GET Oferta por ID', () => {
    //token
    beforeEach(() => {
        cy.token_pisworkflow(); 
    });

  
    it ('Consulta a oferta criada', () => {
        const idOferta = "c447020a-3fd4-4784-9243-c51b3615bf30";

        GET_Ofertaid.getOfertaid(idOferta).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body.codigoOferta).to.eq(idOferta)
        })
    });
});