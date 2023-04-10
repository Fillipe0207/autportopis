import * as GETParametersOrigem from '../requests/GETParametersOrigem.request.js';

describe('PARAMETERS - Origem', () => {

    beforeEach(() => {
        cy.token_pisworkflow(); 
    });

    it('Entidade Origem- Busca geral', () => {
      
        GETParametersOrigem.getparametersorigem().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[5]).to.have.property("NOM_ORIGEM");
            expect(response.body[5].NOM_ORIGEM).to.be.equal("teste6");
            expect(response.body[5]).to.have.property("DAT_FIM_VIGENCIA");
            expect(response.body[5].DAT_FIM_VIGENCIA).to.be.equal(null);
        })
    });
       
    it('Entidade Origem- Busca por ID', () => {
        const idOrigem = 1;

        GETParametersOrigem.getparametersorigemid(idOrigem).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[0]).to.have.property("COD_ORIGEM");
            expect(response.body[0].COD_ORIGEM).to.be.equal(idOrigem);
            expect(response.body[0]).to.have.property("NOM_ORIGEM");
            expect(response.body[0].NOM_ORIGEM).to.be.equal("teste1");

        })
    });

    it('Entidade Origem - Validar se todas as variáveis são exibidas', () => {
        
        GETParametersOrigem.getparametersorigem().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[0].COD_ORIGEM).to.exist;
            expect(response.body[0].DAT_FIM_VIGENCIA).to.exist;
            expect(response.body[0].NOM_ORIGEM).to.exist;
            expect(response.body[0].DAT_INICIO_VIGENCIA).to.exist;

        })
    });

    it('Entidade Origem- Validar Origem não cadastrada', () => {
        const idOrigem = 13;

        GETParametersOrigem.getparametersorigemid(idOrigem).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).is.not.empty
            expect(response.body).to.eq('Origem não cadastrada')
        })
    });

});