/// <reference types="cypress" />

it('Read files using fixture', () => {
    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
    })

})


it('Read file using read file()', ()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data =>{
        cy.log(data.name)
        
    }))
})

it('Write file demo', ()=>{
    cy.writeFile('sample.txt', 'This is a test\n', {flag: 'a+'})
})