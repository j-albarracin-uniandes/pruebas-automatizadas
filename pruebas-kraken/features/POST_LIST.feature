Feature: Listar POST

@user1 @web
Scenario: Como un usuario inicio sesión y listo los post filtrados por "Drafts", "Sheduled","Published"
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=draft"
    And I wait for 2 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=scheduled"
    And I wait for 2 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
    And I wait for 2 seconds


@user2 @web
Scenario: Como un usuario inicio sesión y listo los post filtrados por "Featured posts"
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    Given I navigate to page "http://localhost:2368/ghost/#/posts?type=featured"
    And I wait for 2 seconds


@user3 @web
Scenario: Como un usuario inicio sesión y listo los post ordenados por "oldest"
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 1 seconds
    And I set text "<USERNAME>" on element with xpath "<USERNAME_EID>"
    And I set text "<PASSWORD>" on element with xpath "<PASSWORD_EID>"
    And I wait for 1 seconds
    Then I click element with xpath "<BTN_SIGNIN_EID>"
    Given I navigate to page "http://localhost:2368/ghost/#/posts?order=published_at%20asc"
    And I wait for 2 seconds
