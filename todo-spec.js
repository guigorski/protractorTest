describe('GIVEN I am at NodeJS home page', function() {
  it('WHEN I click on docs link', function() {
    let expectedConditions = protractor.ExpectedConditions;

    browser.waitForAngularEnabled(false)
    browser.get('https://nodejs.org/en/');
    
    let docsLink = element(By.css('a[href="/en/docs/"]'));
    let guidesLink = element(By.css('a[href="/en/docs/guides/"]'));
    let gettinStartedLink = element(By.css('a[href="/en/docs/guides/getting-started-guide/"]'));
    
      //WHEN I click on docs link at home page
    docsLink.click();
      //AND click on guides link at docs page
    guidesLink.click();
      //AND I click on Getting Started link at guides page
    gettinStartedLink.click();
      //THEN I should see a JavaScript code in the page
    expect(expectedConditions.visibilityOf($('pre[class="language-javascript"]')), 5000);
  });
});


 

