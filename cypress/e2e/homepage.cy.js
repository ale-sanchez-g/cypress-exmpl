describe('Home page go to Login', () => {
  it('Navigate to login', () => {
    cy.viewport('macbook-15') // Set viewport to 375px x 667px
    cy.visit('https://farmbot.com.au/')
    cy.contains('About').click();
    cy.get('.intercom-launcher').click();
  })
})