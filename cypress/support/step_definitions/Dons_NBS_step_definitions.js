/// <reference types="cypress" />

// Import page objects
import NBSHomepage from "../page-objects/nbs-homepage";
import Categories from "../page-objects/categories";

// Import Cucumber preprocessor functions
import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

// Given I navigate to the NBS homepage and click the Browse Categories button
Given(`I click on the Browse Categories button`, () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.clickBrowseCategories();
});

// Then step to verify the correct categories are displayed and the URL contains expected text
Then(`I will be directed to the {string} category page`, (expectedText) => {
  Categories.checkURLContainsExpectedText(expectedText);
});

// Then step to verify the href attribute of the Source logo
Then('The expected subcategory {string} will be displayed', (subcategory) => {
  Categories.checkSubcategoryExists(subcategory);
});



