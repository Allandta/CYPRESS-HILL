describe('Dyson Manufacturer Overview Page', () => {
  beforeEach(() => {
    cy.visit('https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
  });
  

  it('should load the page and have the correct title', () => {
    cy.title().should('include', 'Dyson');
  });

  it('should display the telephone number link', () => {
    cy.get('a[action="telephone"]')
      .should('have.attr', 'href', 'tel:08003457788')
      .and('contain', '08003457788');
  });

  it('should have a visible overview section', () => {
    cy.contains('Overview').should('be.visible');
  });

  it('should have a navigation menu', () => {
    cy.get('nav').should('exist');
  });
});