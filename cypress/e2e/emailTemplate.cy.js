import EmailEditorPage from '../pages/emailEditor.page';

describe('Email Template Creation', () => {
  beforeEach(() => {
    EmailEditorPage.visit();
  });

  it('should create and export email template with custom styling', () => {
    EmailEditorPage
      .clickExportButton()
      .selectMacBookTemplate()
      .clickH2Icon()
      .selectFontFamily()
      .selectFontStyle()
      .verifyExportHtmlConsoleLog();
  });
});