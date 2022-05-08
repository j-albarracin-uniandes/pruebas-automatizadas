Feature: Actualizar POST

@user9 @web
Scenario: Como un usuario inicio sesión y edito un post con un imagen y texto
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "POST con Imágen para ACTUALIZAR" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I set text "Hey post has sido creado" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 5 seconds
    Then I navigate to page "http://localhost:2368/ghost/#/posts"
    And I click element with xpath "<POST_ONLIST_CLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I set text "Hey post has sido actualizado" on element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<PLUS_ADD_ECLASS>"
    And I wait for 2 seconds
    Then I click element with xpath "<UNSPLASH_XPATH>"
    And I wait for 3 seconds
    And I click element with xpath "<INSERT_IMAGE_ECLASS>"
    And I wait for 3 seconds
    And I set text "POST ACTUALIZADO" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 5 seconds
