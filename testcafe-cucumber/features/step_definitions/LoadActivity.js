const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const ActivityPage = require('../support/pages/Activity-page');

Given(/^I open the RCF Viewer on activity page$/, async function() {
  await testController.navigateTo(ActivityPage.activity.url());    
});

Then(/^I click on item 1 in activity page$/, async function() {
    await testController.click(ActivityPage.activity.clickOnItemLink());
});

Then(/^I click next item 4 times$/, async function() {
  for(let i=0;i<=3;i++){
  await testController.click(ActivityPage.activity.clickOnNextItem());
  }
});

Then(/^roman horizontal ordered lists should be displayed$/, async function() {
  await testController.click(ActivityPage.activity.isThereRomanHorizontalOrderedList());

});



