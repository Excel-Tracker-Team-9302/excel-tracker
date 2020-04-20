# Excel Tracker Front End Application: Team 9302

Web application aiding in the tracking of the Georgia Tech Excel Program's competency metrics. The application is built using the ReactJS framework. Additionally, many UI elements are created using the [Material UI library](https://material-ui.com/). Please see the detailed design document for more information regarding the application's architecture. 

## Release Notes (v. 1.0)

### New Features
   * Add ability to complete evaluations from the tracking locations page
   * Restyle the evaluations page to make formatting more clear
   * Add field for authorization token in redux that will be set on login
   * Add ability to filter through the Competencies on the Competency Page

### Bug Fixes
   * Increased size of general comments box on Evaluations page so the entire page was visible
   * Made some small changes to the dummy data to ensure it was consistently used across application

### Known Bugs
   * Currently all calls to the backend API are being rejected due to CORS issues
   * There is no access control based on user type (unable to log in a user due to CORS issue)
   * Due to lack of integration, there is no checks on pages to ensure user is properly authroized to view client (no check to ensure API key is still valid)
   * The current application only interacts with static data. Requests submitted to application will not be reflected in the AWS database.
   * Occasionally, navigating to the previous page using the browsers back arrow may cause the screen to appear blank. Refreshing the page or re-entering the url will usually resolve this issue.

## Install Guide

### Installation of Live Application
To use the live application, simply navigate to the application's url in a web browser (url is to be configured by the client after application handoff). No additional libraries or downloads should be necessary to interact with the system in its deployed state.

### Installation for Development
The following is a lsit of requirements for running the application from your localhost. This would be useful for development or debugging purposes for a future development team. It would also be useful to refernce the [general React guide](https://reactjs.org/docs/getting-started.html) to become more familiar with starting a React application.

#### PREREQUISITES 
You must have the following libraries installed in order to properly run the application on localhost.  
   * Node.js (see [Node Install Guide](https://nodejs.org/en/download/))  
   * npm (installed with Node.js)  
   * git (this is dependent on your platform, but is required to read and modify code on a GitHub repository)

#### DOWNLOAD/INSTALL
To download the repository on your computer, use the `git clone <repository_url>` to clone the repository onto a directory in your computer.

#### DEPENDENCIES
To download the necessary dependencies to run the application, navigate to the excel-tracker-application directory of the repository. Then execute the `npm install` command to automatically install the dependencies for the applicaiton.

#### RUNNING APPLICATION
To run the application, execute the `npm start` command from the excel-tracker-application directory. This will start the application on localhost endpoint on your computer. Navigate to localhost in your browser with the provided port number to view the application (this is uaually opened by default when you run npm start).

#### TROUBLESHOOTING
##### The application says that no React Project is found when running 'npm run'.
   * Ensure that you are within the excel-tracker-application directory in the terminal before running the 'npm run' command

##### After running 'npm run' command, the terminal indicates that the necessary dependencies are not installed.
   * Your computer is missing the necessary packages that the application relies on to run. Run the 'npm install' within the same directory to install the necesssary packages automatically.
##### After navigating to the url in the web browser, the application is not properly displayed.
   * If running locally, ensure that you are navigating to the correct localhost port.
   * If trying to accessed the deployed applicaiton, ensure you are navigating to the proper url and that the application is properly deployed on AWS (see guide below)
##### The application is not changing the data within the AWS database.
   * The current application only interacts with static dummy data and therefore will not interact with the backend database.

## Deploying to AWS

### PREREQUISITES
   * Must have administrative access to this repository, and a member of the organization (Excel-Tracker-Team-9302). Contact an admin to get the permissions. 
   * An AWS account (Free tier ok)
   
### SETTING UP APPLICATION
In AWS navigate to AWS Amplify. Click Connect App and select Github under "From your existing code". Log in with Github credentials, and allow any permissions that are requested. At "Add repository branch" screen, select Excel-Tracker-Team-9302/excel-tracker and master branch. 

#### If the repository does not show up:
  * Go to github.com, go to setting, applications, then Authorized OAuth Apps, AWS Amplify, and make sure the organization is selected
  * Go to github and make a commit, and this may allow the repository to show up.

#### If the repository is not selectable:
  * Make sure you are a member of the organization (Excel-Tracker-Team-9302) and an admin for the repo (have admin on repo page select settings, Manage Access, and find name to change access)

Under build settings, you can leave the app name default. Under build and test settings, replace with: 

```
version: 0.1
frontend:
  phases:
    preBuild:
      commands:
        - cd excel-tracker-application
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: excel-tracker-application/build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Click Next, and Save and Deploy. The app should begin to build.

### MAINTAINING  APPLICATION
When new changes are made to the master branch through Github, the site should automatically redeploy the site without having to touch it. You can deploy sites for any branch that you wish. 

#




