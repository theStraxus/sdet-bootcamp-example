class HomePage {

    visit() {
        cy.visit('https://www.saucedemo.com')
        return this
    }

    loginAs(username, password) {
        cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
    }

    stamp(){
        // stamping my passport for this visit!
    }
}

export default HomePage