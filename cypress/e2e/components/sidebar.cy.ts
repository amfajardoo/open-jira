describe('Sidebar Component spec', () => {
  beforeEach(() => {
    cy.visit('./'); // visit home page
  })
  
  it('should close sidebar', () => {
    // Click menu icon button
    cy.get('.MuiButtonBase-root').click(); // Open the menu
    // Click outside the menu
    cy.get('.MuiBackdrop-root').click(); // Close the menu
  })
})