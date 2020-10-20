Feature: Google
  So I can begin an internet search
  As a user
  I want a landing page that is obviously a search page

  Scenario: Home page title displays "Google" (expected to pass)
    When I visit the "Home" page
    Then I should see "Google" in the title

  Scenario: Home page title displays "Bing" (expected to fail assertion)
    When I visit the "Home" page
    Then I should see "Bing" in the title

  Scenario: Account page title displays "Account" (expected to fail on mapping)
    When I visit the "Account" page
    Then I should see "Account" in the title
