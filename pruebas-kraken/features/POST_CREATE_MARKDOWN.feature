Feature: Crear POST

@user5 @web
Scenario: Como un usuario inicio sesión y creo un post con video de youtube
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "Post with Markdown - Amo las listas" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
    And Enter on element with xpath "<CONTENT_ECLASS>"
    And I wait for 1 seconds
    Then I click element with xpath "<PLUS_ADD_ECLASS>"
    And I wait for 2 seconds
    Then I click element with xpath "<POST_MARKDOWN>"
    And I wait for 3 seconds


    Then I click element with xpath "<POST_MARKDOWN_ASTERISK>"

    And I wait for 1 seconds
    And I set text "Son fáciles de leer" on element with xpath "<POST_MARKDOWN_CONTENT>"
    And Enter on element with xpath "<POST_MARKDOWN_CONTENT>"
    And I set text "Sin ordenadas" on element with xpath "<POST_MARKDOWN_CONTENT>"
    And Enter on element with xpath "<POST_MARKDOWN_CONTENT>"
    And I set text "Ayudan a dormir mejor" on element with xpath "<POST_MARKDOWN_CONTENT>"
    And Enter on element with xpath "<POST_MARKDOWN_CONTENT>"
    And Enter on element with xpath "<POST_MARKDOWN_CONTENT>"

    And I wait for 10 seconds
