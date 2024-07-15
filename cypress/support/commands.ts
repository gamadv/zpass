// cypress/support/commands.ts
  // Para suportar o TypeScript
  declare global {
    namespace Cypress {
      interface Chainable {
        login(email: string, password: string): Chainable<void>;
      }
    }
  }
