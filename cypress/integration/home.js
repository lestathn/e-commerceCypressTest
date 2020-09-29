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
describe('Account Activity tab', () => {
 
   it('Check Search Bar', () => {   
     
      cy.get('input[class="search_query form-control ac_input"]')
      .type('Short');
      cy.get('button[class="btn btn-default button-search"]').click();


   })

    
   it('Check Tabs Element', () => {   
     cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]')
      .children()
      .should('contain', 'Women')
      .should('contain', 'Dresses')
      .should('contain', 'T-shirts');

   })

   it('Check Carousel', () => {
      cy.get('a[class="home"]').click();
      cy.get('a[class="bx-next"]').click();
      cy.get('button[class="btn btn-default"]')
      .contains('Shop now');
   })

   it('Check Popular Tab', () => {
      cy.get('li[class="active"]')
      .contains("Popular");
      cy.get('ul[id="homefeatured"]');
  
   })

   it('Check Banners Tab', () => {
      cy.get('div[id="htmlcontent_home"]').find('img')
      .should('have.attr', 'src')
      .should('include','banner-img1.jpg');
   })
 
   

    
})