class WallsAndBarriers {
    // ------------------------
    // Selectors
    // Define all relevant selectors as class properties for easy reuse and maintenance.
    barriersRailsAndFences = 'Barriers, rails and fences'; // Text for the "Barriers, rails and fences" subcategory
    balustradeAndHandrailSystems = 'Balustrade and handrail systems'; // Text for the "Balustrade and handrail systems" subcategory

    // ------------------------
    // Actions
    // Define all actions (methods that interact with the page) below.

    /**
     * Clicks the "Barriers, rails and fences" subcategory on the page.
     */
    clickBarriersRailsAndFences() {
        cy.contains(this.barriersRailsAndFences, { timeout: 10000 }).click();
    }

    /**
     * Clicks the "Balustrade and handrail systems" subcategory on the page.
     */
    clickBalustradeAndHandrailSystems() {
        cy.contains(this.balustradeAndHandrailSystems, { timeout: 10000 }).click();
    }
}

// Export a singleton instance of the WallsAndBarriers class for use in tests.
export default new WallsAndBarriers();