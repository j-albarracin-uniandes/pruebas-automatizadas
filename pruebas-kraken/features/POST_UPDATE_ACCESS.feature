Feature: Listar, Agregar, Actualizar y Publicar POST

@user8 @web
Scenario: Como un usuario inicio sesión cambio el acceso a un post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/tags/new"
    And I set text "TAG TEST" on element with xpath "<TAG_NAME_ID>"
    And I click element with xpath "<TAG_BTN_SAVE_ID>"
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    And I click element with xpath "<POST_ONLIST_CLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<OPEN_SETTINGS_CLASS>"
    And I wait for 1 seconds
    And I set text "<MEMBERS_POST_ACCESS>" on element with xpath "<POST_ACCESS_SELECT_XPATH>"
    Then I click element with xpath "<OPEN_SETTINGS_CLASS>"
    And I set text "POST ACCESS UPDATE" on element with xpath "<POST_TITLE_ECLASS>"
    Then I click element with xpath "<CONTENT_ECLASS>"
    And I wait for 5 seconds
