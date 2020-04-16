const {Selector} = require('testcafe');

 //Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.activity = {
    url: function() {
        return 'http://localhost:8888/rcf/viewer/index.php#/L0/U001/AS03';
       
    },
    
    clickOnItemLink: function() {
        return Selector('a.navActivityItem.ng-binding').with({boundTestRun: testController});
    },

    clickOnNextItem: function(){
        return Selector('.next>a>img').with({boundTestRun: testController})
    }  , 
        
    isThereRomanHorizontalOrderedList : function(){
    const list    = Selector('div.itemBasedItem.active ol.roman.horizontal.itemRadioList').child().count
    if(list.count>0){
        return true;
    }
    
    }


};
