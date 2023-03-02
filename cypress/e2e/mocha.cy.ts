describe('mocha example', () => {

    before(() => {
        cy.log('Hello from the before hook!')
    })

    after(() => {
        cy.log('Hello from the after hook!')
    })

    beforeEach(() => {
        cy.log('Hello from the before each hook!')
    })

    afterEach(() => {
        cy.log('Hello from the after each hook!')
    })

    it('testcase #1', () => {
        cy.log('Hello World! #1')
    })
    it.only('testecase #2', () => {
        cy.log('Hello World! #2')
    })
    it.skip('testcase #3', () => {
        cy.log('Hello World! #3')
    })
    it('testcase #4', () => {
        cy.log('Hello World! #3')
    })
  })