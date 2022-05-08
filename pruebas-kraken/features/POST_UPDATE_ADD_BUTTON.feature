Feature: Modificar POST 

@user6 @web
Scenario: Como un usuario inicio sesión y edito un post agrego un botón
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "POST con Imágen para ACTUALIZAR CON BOTÓN" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I click element with xpath "<ADD_IMAGE_ECLASS>"
    And I wait for 5 seconds
    And I click element with xpath "<INSERT_IMAGE_ECLASS>"
    And I wait for 5 seconds
    And I set text "Hey post has sido creado" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    And I click element with xpath "<POST_ONLIST_CLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<PLUS_ADD_ECLASS>"
    And I wait for 2 seconds
    Then I click element with xpath "<ADD_BUTTON_XPATH>"
    And I wait for 3 seconds
    And I set text "Botón Actualizado" on element with xpath "<ADD_BUTTON_TEXT_XPATH>"
    And I wait for 1 seconds
    And I set text "<YOUTUBE_LINK>" on element with xpath "<ADD_BUTTON_URL_XPATH>"
    And I wait for 1 seconds
    And I set text "POST ACTUALIZADO" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And I wait for 3 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
