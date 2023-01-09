link to deployed live version : https://wsdproject1projectapp.herokuapp.com/projects



User guide
===============

If you wish to test the live version you can visit the link on
line 1 of this file.

Using the app locally 
---------------

To use the app locally, connect the app to your database 
so that the variable titled "pool" in the database.js file connects to your own database.
For the app to function, your database has to have the tables specified on the project handout 
at: "https://wsd.cs.aalto.fi/10-course-project-i/1-project-handout/"

After connecting to your database use the following command in your command line/terminal :
"deno run --allow-net --allow-read --unstable app.js" or any other command that allows launching the app.
And go to "http://localhost:7777/" in your browser. 
You can also change the port if you wish to do so.

The application is intuitive to use and navigating it should be simple enough
to do without specific instructions.

For more details on the app and its functionality
refer to the section below.



Overview of the application
===============

The application is a simple project management app
where you can add and remove projects and add and remove
issues for a specific project. 

Accesing the main page redirects the user to /projects.

Main page functionality
---------------

This page has a form which allows the user to create 
new projects with a name of their choosing.

Below the form is a list of projects where you can
open a project by clicking it, which will redirect 
the user to a project specific page. The user may
also remove a project using the "Remove" button
below a specific project.

Project page functionality
---------------

Clicking a projects name on the main page will redirect
the user to a project specific page.

On this page the user has the option to return to the main page,
by clicking the link titled "Back to main page". 
The user can also remove the project on this page
by pressing the "Remove project!" button, which will remove
the project and redirect the user to the main page. 

The main functionality of this page is adding issues and resolving them.
The user can add issues to the project by typing the description of the 
issue in the from below the "Add an issue to the project" text.
This will add an issue to the project and list it under the "Current issues"
text. The user is also able to resolve issues by clicking the "Resolve issue" button.
this will remove the issue.

Other
---------------

Removing a project also deletes all issues tied to the project.

This file is a copy of the online application with the exception of an empty server setup,
a missing Procfile for Heroku use and this file.
The deployed version does not have this file. 