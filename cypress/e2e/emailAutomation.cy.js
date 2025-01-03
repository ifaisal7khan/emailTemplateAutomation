describe('First Cypress Test', () => {
  it('emailTemplateCreation', function () {
    cy.visit('react-email-editor-demo.netlify.app/');
    cy.get('.sc-gswNZR > :nth-child(4)').click();
    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        cy.wrap(doc)
          .should('exist')
          .find('body')
          .contains('MacBook Pro')
          .click({ force: true });
      });
    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        cy.wrap(doc)
          .find('svg[data-icon="h2"]')
          .should('be.visible')
          .click({ force: true });
      });
    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;

        cy.wrap(doc)
          .find('button[role="combobox"][aria-controls=":r27:"]')
          .should('be.visible')
          .click({ force: true });
      });

    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        cy.wrap(doc)
          .find('div[role="option"]')
          .contains('Arial Black')
          .should('be.visible')
          .click({ force: true });
      });

    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;

        cy.wrap(doc)
          .find('button[role="combobox"][aria-controls=":r4u:"]')
          .should('be.visible')
          .click({ force: true });
      });

    cy.get('iframe')
      .should('be.visible')
      .then(($iframe) => {
        const doc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;
        cy.wrap(doc)
          .find('div#\\:r54\\:[role="option"]')
          .should('be.visible')
          .click({ force: true });
      });

    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('verifyExportHtmlInConsole');
    });
    cy.get('.sc-gswNZR > :nth-child(4)').click();
    cy.get('@verifyExportHtmlInConsole').should('be.calledWith', 'exportHtml');
  });
});
