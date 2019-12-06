describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with dashboard page', () => {
      cy.visit('/');
      cy.get('[data-cy=create]').should('contain', 'Create New Event');
    });

    it ('show filtering page after creating event', () => {
      cy.visit('/');
      cy.get('[data-cy=create').click();
      cy.get('[data-cy=recommendation').should('contain', 'Get Your Recommendations');
    });
  });