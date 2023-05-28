describe('Phone book app', function () {
  beforeEach(function () {
    cy.request('DELETE', 'http://localhost:3001/delete-test-person');
    cy.visit('http://localhost:3001');
  });

  it('front page can be opened', function () {
    cy.contains('Phone book');
  });

  it('new number can be added', function () {
    cy.get('#name').type('Matti Meikäläinen');
    cy.get('#number').type('040-112233');
    cy.get('#add-number-btn').click();
    cy.contains('Added Matti Meikäläinen');
  });
});
