/// <reference types="cypress" />

const URL_OFERTA = Cypress.env('URL_OFERTA');


function getOfertaid(idOferta){
    return cy.request({
         method : 'GET',
         url : `${URL_OFERTA}/v1/oferta/${idOferta}`,
         headers: {
             'Content-Type':'application/json',          
             'access_token':Cypress.env('token_pisworkflow'),
             'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e'
         },
            
         failOnStatusCode: false
    })
 }
 
 export { getOfertaid };