describe('Passam Aérea', () => {
  it('Geração de PIX para a passagem aérea', () => {
    cy.visit('https://www.vaidepromo.com.br/')

// Digitar o Aeroporto de ida
cy.get('[data-cy="departure"]').type('Guarulhos');
cy.get('[data-cy="autocomplete-regular-item"]').should('be.visible');
cy.get('[data-cy="autocomplete-regular-item"]').click();

// Digitar o Aeroporto de ida
cy.get('[data-cy="arrival"]').type('RIO');
cy.get('[data-code="Todos os aeroportos, Rio de Janeiro, RJ (RIO)"]').should('be.visible');
cy.get('[data-code="Todos os aeroportos, Rio de Janeiro, RJ (RIO)"]').click();

//Data de ida 
cy.get('[data-cy="departureDate"]').click();
cy.get(':nth-child(1) > .vdp-ui-daterangepicker-days-container > :nth-child(25)')
.contains('20') 
.click();

//Data de volta
cy.get('[data-cy="returnDate"]').click();
cy.get(':nth-child(1) > .vdp-ui-daterangepicker-days-container > :nth-child(26)')
.contains('21') 
.click();


//Clicar na opção "Encontrar voos"
cy.get('[data-cy="submitAirSearch"]').click();

//Clicar na opção "Comprar"
cy.get(':nth-child(1) > .GMPOzXW1s3NXIFb0oiUs > .W2YP4H0prvDLX2swqlQz > [data-cy="comprar-button"]').click();

//Preencher dados de quem receberá o bilhete eletrõnico
cy.get('[data-cy="contactFullName"]').type ('Lucas Barreto Caramuru')
cy.get('[data-cy="contactEmail"]').type('lucas_caramuru@hotmail.com');
cy.get('[data-cy="contactPhone"]').type('12 98211-4211');

//Preencher dados de quem vai embarcar nessa viagem
cy.get('[data-cy="passenger0firstName"]').type ('Lucas')
cy.get('[data-cy="passenger0lastName"]').type ('Barreto Caramuru')
cy.get('[data-cy="passenger0document"]').type('75142147200')
cy.get('[data-cy="passenger0birthDate"]').type('21062003')
cy.get('[data-cy="passenger0phone"]').type('12 98211-4211')
cy.get('[data-cy="passenger0email"]').type('lucas_caramuru@hotmail.com');
cy.get('.placeholder').click();
cy.get('.vdp-ui-select-options > :nth-child(1)').click();

//Selecionar método de pagamento por PIX
  cy.get('[data-cy="paymentSelectedPix"] > .vdp-ui-box-container').click();

//Preencher dados do pagamento
cy.get('[data-cy="paymentPixFullName"]').type ('Lucas Barreto Caramuru')
cy.get('[data-cy="paymentPixDocument"]').type('75142147200')

//Clicar na opção de finalizar pagamento
cy.get('[data-cy="comprar-button"]').click();

  })
})