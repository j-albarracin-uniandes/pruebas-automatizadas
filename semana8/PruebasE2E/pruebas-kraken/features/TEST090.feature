Feature: POST

@user4 @web
Scenario: TEST090
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
    And I set text "$name_1" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_XPATH>"
    And I wait for 2 seconds
    And I set text "$name_1" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_XPATH>"
    And I wait for 2 seconds
    And I set text "$number_1" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
