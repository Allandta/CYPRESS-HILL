class BarrierRailsFences {
    //Selectors


    //------------------------
    //Actions

    // Inject AXE and check for usability violations
    injectAxeAndCheckForUsabilityViolations() {
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
    }

    // Run the accessibility checks against whichever page we are on
    compareSnapshots() {
        cy.viewport(1000, 1839); // Set a fixed viewport size to match the baseline snapshot
        cy.wait(2000); // Wait for 2 seconds to ensure the site has loaded and dynamic content is rendered
        cy.scrollTo('bottom', { ensureScrollable: false }); // Scroll to the bottom to ensure all content is rendered
        cy.wait(2000); // Wait a bit after scrolling
        cy.matchImageSnapshot('dyson-homepage', {
            failureThreshold: 0.40, // Allow up to 40% difference
            failureThresholdType: 'percent',
        });
    }

    // TODO -this method doesnt adhere to the POM, Locators should be at the top, Actions underneath
    // ensure the back-to-top button is working as expected
    // This method scrolls to the bottom of the page, clicks the back-to-top button
    ensureBackToTopButtonIsWorking() {
        // Scroll to the bottom to make the button appear
        cy.scrollTo('bottom');
        // Ensure the button is visible
        cy.get('[data-cy="backToTopButton"]').should('be.visible');
        // Click the button
        cy.get('[data-cy="backToTopButton"]').click();
        // Assert that the page is scrolled to the top
        cy.window().its('scrollY').should('be.lessThan', 50);
    }

    testBreadcrumbs() {
        // Check the breadcrumb structure and content
        cy.get('ul') // Use a more specific selector if possible
            .first() // If there are multiple <ul>, target the first or use a class/data attribute
            .within(() => {
                // 1st breadcrumb: Home
                cy.get('li').eq(0)
                    .should('contain.text', 'Home')
                    .find('a')
                    .should('have.attr', 'href', '/');

                // 2nd breadcrumb: Categories
                cy.get('li').eq(1)
                    .should('contain.text', 'Categories')
                    .find('a')
                    .should('have.attr', 'href', '/categories');

                // 3rd breadcrumb: Walls and barriers
                cy.get('li').eq(2)
                    .should('contain.text', 'Walls and barriers')

                // 4th breadcrumb: Barriers, rails and fences (no link)
                cy.get('li').eq(3)
                    .should('contain.text', 'Barriers, rails and fences')
                    .find('a')
                    .should('not.exist');
            });
    }
    // Check the presence and functionality of the sales support email link
    checkSalesSupportEmail() {
        cy.get('a[title^="Email salessupport@theNBS.com"]')
            .should('have.attr', 'href')
            .and('include', 'mailto:salessupport@theNBS.com')
            .and('include', 'subject=Customer enquiry from NBS Source');
        cy.get('a[title^="Email salessupport@theNBS.com"]')
            .should('contain', 'salessupport@theNBS.com');
    }

}
// Export a singleton instance of the NBSHomepage class
module.exports = new BarrierRailsFences();