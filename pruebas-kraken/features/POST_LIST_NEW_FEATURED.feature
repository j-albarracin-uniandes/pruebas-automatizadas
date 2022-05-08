Feature: Listar POST crear vista Featured

@user1 @web
Scenario: Como un usuario inicio sesión y guardo vista filtro "featured"
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 2 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=featured"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_XPATH>"
    And I wait for 2 seconds
    And I set text "Featured View" on element with xpath "<FILTER_VIEW_INPUT_XPATH>"
    And I wait for 2 seconds
    And I click element with xpath "<FILTER_VIEW_BUTTON_SAVE_XPATH>"
