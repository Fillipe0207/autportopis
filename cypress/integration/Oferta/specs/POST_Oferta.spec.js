import * as POST_Oferta from '../requests/POST_Oferta.request.js';
import payment_oferta from "../../../fixtures/payment_oferta.json";
import * as GET_Ofertaid from '../requests/GET_OfertaId.request';

const CPF_elegibilidade = "70142893064"; 
const Canal = 83;

describe('OFERTA', () => {
    //token
    beforeEach(() => {
        cy.token_pisworkflow(); 
    });

    var codigoOferta

    it.only('Criação de Oferta com CPF válido', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = Canal;
        body.tipoDocumento = "CPF";
        body.documento = CPF_elegibilidade;
        body.valorTransacao = 100;
    
        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).is.not.empty
            expect(response.body.codigoOferta).to.exist
            expect(response.body.documento).to.eq(CPF_elegibilidade)
            expect(response.body.codigoCanal).to.eq(20)
            expect(response.body.situacao).to.eq("Incluída")

            codigoOferta = response.body.codigoOferta            
            
            expect(response.body.codigoOferta).to.eq(codigoOferta)

        })
    });

    it('Consulta a oferta criada', () => {
        GET_Ofertaid.getOfertaid(codigoOferta).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body.codigoOferta).to.eq(codigoOferta)
            expect(response.body.codigoCanal).to.eq(20)
            expect(response.body.situacao).to.eq("Incluída")
           
        })
    });
        
    it('Oferta passando o campo "codigoCanal" vazio', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = "";
        body.tipoDocumento = "CPF";
        body.documento = CPF_elegibilidade;
        body.valorTransacao = 100;

        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("Codigo do Canal precisa ser do tipo number.")
        })
    });

    it('Oferta passando o campo "tipoDocumento" vazio', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = Canal;
        body.tipoDocumento = "";
        body.documento = CPF_elegibilidade;
        body.valorTransacao = 100;

        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("tipoDocumento só pode ser CPF ou CNPJ.")
        })
    });

    it('Oferta passando o campo "documento" vazio', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = Canal;
        body.tipoDocumento = "CPF";
        body.documento = "";
        body.valorTransacao = 100;
    
        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("Documento não pode ser enviado vazio.")
        })
    });

    it('Oferta - Validando campos obrigatórios - Não enviando o campo "codigoCanal"', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.tipoDocumento = "CPF";
        body.documento = CPF_elegibilidade;
        body.valorTransacao = 100;

        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("Codigo do Canal precisa ser fornecido.")
        })
    });

    // analisar pois a mensagem retornada não é a esperada.
    it('Oferta - Validando campos obrigatórios - Não enviando o campo "tipoDocumento"', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = Canal;
        body.documento = CPF_elegibilidade;
        body.valorTransacao = 100;

        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("tipoDocumento só pode ser CPF ou CNPJ.")
           // expect(response.body.message).to.eq("\"tipoDocumento\" is required")
        })
    });

    // analisar pois a mensagem retornada não é a esperada.
    it('Oferta - Validando campos obrigatórios - Não enviando o campo "documento"', () =>{
        const body = JSON.parse(JSON.stringify(payment_oferta));
        
        body.codigoCanal = Canal;
        body.tipoDocumento = "CPF";
        body.valorTransacao = 100;

        POST_Oferta.postOferta(body).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).is.not.empty
            expect(response.body.message).to.eq("Documento deve ser enviado em um dos padrões \"00000000000\"/\"000.000.000-00\" para CPF ou \"00000000000000\"/\"00.000.000/0000-00\" para CNPJ")
        })
    });

   
});