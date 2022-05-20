Feature: POST

@user4 @web
Scenario: TEST091
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
    And I set text "$url_1" on element with xpath "<POST_URL_XPATH>"
    And I wait for 1 seconds
    And I set text "$string_3" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
	And I set text "$number_1" on element with xpath "<FILTER_VIEW_INPUT_TAG_XPATH>"
	And Enter on element with xpath "<FILTER_VIEW_INPUT_TAG_XPATH>"
	Then I click element with xpath "<SETTING_MENU_CONTENT>"
	And I wait for 1 seconds
	And I set text "XYZ-789" on element with xpath "<FILTER_VIEW_INPUT_EXCERPT_XPATH>" 
	And I wait for 5 seconds
