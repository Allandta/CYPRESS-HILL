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

Scenario Outline: Clicking Browse categories button will navigate to <url> and ensure subcategories are present
    Given I click on the Browse Categories button
    Then I will be directed to the <url> category page 
    And The expected categories will be displayed:
        | <subcategory1> |
        | <subcategory2> |
        | <subcategory3> |

Examples:
    | url                        | subcategory1                 | subcategory2      | subcategory3 |
    | Walls and barriers         | Barriers, rails and fences   | Living walls      | Walls        |
    | Outdoor spaces             | Patios                       | Decks             | Pergolas     |

