@radio @viewer @item
Feature: Item Based Radio interactions

  @RCF-6342
  Scenario: Loading item based radio interactions
  Given I open the RCF Viewer on activity page
  Then I click on item 1 in activity page

 @RCF-6342
  Scenario: Checking that an Item Radio list is compatible with roman horizontal ordered lists
    Given I open the RCF Viewer on activity page
    Then I click next item 4 times
    Then roman horizontal ordered lists should be displayed
  