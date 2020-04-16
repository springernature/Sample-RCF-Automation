# Sample-RCF-Automation# Sample-RCF-AutomationSetup for the RCF Automation Project with TestCafe and Cucumber

1. Create Project folder for example testcafe-cucmber

2. Install visual studio source code editor from the following link

3. https://code.visualstudio.com/download

4. Open the folder testcafe-cucumber in visual studio code and open the terminal
   From the terminal go in tho the project folder testcafe-cucumber and type the command 
   npm init --yes and create the package.json file

5. Install NodeJS using the command npm install( which will add all node modules to your project)
In the terminal type node -v and press enter

6.If you see the version of NodeJS you installed then NodeJS has installed correctly.

7. If you encounter an error please install NodeJS again

8. From the the terminal to install testcafe type npm install -g testcafe 

9. Install cucumber-testcafe steps and also gherkin-testcafe in order to integrate testcafe-with cucumber.

10. Install the cucumber-html reports - npm install cucumber-html-reporter --save-dev

11. Now go to package.json file and see there should be all the dependencies displayed under dependencies and devdependencies.

Setup the framework for the project

1. Crate folder such as “Features” which will have all the feature files stored in it.

2. Create Support Folder under feature file which has all the js files for hooks and the errorhandling files.

3  Under the support folder create the pages folder to store all the page related functions and also the selectores for that particular page.

4. Under the support folder we have another 2 files namely testControllerHolder.js and world.js which will have the code to control the test execution and also take screenshots

5. Whenever error occurs while executing the test and save the screen shots in the screenshots folder.

6. Create the step_definitions folder under features and add the step definitions code for the scenarios in the feature file.

7. Add index.js file in the root folder to convert the json report to Html pi chart report.

8. Run the following command :  ./node_modules/cucumber/bin/cucumber-js --format json:./reports/report.json

9. From the terminal to execute the scenarios and the report  will be saved in the form of json file under reports

10. Run “node index.js” file to convert the json file to html report
     
  
