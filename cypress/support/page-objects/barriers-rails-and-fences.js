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
    async compareSnapshots() {
        cy.viewport(1000, 1839); // Set a fixed viewport size to match the baseline snapshot

        // Wait for all images to load
        cy.document().then((doc) => {
            return Cypress.Promise.all(
                Array.from(doc.images)
                    .filter(img => !img.complete)
                    .map(img => new Cypress.Promise(resolve => {
                        img.onload = img.onerror = resolve;
                    }))
            );
        });

        // Optionally, wait for network to be idle (if you use fetch/XHR for images or content)
        // cy.waitUntilNetworkIdle(); // Requires a custom command or plugin

        cy.scrollTo('bottom', { ensureScrollable: false }); // Scroll to the bottom to ensure all content is rendered

        cy.matchImageSnapshot('dyson-homepage', {
            failureThreshold: 0.40, // Allow up to 40% difference
            failureThresholdType: 'percent',
        });
    }
    // ensure the back-to-top button is working as expected
    // This method scrolls to the bottom of the page, clicks the back-to-top button
    ensureBackToTopButtonIsWorking() {
        // Set a large viewport to ensure the page is scrollable
        // cy.viewport(1200, 2000);

        // Scroll to the very bottom using JavaScript for reliability
        cy.scrollTo('bottom', { ensureScrollable: false });
        cy.wait(500); // Wait a bit after scrolling

        // Wait for the button to appear after scrolling
        cy.get('[data-cy="backToTopButton"]', { timeout: 10000 }).should('be.visible');

        // Click the button
        cy.get('[data-cy="backToTopButton"]').click();

        // Assert that the page is scrolled to (near) the top
        cy.window().its('scrollY').should('be.lessThan', 50);
    }
testBreadcrumbs() {
        // Check the breadcrumb structure and content
        cy.get('ul')
            .first()
            .within(() => {
                // Home breadcrumb
                cy.get('li').eq(0).find('a').should('have.attr', 'href', '/').and('contain', 'Home');
                // Categories breadcrumb
                cy.get('li').eq(1).find('a').should('have.attr', 'href', '/categories').and('contain', 'Categories');
                // Current page breadcrumb (not a link)
                cy.get('li').eq(2).should('contain', ' Coverings, coatings and finishes ');
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
export default new BarrierRailsFences();