before(() => {  
    cy.clearCookies()       
    cy.visit('/');
    cy.get('form');

  })
    
beforeEach(()=>{
   Cypress.Cookies.defaults({
      preserve: 'session_id'
   })
})

describe('Checking the Cart', () => {

    it('Add to Cart', () => {
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
        .click({force: true});
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span')
        .click();
        cy.get('span[class="ajax_cart_quantity unvisible"]')
        .contains('1');
        cy.get('a[href="#blockbestsellers"]')
        .click();
        cy.get('#blockbestsellers > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
        .click({force: true});
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span')
        .click();
        cy.get('span[class="ajax_cart_quantity unvisible"]')
        .contains('2');      
        
    })

    it('Remove from the Cart', () => {
        cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div > div > dl > dt.first_item > span > a')
        .click({force: true});
        cy.setCookie('usernnbTotalProducts','1');
        cy.get('span[class="ajax_cart_quantity unvisible"]')
        .contains('2');  
    })
})