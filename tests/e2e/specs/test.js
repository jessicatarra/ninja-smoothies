// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Editing Smoothie Ingredientes', () => {
    cy.visit('/')
    cy.get('.index > :nth-child(1) > .btn-floating').click()
    cy.get('.add-ingredient > input').type('coffee')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('cinnamon')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('more coffee please')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get(':nth-child(3) > .material-icons').click()


    cy.get('.btn').click()
  });

  it('Editing Smoothie Ingredientes #2', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > .btn-floating').click()
    cy.get('.add-ingredient > input').type('apple')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('orange juice')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('kiwi')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get(':nth-child(3) > .material-icons').click()


    cy.get('.btn').click()
  });

  it('Adding Smoothie', () => {
    cy.visit('/')
    cy.get('.nav-content > .btn-floating > a > .material-icons').click()
    cy.get('.title > input').type('Power Greens')
    cy.get('.add-ingredient > input').type('Spinachs')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('bananas')
    cy.get('.add-ingredient > .material-icons').click()
    cy.get('.add-ingredient > input').type('almond milk')
    cy.get('.add-ingredient > .material-icons').click()


    cy.get('.btn').click()
  });

  it('Delete a Smoothie', () => {
    cy.visit('/')
    cy.get(':nth-child(2) > .card-content > .material-icons').click()
  })
})