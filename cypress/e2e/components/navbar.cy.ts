describe('Navbar Component spec', () => {
  beforeEach(() => {
    cy.visit('./'); // visit home page
  })

  it('should open sidebar', () => {
    // Click menu icon button
    cy.get('.MuiButtonBase-root').click(); // Open the menu
  });
})