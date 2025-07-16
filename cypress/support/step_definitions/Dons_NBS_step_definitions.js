/// <reference types="cypress" />

// Import page objects
import NBSHomepage from "../page-objects/nbs-homepage";
import Categories from "../page-objects/categories";
import WallsAndBarriers from "../page-objects/wall-and-barriers";
import BarriersRailsAndFences from "../page-objects/barriers-rails-and-fences";

// Import Cucumber preprocessor functions
import { Given, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

// Given I navigate to the NBS homepage and click the Browse Categories button
Given(`I click on the Browse Categories button`, () => {
  NBSHomepage.visitNBSHomePageAndClickAcceptCookies();
  NBSHomepage.clickBrowseCategories();
});

// Then step to verify the href attribute of the Source logo
Then(`I will be directed to the Walls and barriers category`, () => {
  Categories.verifyWallAndBarriersCategory();
  Categories.checkURLContainsExpectedText('walls-and-barriers');
});

// Then step to verify the href attribute of the Source logo
Then(`The expected categories will be displayed`, (([subcategory]) => {
  Categories.checkSubcategoryExists(subcategory);
}));



