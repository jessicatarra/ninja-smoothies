// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Editing Smoothie Ingredientes', () => {
    cy.visit('/')
    cy.get('.index > :nth-child(1) > .btn-floating').click()
    cy.get('.add-ingredient > input').type('coffee')
  })
})
