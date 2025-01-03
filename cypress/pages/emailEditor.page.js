class EmailEditorPage {
    constructor() {
      this.url = 'react-email-editor-demo.netlify.app/';
    }
  
    visit() {
      cy.visit(this.url);
      return this;
    }
  
    clickExportButton() {
      cy.fixture('selectors').then(selectors => {
        cy.get(selectors.exportButton).click();
      });
      return this;
    }
  
    selectMacBookTemplate() {
      cy.getIframeBody().then($body => {
        cy.wrap($body).contains('MacBook Pro').click({ force: true });
      });
      return this;
    }
  
    clickH2Icon() {
      cy.fixture('selectors').then(selectors => {
        cy.getIframeBody().find(selectors.h2Icon)
          .should('be.visible')
          .click({ force: true });
      });
      return this;
    }
  
    selectFontFamily() {
      cy.fixture('selectors').then(selectors => {
        cy.getIframeBody().find(selectors.fontFamilyDropdown)
          .should('be.visible')
          .click({ force: true });
        
        cy.getIframeBody().find(selectors.arialBlackOption)
          .should('be.visible')
          .click({ force: true });
      });
      return this;
    }
  
    selectFontStyle() {
      cy.fixture('selectors').then(selectors => {
        cy.getIframeBody().find(selectors.fontStyleDropdown)
          .should('be.visible')
          .click({ force: true });
        
        cy.getIframeBody().find(selectors.boldOption)
          .should('be.visible')
          .click({ force: true });
      });
      return this;
    }
  
    verifyExportHtmlConsoleLog() {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('verifyExportHtmlInConsole');
      });
      this.clickExportButton();
      cy.get('@verifyExportHtmlInConsole').should('be.calledWith', 'exportHtml');
      return this;
    }
  }
  
  export default new EmailEditorPage();