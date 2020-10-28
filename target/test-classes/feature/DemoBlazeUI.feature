Feature: To validate DemoBlaze Website by adding sony viao and dell products

  Background: 
    Given user logins to DemoBlaze webpage

  @UI
  Scenario: To validate Functionality by adding sony viao and dell products to cart
    When user adds "Sony vaio i5" to the cart
    And user navigates back to Home screen
    And user adds "Dell i7 8gb" to the cart
    And user navigate back to cart screen
    And user delete item from "1" row and "4" column
    And user click on "Place Order" button
    And user save total amount
    And user fill the user form using
      | Demo   |
      | India     |
      | Delhi     |
      | 345678901 |
      |        12 |
      |      2020 |
    And user click on "Purchase" button  
    Then user capture LogId and assert total amount
    And user click on "OK" button
