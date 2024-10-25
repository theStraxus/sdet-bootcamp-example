class CheckoutPage {

    checkoutOrder(firstname, lastname, zipcode) {
        /**
         * TODO: implement the method so that it actually fills the form and completes the order.
         */
        cy.get('input#first-name').type(firstname)
        cy.get('input#last-name').type(lastname)
        cy.get('input#postal-code').type(zipcode)

        cy.get('input#continue').click()
        cy.get('button#finish').click()


    }
}

export default CheckoutPage