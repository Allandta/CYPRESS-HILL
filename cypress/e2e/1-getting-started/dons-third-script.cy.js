describe('Source Categories Navigation', () => {
  beforeEach(() => {
    cy.visit('https://source.thenbs.com/categories');
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('should navigate from All categories to Walls and barriers', () => {
    // Click on the heading "All categories" if it's clickable (adjust selector if needed)
    cy.contains('span', 'All categories').click();

    // Click on the "Walls and barriers" category
    cy.contains('h1', 'Walls and barriers').click();

    // Verify the URL
    cy.url().should('include', '/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr');

    // Verify the three categories are present
    cy.contains('a', 'Barriers, rails and fences').should('exist');
    cy.contains('a', 'Living walls').should('exist');
    cy.contains('a', 'Walls').should('exist');
  });

  it('should navigate to Barriers, rails and fences and verify Balustrade and handrail systems', () => {
    // Go directly to Walls and Barriers category page
    cy.visit('https://source.thenbs.com/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr');
    cy.get('#onetrust-accept-btn-handler').click({ force: true }); // In case cookie banner appears again

    // Click on "Barriers, rails and fences"
    cy.contains('a', 'Barriers, rails and fences').click();

    // Verify the link for "Balustrade and handrail systems" exists
    cy.contains('a', 'Balustrade and handrail systems').should('exist');

    // Click on "Balustrade and handrail systems"
    cy.contains('a', 'Balustrade and handrail systems').click();
  });
});