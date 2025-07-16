# The main purpose of the project is to demonstrate the following:
#  - Cucumber/Gherkin and Feature file implementation
#  - Page Object Model
#  - Repository created in GitHub
#  - Independant tests
#  - CI Pipeline Integration
#  - Implementation of the Axe-plugin for usability reporting
#  - API Testing
#  - Different ways of interacting and verifying UI element attributes

Feature: Dyson Homepage Regression Tests

Scenario Outline: Subcategory is displayed
  Given I click on the Browse Categories button
  Then I will be directed to the "categories" category page
  And The expected subcategory "<subcategory>" will be displayed

Examples:
  | subcategory                       |
  | Walls and barriers                |
  | General building products         |
  | Plumbing and waste disposal       |

