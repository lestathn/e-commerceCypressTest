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
describe('Checking Search', () => {
   
   it('Search a product', () => {   
     cy.get('input[id="search_query_top"]')
     .type('Short{enter}');
  
     cy.get('ul[class="product_list grid row"]')
     .contains('Short');

     cy.get('li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-item-of-tablet-line"]')
     .contains('Short');

     cy.get('li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-in-line first-item-of-tablet-line last-item-of-mobile-line"]')
     .contains('Short');     
   })
      
   it('Order by function', () => {
       cy.get('select[id="selectProductSort"]')
       .select('Price: Lowest first');
   })
  
   it('Quick View', () => {
       cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.quick-view')
       .click({force: true});
       cy.wait(1000);
       cy.get('div[class="pb-center-column col-xs-12 col-sm-4"]');

   }) 
    
})