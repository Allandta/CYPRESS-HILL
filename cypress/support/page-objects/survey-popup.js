class SurveyPopup {
  closeSurveyPopupIfPresent() {
    cy.get('button[aria-label="Hide survey"]').then($btn => {
      if ($btn.length) {
        cy.wrap($btn).click({ force: true });
      }
    });
  }
}

export default new SurveyPopup();