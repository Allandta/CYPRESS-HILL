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
  it('should have a logo image not visible', () => {
    cy.get('img').first().should('not.be.visible');
  });

  it('should have a contact button or link', () => {
    cy.contains(/contact/i).should('exist');
  });

  it('should not have any 404 errors in network requests', () => {
    cy.intercept('GET', '**').as('getRequests');
    cy.wait('@getRequests').then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });

  it('should have at least one product or service listed', () => {
    cy.contains(/product|service/i).should('exist');
  });

  it('should have a footer section', () => {
    cy.get('footer').should('exist');
  });

  it('should have a visible products section', () => {
    cy.contains('Products').should('be.visible');
  });
  

  });