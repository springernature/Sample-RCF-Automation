# Sample-RCF-AutomationSetup for the RCF Automation Project with TestCafe and Cucumber

Create Project folder for example testcafe-cucmber
Install visual studio source code editor from the following link
https://code.visualstudio.com/download
Open the folder testcafe-cucumber in visual studio code and open the terminal
From the terminal go in tho the project folder testcafe-cucumber and type the command 
npm init --yes and create the package.json file
Install NodeJS using the command npm install( which will add all node modules to your project)
In the terminal type node -v and press enter
If you see the version of NodeJS you installed then NodeJS has installed correctly
If you encounter an error please install NodeJS again
From the the terminal to install testcafe type npm install -g testcafe 
Install cucumber-testcafe steps and also gherkin-testcafe in order to integrate testcafe-with cucumber.
Install the cucumber-html reports - npm install cucumber-html-reporter --save-dev
Now go to package.json file and see there should be all the dependencies displayed under dependencies and devdependencies.
Setup the framework for the project
Crate folder such as “Features” which will have all the feature files stored in it
Create Support Folder under feature file which has all the js files for hooks and the errorhandling files.
Under the support folder create the pages folder to store all the page related functions and also the selectores for that particular page.
Under the support folder we have another 2 files namely testControllerHolder.js and world.js which will have the code to control the test execution and also take screenshots whenever error occurs while executing the test and save the screen shots in the screenshots folder.
Create the step_definitions folder under features and add the step definitions code for the scenarios in the feature file  
Add index.js file in the root folder to convert the json report to Html pi chart report
Run the following command :  ./node_modules/cucumber/bin/cucumber-js --format json:./reports/report.json
from the terminal to execute the scenarios and the report  will be saved in the form of json file under reports
Run “node index.js” file to convert the json file to html report
     
  
