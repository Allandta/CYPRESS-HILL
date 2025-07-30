/// <reference types="cypress" />

// Import page objects
import NBSHomepage from "../page-objects/nbs-homepage";
import Categories from "../page-objects/categories";
import BarrierRailsFences from "../page-objects/barriers-rails-and-fences";
import SurveyPopup from "../page-objects/survey-popup";
// import wallAndBarriers from "../page-objects/wall-and-barriers";

// Import Cucumber preprocessor functions
import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";

// This will run before every scenario
beforeEach(() => {
  cy.visit('https://source.thenbs.com');
});

// Given I navigate to the NBS homepage and click the Browse Categories button
Given(`I click on the Browse Categories button`, () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.clickBrowseCategories();
});

Given('I click on the Walls and barriers subcategory', () => {
  Categories.clickWallsAndBarriers();
});

// Then step to verify the URL contains expected text
Then(`I will be directed to the {string} category page`, (expectedText) => {
  Categories.checkURLContainsExpectedText(expectedText);
});

// Then step to verify the expected sub categories are displayed
Then('The expected subcategory {string} will be displayed', (subcategory) => {
    NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.clickBrowseCategories();
  Categories.checkSubcategoryExists(subcategory);
});

Given('I am on the Barriers, rails and fences page', () => {
  cy.visit('https://source.thenbs.com/category/walls-and-barriers/barriers-rails-and-fences/daE3gYnUa9FpPVDMUZuzBd');
});

When('I scroll to the bottom of the page', () => {
  cy.scrollTo('bottom', { ensureScrollable: false });
});

Then('the Back to Top button should be visible', () => {
  cy.get('[data-cy="backToTopButton"]').should('be.visible');
});

Then('when I click the Back to Top button, I should be returned to the top of the page', () => {
  BarrierRailsFences.ensureBackToTopButtonIsWorking();
});

Then('the breadcrumbs should be correct', () => {
  BarrierRailsFences.testBreadcrumbs();
});
Then('the sales support email should be correct', () => {
  BarrierRailsFences.checkSalesSupportEmail();
});
Given('the survey pop-up is present', () => {
  SurveyPopup.closeSurveyPopupIfPresent();
});
