import 'cypress-file-upload';

before(() => {  
    cy.clearCookies()       
    cy.visit('/');
    cy.get('form');

  })
    
beforeEach(()=>{
   Cypress.Cookies.defaults({
      whitelist: 'session_id'
   })
})

describe('Contact Form', () => {
    it('Go to Contact from', () => {
        cy.get('div[id="contact-link"]').click();
        cy.get('h1[class="page-heading bottom-indent"]')
        .contains('Customer service');    
    })

    it('Validate all input empty', () => {
        cy.get('button[id="submitMessage"]').click();
        cy.get('div[class="alert alert-danger"]')
        .contains('There is 1 error');
    })

    it('Validate Subject Heading selected', () => {
        cy.reload();
        cy.get('select[id="id_contact"]')
        .select('Webmaster');
        cy.get('p[id="desc_contact1"]')
        .contains('If a technical problem occurs on this website');
        cy.get('button[id="submitMessage"]').click();
        cy.get('div[class="alert alert-danger"]')
        .contains('There is 1 error');
    })

    it('Validate Subject and emailAdress input fill', () => {
        cy.reload();
        cy.get('select[id="id_contact"]')
        .select('Webmaster');
        cy.get('input[class="form-control grey validate"]')
        .type('eldergodoy54@gmal.com');
        cy.get('button[id="submitMessage"]').click();
        cy.get('div[class="alert alert-danger"]')
        .contains('There is 1 error');
    })

    it('Validate Subject, emailAdress and Description input fill', () => {
        cy.reload();
        cy.get('select[id="id_contact"]')
        .select('Webmaster');
        cy.get('input[class="form-control grey validate"]')
        .clear()
        .type('eldergodoy54@gmal.com');        
        cy.get('textarea[class="form-control"]')
        .type('Testing the Description input');
        cy.get('button[id="submitMessage"]').click();
        cy.get('div[class="alert alert-danger"]')
        .contains('There is 1 error');
    })

    it('Validate without attach file', () => {
        cy.reload();
        cy.get('select[id="id_contact"]')
        .select('Webmaster');
        cy.get('input[class="form-control grey validate"]')
        .clear()
        .type('eldergodoy54@gmal.com');        
        cy.get('textarea[class="form-control"]')
        .type('Testing the Description input');
        cy.get('input[class="form-control grey"]')
        .type('1234')
        cy.get('button[id="submitMessage"]').click();
        cy.get('div[class="alert alert-danger"]')
        .contains('There is 1 error');
    })

    it('Validate all inputs filled', () => {
        cy.reload();
        cy.get('select[id="id_contact"]')
        .select('Webmaster');
        cy.get('input[class="form-control grey validate"]')
        .clear()
        .type('eldergodoy54@gmal.com');        
        cy.get('textarea[class="form-control"]')
        .type('Testing the Description input');
        cy.get('input[class="form-control grey"]')
        .type('1234');

        cy.fixture('testPicture.png').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'testPicture.png',
                mimeType: 'image/png'
            });
        });

        cy.get('button[id="submitMessage"]').click();
        cy.get('p[class="alert alert-success"]')
        .contains('Your message has been successfully');
    })

})