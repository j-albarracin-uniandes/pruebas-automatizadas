Feature: Publicar POST

@user6 @web
Scenario: Como un usuario inicio sesión y edito un post agrego una imagen y publico en el futuro
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    And I wait for 1 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post"
    And I wait for 1 seconds
    And I set text "POST Schedule it for later" on element with xpath "<POST_TITLE_ECLASS>"
    And I wait for 1 seconds
    And I click element with xpath "<ADD_IMAGE_ECLASS>"
    And I wait for 5 seconds
    And I click element with xpath "<INSERT_IMAGE_ECLASS>"
    And I wait for 5 seconds
    And I set text "Hey post has sido creado" on element with xpath "<CONTENT_ECLASS>"
    And I wait for 5 seconds
    Then I click element with xpath "<PUBLISH_MODAL_XPATH>"
    Then I click element with xpath "<PUBLISH_SCHEDULE_BUTTON_XPATH>"
    And I set text "<PUBLISH_SCHEDULE_DATE>" on element with xpath "<PUBLISH_SCHEDULE_INPUT_XPATH>"
    And I wait for 5 seconds
    Then I click element with xpath "<PUBLISH_BUTTON_XPATH>"
    Then I click element with xpath "<PUBLISH_CONFIRMATION_BUTTON_XPATH>"
    And I wait for 3 seconds
    Then I click element with xpath "<CONTENT_ECLASS>"
