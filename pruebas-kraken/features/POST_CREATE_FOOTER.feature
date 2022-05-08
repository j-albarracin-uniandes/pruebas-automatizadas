Feature: Crear POST

@user4 @web
Scenario: Como un usuario inicio sesión y creo un post con footer html
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "POST con FOOTER" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I set text "Hey post has sido creado" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<OPEN_SETTINGS_CLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CODE_INJ_BUTTON>"
    And I wait for 3 seconds
    And I set text "<HTML_TEXT_FOOTER>" on element with xpath "<CODE_INJ_TEXT>"
    And I wait for 1 seconds
