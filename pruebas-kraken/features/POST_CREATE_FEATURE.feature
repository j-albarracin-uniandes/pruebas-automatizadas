Feature: Crear POST con nombre largo

@user4 @web
Scenario: Como un usuario inicio sesión y creo un post y lo agrego como featured
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "POST Featured" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I set text "Hey post has sido creado" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<OPEN_SETTINGS_CLASS>"
    Then I click element with xpath "<POST_FEATURED_LABEL>"
    And I wait for 5 seconds
