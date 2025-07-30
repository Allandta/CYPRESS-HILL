# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independant tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: NBS Regression Tests

Scenario Outline: Subcategories are displayed correctly
  Given I click on the Browse Categories button
  Then I will be directed to the "categories" category page
  And The expected subcategory "<subcategory>" will be displayed

Examples:
  | subcategory                       |
  | Walls and barriers                |
  | General building products         |
  | Plumbing and waste disposal       |

Scenario Outline: Click Walls and barriers subcategory
  Given I click on the Walls and barriers subcategory
  Then I will be directed to the expected url "https://source.thenbs.com/category/walls-and-barriers/qpNRgYeM3pQWsnzXYyf5Xr"

Scenario Outline: Show and operate the Back to Top button
  Given I am on the Barriers, rails and fences page
  When I scroll to the bottom of the page
  Then the Back to Top button should be visible
  And when I click the Back to Top button, I should be returned to the top of the page

  Scenario: Display correct breadcrumbs
  Given I am on the Barriers, rails and fences page
  Then the breadcrumbs should be correct

  Examples:
  | Home                                      |
  | Categories                                |
  | Walls and barriers                        |
  | Barriers, rails and fences                |

Scenario: Display the correct sales support email
  Given I am on the Barriers, rails and fences page
  Then the sales support email should be correct

Scenario: Close the survey pop-up if it appears
  Given the survey pop-up is present
  When I click the close button on the survey pop-up
  Then the survey pop-up should be closed
