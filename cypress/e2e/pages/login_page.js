export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input' //input[@name="username"]
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input' //input[@name="password"]
    login_button = '.oxd-button'                                                       //button[text()=" Login "]
    invalid_credentials_alert = '.oxd-alert-content > .oxd-text'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }

    validate_invalid_credentials(){
        cy.get(this.invalid_credentials_alert)
        .should('be.visible')
    }

}