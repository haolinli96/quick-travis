describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with dashboard page', () => {
       cy.visit('/');
       cy.get('[data-cy=create]').should('contain', 'Create New Event');
    });
  });