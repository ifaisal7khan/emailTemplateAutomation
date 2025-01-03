// Add these custom commands to handle iframes
Cypress.Commands.add('getIframeDocument', () => {
    return cy
      .get('iframe')
      .should('be.visible')
      .then($iframe => {
        return $iframe[0].contentDocument || $iframe[0].contentWindow.document;
      });
  });
  
  Cypress.Commands.add('getIframeBody', () => {
    return cy.getIframeDocument().then(doc => {
      return cy.wrap(doc.body);
    });
  });