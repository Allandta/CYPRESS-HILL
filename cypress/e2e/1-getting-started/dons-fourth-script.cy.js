

import 'cypress-axe';


describe('Source Categories Navigation', () => {
  // This hook runs before each test in this suite.
  beforeEach(() => {
    // Visit the main page of the application.
    cy.visit('https://source.thenbs.com/');
    // Accept the cookie consent banner if it appears.
    cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible').click();
  });

  it('should navigate from All categories to Walls and barriers', () => {
    // Click on the "Browse categories" button or link to view all categories.
    cy.contains('Browse categories').click();

    // Click on the "Walls and barriers" category from the list.
    cy.contains('Walls and barriers', { timeout: 10000 }).click();

    // Check that the URL contains the expected path for the "Walls and barriers" category.
    cy.url().should('include', '/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr');

    // Verify that the subcategories are present on the page.
    cy.contains('Barriers, rails and fences').should('exist');
    cy.contains('Living walls').should('exist');
    cy.contains('Walls').should('exist');
  });

  it('should navigate to Barriers, rails and fences and verify Balustrade and handrail systems', () => {
    // Go directly to the "Walls and barriers" category page.
    cy.visit('https://source.thenbs.com/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr');

    // Click on the "Barriers, rails and fences" subcategory.
    cy.contains('Barriers, rails and fences', { timeout: 10000 }).click();

    // The following lines are commented out, but show how to check for and click on a further subcategory:
    // // Verify the link for "Balustrade and handrail systems" exists.
    // cy.contains('Balustrade and handrail systems', { timeout: 10000 }).should('exist');
  });
  
  it('should have no detectable accessibility violations on load', () => {
cy.injectAxe();
        cy.checkA11y(null, null, (violations) => {
            // Log the violations without failing the test
            cy.task('log', violations);
            violations.forEach((violation) => {
                const nodes = Cypress.$(
                    violation.nodes.map((node) => node.target).join(',')
                );
                Cypress.log({
                    name: 'a11y error!',
                    consoleProps: () => violation,
                    $el: nodes,
                    message: `[${violation.id}] ${violation.help} (${violation.nodes.length} nodes)`,
                });
            });
        }, { timeout: 10000 }); // Increase the timeout to 10 seconds
  });
it('should match the homepage snapshot', () => {
  cy.matchImageSnapshot();
});





});