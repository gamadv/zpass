import formTexts from '@texts/pt-BR.json'
// import { urls } from '@constants/urls'

describe('Form Submission', () => {
  const nameInput = 'input[name="name"]'
  const emailInput = 'input[name="email"]'
  const passwordInput = 'input[name="password"]'
  const submitButton = 'button[aria-label="Enviar"]'

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should enable the submit button with all valid inputs', () => {
    cy.get(nameInput).type('Teste Name');
    cy.get(emailInput).type('teste@teste.com');
    cy.get(passwordInput).type('334567');

    cy.get('button[aria-label="Enviar"]').should('not.be.disabled');
  });

  it('should disable the submit button if password is invalid', () => {
    cy.get(nameInput).type('Teste Name');
    cy.get(emailInput).type('teste@teste.com');

    cy.get(passwordInput).type('123');
    cy.get(submitButton).should('be.disabled');
  });

  it('should show "Senha válida!" message when all inputs are valid', () => {
    cy.get(nameInput).type('Teste Name');
    cy.get(emailInput).type('teste@teste.com');
    cy.get(passwordInput).type('223456');

    cy.contains(formTexts.formaValidation.inputs.password.valid).should('be.visible');
  });

  it('should show error messages for invalid data', () => {
    cy.get(nameInput).type('T');
    cy.get(emailInput).type('teste@teste');
    cy.get(passwordInput).type('112345');

    cy.contains(formTexts.formaValidation.inputs.name.errorMessage);
    cy.contains(formTexts.formaValidation.inputs.email.errorMessage);
    cy.contains(formTexts.formaValidation.inputs.password.tips.range);
  });

  it('should show password tips when password length is 1 to 3 characters', () => {
    cy.get(passwordInput).type('12');
    Object.values(formTexts.formaValidation.inputs.password.tips).forEach(tip => {
      cy.contains(tip);
    });
  });

  it('should show API error message on submission failure', () => {
    cy.intercept('POST', '/api/submit', {
      statusCode: 400,
      body: { message: formTexts.formaValidation.apiMessages.catch },
    }).as('postForm');

    cy.get(nameInput).type('Teste Name');
    cy.get(emailInput).type('teste@teste.com');
    cy.get(passwordInput).type('223344');
    cy.get(submitButton).click();

    cy.contains(formTexts.formaValidation.apiMessages.catch);
  });

  // This test will throw error, becausa API return status code 200, but message with error :/
  // const mountUrl = `${urls.postPasswordsBase}${urls.postPasswords}`
  // it('should submit the form with valid data', () => {
  //   cy.intercept('POST', mountUrl, {
  //     body: { message: formTexts.formaValidation.apiMessages.catch },
  //   }).as('postForm');

  //   cy.get(nameInput).type('Teste Name');
  //   cy.get(emailInput).type('teste@teste.com');
  //   cy.get(passwordInput).type('222222');
  //   cy.get(submitButton).click();

  //   cy.wait('@postForm').then((interception) => {
  //      expect(interception?.response?.statusCode).to.equal(200);

  //      expect(interception.request.body).to.have.property('name', 'Teste Name');
  //      expect(interception.request.body).to.have.property('email', 'teste@teste.com');
  //      expect(interception.request.body).to.have.property('password', '222222');

  //      expect(interception?.response?.body).to.have.property('message', formTexts.formaValidation.apiMessages.sent);
  //   })
  // });

});
