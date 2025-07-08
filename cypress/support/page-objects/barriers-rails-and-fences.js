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
        cy.matchImageSnapshot();
    }
}
// Export a singleton instance of the NBSHomepage class
export default new BarrierRailsFences();