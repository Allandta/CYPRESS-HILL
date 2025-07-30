class NBSHomepage {
    // ------------------------
    // Selectors
    // Define all element selectors as class properties for easy reuse and maintenance.
    acceptCookiesButton = 'button'; // Selector for the Accept Cookies button (by element type)
    searchField = '[data-cy="searchFieldSearch"]'; // Selector for the homepage search input field (by data attribute)
    dysonResultText = 'Dyson'; // Text to identify the Dyson search result in the list
    categoriesButton = 'Browse categories'; // Text for the "Browse categories" button

    // ------------------------
    // Actions
    // Define all actions (methods that interact with the page) below.

    /**
     * Clicks the 'Accept All Cookies' button on the homepage.
     */
    acceptCookies() {
    cy.get('button')
      .contains('Accept All Cookies')
      .then($btn => {
        if ($btn.length) {
          cy.wrap($btn).click();
        }
      });
}

    /**
     * Clicks the 'Browse categories' button on the homepage.
     */
    clickBrowseCategories() {
        cy.contains(this.categoriesButton, { timeout: 10000 }).click();
    }

    /**
     * Visits the NBS homepage and clicks the 'Accept All Cookies' button.
     * Useful for test setup.
     */
    visitNBSHomePageAndClickAcceptCookies() {
        cy.visit('https://source.thenbs.com');
        cy.contains(this.acceptCookiesButton, 'Accept All Cookies').click();
    }

    /**
     * Types the provided search term into the homepage search field.
     * @param {string} term - The search term to enter.
     */
    searchFor(term) {
        cy.get(this.searchField).first().type(term);
    }

    /**
     * Selects the Dyson result from the search results.
     * Waits for the result to be visible before clicking.
     */
    selectDysonResult() {
        cy.contains(this.dysonResultText, { timeout: 10000 }).should('be.visible').click();
    }
}

// Export a singleton instance of the NBSHomepage class for use in tests.
module.exports = new NBSHomepage();