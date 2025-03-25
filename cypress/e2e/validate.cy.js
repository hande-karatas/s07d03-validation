describe('login page', () => {
  describe('error messages', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:5174/');
    })
    it('email error', () => {
      //act
      cy.get('[data-cy="input-email"]').type("hande@kar");
      //assess
      cy.contains('Please enter a valid email address').should('be.visible');
      cy.get('[data-cy="input-button"]').should('be.disabled');
    })
    it('email+password error', () => {
     //act
     cy.get('[data-cy="input-email"]').type("hande@kar");
     cy.get('[data-cy="input-password"]').type("h3d");
     //assess
     cy.get('[data-cy="input-button"]').should('be.disabled');     
     cy.contains('Password must be at least 4 characters long');
    })
    it('terms not accepted', () => {
      //act
      cy.get('[data-cy="input-email"]').type("hande@kar.com");
      cy.get('[data-cy="input-password"]').type("Lol!5");
      //assess
      cy.get('[data-cy="input-button"]').should('be.disabled');
    })

  })
  describe("success", ()=>{
    it("button enabled for validated inputs", ()=>{
      //arrange
      cy.visit('http://localhost:5174/');
      //act
      cy.get('[data-cy="input-email"]').type("hande@kar.com");
      cy.get('[data-cy="input-password"]').type("Lol!5");
      cy.get('[data-cy="input-check"]').check();
      //assess
      cy.get('[data-cy="input-button"]').should('be.enabled');

    })
  })
})