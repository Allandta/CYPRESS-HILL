import NBSHomepage from '../../support/page-objects/nbs-homepage';
import Categories from '../../support/page-objects/categories';
import WallsAndBarriers from '../../support/page-objects/wall-and-barriers';
import BarrierRailsFences from '../../support/page-objects/barriers-rails-and-fences';
import 'cypress-axe'; // Import accessibility testing commands


describe('Source Categories Navigation & Tests', () => {
    // This hook runs before each test in this suite.
    beforeEach(() => {
        // Visit the main page and accept cookies using the Page Object Model (POM) method.
        NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
        // Click the "Browse categories" button to open the categories list.
        NBSHomepage.clickBrowseCategories();
        // Click the "Walls and barriers" category from the list.
        // NOTE: This is a method reference, so you should call it as a function:
        Categories.clickWallsAndBarriers();
    });

    // it('Clicking Browse categories button will navigate to Walls and barriers and ensure subcategories are present', () => {
    //     // Assert that the URL is correct for the "Walls and barriers" category.
    //     Categories.checkURLContainsExpectedText('/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr');

    //     // Check that each expected subcategory is present on the page.
    //     Categories.checkSubcategoryExists(Categories.barriersRailsAndFences);
    //     Categories.checkSubcategoryExists(Categories.livingWalls);
    //     Categories.checkSubcategoryExists(Categories.walls);
    // });

    // it('Navigate to Barriers, rails and fences and verify Balustrade and handrail systems URL is correct', () => {
    //     // Click the "Barriers, rails and fences" subcategory using the WallsAndBarriers POM.
    //     WallsAndBarriers.clickBarriersRailsAndFences();

    //     // Assert that the URL is correct for the "Barriers, rails and fences" category.
    //     Categories.checkURLContainsExpectedText('/category/walls-and-barriers/barriers-rails-and-fences/daE3gYnUa9FpPVDMUZuzBd');

    //     // Example of how to check for a further subcategory (commented out):
    //     // cy.contains('Balustrade and handrail systems', { timeout: 10000 }).should('exist');
    // });

    // it('Generate report showing any Accessibility violations', () => {
    //    WallsAndBarriers.clickBarriersRailsAndFences();
    //     // Run accessibility checks using axe and log any violations.
    //     BarrierRailsFences.injectAxeAndCheckForUsabilityViolations();
    // });

    it('Compare current snapshot with baseline and highlight any differences', () => {
        //    WallsAndBarriers.clickBarriersRailsAndFences();
        // Take a visual snapshot of the homepage and compare it to the baseline image.
        BarrierRailsFences.compareSnapshots();
    });

    it('should show and operate the Back to Top button', () => {
        BarrierRailsFences.ensureBackToTopButtonIsWorking();
    });
});