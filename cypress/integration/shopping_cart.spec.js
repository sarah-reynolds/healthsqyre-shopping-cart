beforeEach(() => {
  cy.restoreLocalStorageCache();
});

afterEach(() => {
  cy.saveLocalStorageCache();
});

describe('shopping cart tests', () => {
  it('loads the home page with a list of products', () => {
    cy.visit('localhost:3000')
    cy.get('.header').should('contain', 'List of Products')
  })
  it('adds two items to the cart', () => {
    cy.get('.productButton-1').click()
    cy.get('.productButton-3').click()
  }) 
  it('cart contains the two items and grand total', () => {
    cy.visit('localhost:3000/cart')
    cy.get('.cartItem-1').should('contain', 'AirSense 10 AutoSet for Her CPAP Machine')
    cy.get('.cartItem-3').should('contain', 'AirFit F20 Full Face CPAP Mask with Headgear')
    cy.get('.total').should('contain', '54')
  })
  it('clears the cart', () => {
    cy.visit('localhost:3000/cart')
    cy.get('.clearCart').click().click()
    cy.contains('Your cart is empty')
  }) 
})  