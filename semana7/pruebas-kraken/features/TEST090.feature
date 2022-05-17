Feature: Crear POST con nombre largo

@user4 @web
Scenario: Como un usuario inicio sesión y creo un post y lo agrego como featured
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "<LIST_POST_FEATURED_URL>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_XPATH>"
    And I wait for 2 seconds
    And I set text "Featured View" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
