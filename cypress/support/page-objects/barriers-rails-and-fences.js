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
        cy.wait(500); // Wait a bit after scrolling
        cy.matchImageSnapshot('dyson-homepage', {
            failureThreshold: 0.40, // Allow up to 40% difference
            failureThresholdType: 'percent',
        });
    }
    // ensure the back-to-top button is working as expected
    // This method scrolls to the bottom of the page, clicks the back-to-top button
    ensureBackToTopButtonIsWorking() {
        // Set a large viewport to ensure the page is scrollable
        cy.viewport(1200, 2000);

        // Scroll to the very bottom using JavaScript for reliability
        cy.window().then(win => {
            win.scrollTo(0, document.body.scrollHeight);
        });

        // Wait for the button to appear after scrolling
        cy.get('[data-cy="backToTopButton"]', { timeout: 10000 }).should('be.visible');

        // Click the button
        cy.get('[data-cy="backToTopButton"]').click();

        // Assert that the page is scrolled to (near) the top
        cy.window().its('scrollY').should('be.lessThan', 50);
    }

}
// Export a singleton instance of the NBSHomepage class
export default new BarrierRailsFences();