#This Repo contains -

##Automation Test SLB
Cypress folder containing cypress Automation test
Automation script can be run via Github action, Steps are mentioned below.
Test will run on different browsers- Chrome, Electron, Edge.
Post Test result link will be found at the end of 'Cypress step' in Git Hub Action.

## Project description:
  #### Project is based on cypress (Using Javascript) and integrated Chai and mocha.
  #### feature files are kept in - '''SLBTesting/cypress/e2e/SLB*.feature'''
  #### Following cases has been Automated :
      1. OpenSite.feature       - Validation of text Header.
      2. Signin.feature        - Verify Login successfully.
      3. signout.feature       - Verify signup fail with already registered mail id.
  
## To Run Test via github action
1. Go To 'Actions' tab on Github Repo -
2. Go to (Click) on 'Scriveqa Cypress Tests' on Workflows (Left Side)
3. Click on 'Run Workflow' (on right side on portal)
4. Again click on 'Run workflow' button to trigger the TestCase
5. It may take few seconds, to reflect new run
6. Click on latest run

## To Set Up and Run Locally 
   Prerequisite - Node JS (Verify using --> node -v)

1. Clone the project
2. Go to Project folder using
   Run ```cd <folder name>```
3. On Terminal 
   Run ```npm install```
4. Run ```npx cypress open```
5. A cypress client will open up. Click on E2E Testing
6. Click on browser of choice (say Chrome)
7. 'Start E2E Testing in Chrome'
8. In Browser, Specs You can see Specs (feature) files
9. Click and Run the specs
