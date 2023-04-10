/// <reference types="cypress" />
const URL_Parametrizacao = Cypress.env('URL_PARAMETRIZACAO');

function getparameterscanal(){
    return cy.request({
         method: 'GET',
         url : `${URL_Parametrizacao}/canal`,
         headers: {
               'Content-Type':'application/json',          
               'access_token':Cypress.env('token_pisworkflow'),
               'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e'
          },
          
         failOnStatusCode: false
    })
 }
 
 export { getparameterscanal };


 function getparameterscanalid(idCanal){
     return cy.request({
          method: 'GET',
          url : `${URL_Parametrizacao}/canal/${idCanal}`,
          headers: {
               'Content-Type':'application/json',          
               'access_token':Cypress.env('token_pisworkflow'),
               'client_id':'1ddd38c1-1a2a-4f13-95d2-b1f503cc527e'
          },
         
          failOnStatusCode: false
     })
  }
  
  export { getparameterscanalid };