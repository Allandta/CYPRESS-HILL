describe('Dons first test', () => {
  beforeEach(() => {
    cy.visit('https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
  });
    it('navigate to the Source website', () => {

        cy.visit('https://source.thenbs.com/')

        cy.get('#onetrust-accept-btn-handler')
            .click()

        cy.get('[data-cy="searchFieldSearch"]').first()

        // Select the first input field and type 'Hello'
        cy.get('input').first().type('Dyson');

        cy.contains('Dyson')
            .click()


    })

    it('Dyson manufacturer homepage URL is correct', () => {

        cy.visit('https://source.thenbs.com/')

        cy.get('#onetrust-accept-btn-handler')
            .click()

        cy.get('[data-cy="searchFieldSearch"]').first()

        // Select the first input field and type 'Hello'
        cy.get('input').first().type('Dyson');

        cy.contains('Dyson')
            .click()


        cy.url().should('include', 'https://source.thenbs.com/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');


    })



    it('Manufacturer homepage title is as expected', () => {

        cy.visit('https://source.thenbs.com/')

        cy.get('#onetrust-accept-btn-handler')
            .click()

        cy.get('[data-cy="searchFieldSearch"]').first()

        // Select the first input field and type 'Hello'
        cy.get('input').first().type('Dyson');

        cy.contains('Dyson')
            .click()

        cy.get('.brand-title-container')
            .should('contain', 'Dyson')
            .should('be.visible');

    })

    it('Ensure the telephone number is correct', () => {

        cy.visit('https://source.thenbs.com/')

        cy.get('#onetrust-accept-btn-handler')
            .click()

        cy.get('[data-cy="searchFieldSearch"]').first()

        // Select the first input field and type 'Hello'
        cy.get('input').first().type('Dyson');

        cy.contains('Dyson')
            .click()

        cy.get('a[action="telephone"]')
            .should('have.attr', 'href', 'tel:08003457788')
            .and('contain', '08003457788');





    })

})
