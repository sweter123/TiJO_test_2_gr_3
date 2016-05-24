Feature: ng-repeat and $index, $event, $log

  Scenario: On application start
    When I browse to the "/"
    Then I should see "Middle" in "middleButton"
    And I should see "Warning..." in "warningAlert"
    And I enter "Test" into "input" field
    And I should see "Gr 3" in "header"
