class Categories {
    // ------------------------
    // Selectors
    // Define all category names as properties for easy reuse and maintenance.
    wallsAndBarriers = 'Walls and barriers'; // Text for the "Walls and barriers" category
    barriersRailsAndFences = 'Barriers, rails and fences'; // Text for the "Barriers, rails and fences" subcategory
    livingWalls = 'Living walls'; // Text for the "Living walls" subcategory
    walls = 'Walls'; // Text for the "Walls" subcategory
    balustradeAndHandrailSystems = 'Balustrade and handrail systems'; // Text for the "Balustrade and handrail systems" subcategory

    // ------------------------
    // Actions
    // Define all actions (methods that interact with the page) below.

    /**
     * Clicks the "Walls and barriers" category on the page.
     */
    clickWallsAndBarriers() {
        cy.contains(this.wallsAndBarriers, { timeout: 20000 }).click();
    }

    /**
     * Checks that the current URL contains the expected text.
     * @param {string} expectedText - The text expected to be found in the URL.
     */
    checkURLContainsExpectedText(expectedText) {
        cy.url({ timeout: 20000 }).should('include', expectedText);
    }

    /**
     * Checks that a subcategory with the given name exists on the page.
     * @param {string} subcategory - The subcategory text to check for.
     */
    checkSubcategoryExists(subcategory) {
        cy.contains(subcategory, { timeout: 20000 }).should('exist');
    }
}

// Export a singleton instance of the Categories class for use in tests.
module.exports = new Categories();