describe('Seguro Viagem', () => {
  it('Usar o cupom AMOPROMO na tela de pagamento', () => {
    cy.visit('https://www.vaidepromo.com.br/')

// Selecionar o produto "Seguro Viagem"
cy.contains('Seguro Viagem').click();

// Clique no campo de destino 
cy.get('[data-cy="destination"]').click();

// Selecione a opção "Europa" 
cy.contains('Europa').click();

 // Preencher informações de compra
cy.get('.styles_inputGroup__taah0 > :nth-child(1) > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="name"]').type('Lucas Caramuru')
  cy.get('.styles_inputGroup__taah0 > :nth-child(2) > .vdp-ui-input-external > .vdp-ui-input-container > .vdp-ui-input-group > [data-cy="email"]').type('lucas_caramuru@hotmail.com')
    cy.get('[data-cy="phone"]').type ('12 98211-4211')

// Selecionar o campo de data de embarque e inserir a data desejada (15/09)
cy.get('[data-cy="departure"]').click(); 
cy.get(':nth-child(1) > .vdp-ui-daterangepicker-days-container > :nth-child(25)') 
.contains('20') 
.click();

// Selecionar o campo de data de desembarque e inserir a data desejada (15/09)
cy.get('[data-cy="arrival"]').click(); 
cy.get(':nth-child(1) > .vdp-ui-daterangepicker-days-container > :nth-child(26)') 
.contains('21') 
.click();


//Selecionar o campo "Encontrar Seguro Viagem"
  cy.get('[data-cy="submit"]').click();

//Clicar na opção "Selecionar seguro"
  cy.get(':nth-child(2) > .RSSvLTo4mjzOcSmaSnlC > a > [data-cy="select-plan"]').click();

//Escreva o nome completo
  cy.get('[data-cy="insured-0-name"]').type ('Lucas Barreto Caramuru')

//Escreva a data de nascimento
  cy.get('[data-cy="insured-0-birthdate"]').should('be.visible').type('21062003');

//Escreva o CPF
  cy.get('[data-cy="insured-0-cpf"]').should('be.visible').type('75142147200');

// Inserir "Cupom de desconto"
  cy.get('[data-cy="coupon"]').type('AMOPROMO')
    cy.get('[data-cy="button-coupon"]').click();

//Completar dados de contato da compra
cy.get('[data-cy="name"]').should('be.visible').type('Lucas Barreto Caramuru');
  cy.get('[data-cy="phone"]').should('be.visible').type('12 98211-4211');
    cy.get('[data-cy="email"]').should('be.visible').type('lucas_caramuru@hotmail.com');
      cy.get('[data-cy="cep"]').type('12320010', { force: true });
        cy.get('[data-cy="number"]').type('1300')

//Selecionar o método de pagamento por Cartão de Crédito
cy.get('.jXWtu4HWAsq8CKida0vC > :nth-child(2)').click();  

//Preencher campos com os dados do Cartão de Crédito
cy.get('[data-cy="payment-card"]').should('be.visible').type('3497 810240 14008')
  cy.get('[data-cy="payment-name"]').type('Lucas Caramuru')
    cy.get('[data-cy="payment-cpf"]').should('be.visible').type('75142147200');
      cy.get('[data-cy="payment-cvv"]').should('be.visible').type('1553')
        cy.get('[data-cy="payment-date"]').should('be.visible').type('112025')

  //Selecionar quantidade de parcelas
    cy.get('.placeholder').click();
        cy.get('.tTKJ87nK2g0HYskNqcwZ').click();

  //Clicar na opção de finalizar pagamento
    cy.get('[data-cy="finalizar-pagamento"]').should('be.visible').should('be.enabled').click();
  })
})