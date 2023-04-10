/// <reference types="cypress" />
const URL_Parametrizacao = Cypress.env('URL_PARAMETRIZACAO');

function getparametersorigem(){
    return cy.request({
         method: 'GET',
         url : `${URL_Parametrizacao}/origem`,
         headers: {
               'Content-Type':'application/json',          
               'access_token':Cypress.env('token_pisworkflow'),
               'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e'
          },
        
         failOnStatusCode: false
    })
 }
 
 export { getparametersorigem };


 function getparametersorigemid(idOrigem){
     return cy.request({
          method: 'GET',
          url : `${URL_Parametrizacao}/origem/${idOrigem}`,
          headers: {
               'Content-Type':'application/json',          
               'access_token':Cypress.env('token_pisworkflow'),
               'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e'
          },
         
          failOnStatusCode: false
     })
  }
  
  export { getparametersorigemid };