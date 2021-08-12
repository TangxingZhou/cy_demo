// require("mocha-allure-reporter");
// const testDescription = allure.description("hello");

describe('My First Test', () => {
    // const testStep = allure.createStep("initial", () => {
    //     console.log('123');
    // });

    it('login hive console', () => {
        cy.allure().severity('critical');
        // cy.task('allureTestStep');
        // console.log(typeof(allure));
        // testDescription()
        // testStep();
        cy.allure()
        cy.visit('/');
        cy.get('div[class=username] input').type('xxx');
        cy.get('div[class=password] input').type('xxx');
        cy.get('button[class*=submit]').click();
    //   cy.contains('type').click()
    })
  })