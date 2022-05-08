Feature: Listar POST crear vista by TAG

@user1 @web
Scenario: Como un usuario inicio sesión y guardo vista filtro "featured"
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/tags/new"
    And I wait for 2 seconds
    And I set text "Views" on element with xpath "<TAG_NAME_ID>"
    And I wait for 2 seconds
    And I click element with xpath "<TAG_BTN_SAVE_ID>"
    And I wait for 2 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/posts?tag=views"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_XPATH>"
    And I set text "Views View" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
