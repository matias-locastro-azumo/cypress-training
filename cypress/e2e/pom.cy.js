import {LoginPage} from "../e2e/pages/login_page"

const loginPage = new LoginPage()

it('Login test Happy path', async () => {

    await cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
})

it('Login with invalid username', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin123ABC')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    loginPage.validate_invalid_credentials()

})

it('Login with invalid password', async () => {

    await cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123!@#')
    loginPage.clickLogin()
    loginPage.validate_invalid_credentials()

})