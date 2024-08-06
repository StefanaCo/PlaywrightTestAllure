Feature: Ecommerce validation
  @Test
  Scenario: Placing the order
    Given login to Ecommerce application
    When add "ZARA COAT 3" to cart
    Then verify "ZARA COAT 3" is displayed in the cart
    When enter valid details and place the order
    Then verify order is present in the order history