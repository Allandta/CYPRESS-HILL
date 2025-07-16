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

Scenario Outline: Clicking Browse categories button will navigate to Walls and barriers and ensure subcategories are present
    Given I click on the Browse Categories button
    Then I will be directed to the Walls and barriers category page 
    And The expected categories will be displayed:
        | Barriers, rails and fences |
        | Living walls               |
        | Walls                      |

