describe('example to-do app', () => {
    it('login success', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        cy.get('#email').type('aula.lajupeduli@gmail.com')
        cy.get('#pass').type('Auls123!')
        cy.get('#send2').click
    })
    it('login failed - invalid email', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        cy.get('#email').type('auls.lajupeduli@gmail.com')
        cy.get('#pass').type('Auls123!')
        cy.get('#send2').click
    })
    it('login failed - empty password', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        cy.get('#email').type('aula.lajupeduli@gmail.com')
        cy.get('#pass').type('')
        cy.get('#send2').click
    })
    it('login failed - empty email and password', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        cy.get('#email').type('')
        cy.get('#pass').type('')
        cy.get('#send2').click
    })
})