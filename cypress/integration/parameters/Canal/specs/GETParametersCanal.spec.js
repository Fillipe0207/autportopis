import * as GETParametersCanal from '../requests/GETParametersCanal.request.js';

describe('PARAMETERS - Canal', () => {

    beforeEach(() => {
        cy.token_pisworkflow(); 
    });
    
    it('Entidade Canal- Busca geral', () => {
      
        GETParametersCanal.getparameterscanal().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[1]).to.have.property("NOM_CANAL");
            expect(response.body[1].NOM_CANAL).to.be.equal("canal2");
            expect(response.body[1]).to.have.property("DAT_FIM_VIGENCIA");
            expect(response.body[1].DAT_FIM_VIGENCIA).to.be.equal(null);
        })
    });
       
    
    it('Entidade Canal- Busca por ID', () => {
        const idCanal = 1;

        GETParametersCanal.getparameterscanalid(idCanal).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[0]).to.have.property("COD_CANAL");
            expect(response.body[0].COD_CANAL).to.be.equal(idCanal);
            expect(response.body[0]).to.have.property("NOM_CANAL");
            expect(response.body[0].NOM_CANAL).to.be.equal("teste11");

        })
    });

    it('Entidade Canal - Validar se todas as variáveis são exibidas', () => {
        
        GETParametersCanal.getparameterscanal().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body[0].COD_CANAL).to.exist;
            expect(response.body[0].DAT_INICIO_VIGENCIA).to.exist;
            expect(response.body[0].DAT_FIM_VIGENCIA).to.be.equal(null);
            expect(response.body[0].NOM_CANAL).to.exist;
            expect(response.body[0].QTD_HORA_VALIDADE).to.exist;  
            expect(response.body[0].FLG_VALOR_OBRIGATORIO_OFERTA).to.exist;

        })
    });

    it('Entidade Canal- Validar Canal não cadastrada', () => {
        const idCanal = 13;

        GETParametersCanal.getparameterscanalid(idCanal).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).is.not.empty
            expect(response.body).to.eq('Canal não cadastrado')
        })
    });
});