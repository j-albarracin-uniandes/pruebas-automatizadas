Feature: POST

@user4 @web
Scenario: TEST111
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "<CREATE_POST_URL>"
    And I wait for 1 seconds
    And I set text "$string_1" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I set text "$$string_1" on element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I set text "$string_3" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<OPEN_SETTINGS_CLASS>"
	And I set text "2022-05-18" on element with xpath "<POST_DATE_XPATH>"
    And I wait for 2 seconds
