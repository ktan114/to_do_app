# Application: To-do lists

A barebones codebase to design a simple application for tracking, storing, and managing to-do lists

### Instructions to run locally

- Run `npm install` or `yarn` on both the client and api directories

- In the api directory, run npx or yarn + `knex migration:latest` and `knex seed:run`
  and then npx or yarn + `dev` or just `node server.js`

- In the client directory, run `yarn start` or `npm start`

## Installing Node.js

Follow the instructions here: https://www.codementor.io/mercurial/how-to-install-node-js-on-macos-sierra-mphz41ekk

## Install dependencies:

#### From the root of the directory

`npm install`

## Run the webpage on localhost:

#### From the root of the directory

`npm start`

## Instructions:

The purpose of this project is to create a simple app to manage a list of to-do tasks. The app should have the following functionality.

#### Functionality

- Allow the user to view, add, edit, or delete to-do tasks. The list of a user's to-do tasks can be shown as table.
- Allow the user to edit the following details for each to-do task:
  - Name: The name of the task
  - Due Date: The date on which the task is due
  - Type: The type of ask i.e homework, project, job.
  - Is Finished: Whether the task has been completed or not.
  - Notes: Any additional notes a user wants to add to the task.
- Allow the user to view, filter and sort the list of to-do tasks:

  - Allow the user to sort the tasks by due date, name, or type.
  - Allow the user to filter tasks based on whether they have been completed or not.

#### Implementation Expectations

1. A web page that shows the to-do list items (as a table likely).

- I would recommend using a react app, but you can also use vanilla html, JS etc.
- This repository inlcudes a basic react app template that you can use in your project.

2. An API Service that the web page talks with. This can be a python flask app (but feel free to use other languages or frameworks you're more familiar with). It can have the following endpoints:

   - POST /create: to create a new to-do item
   - PATCH /update: to updated an existing to-do item - this can be updated to any field, deleting the item, or marking it as finished

3. A persistent storage layer. All to-do tasks should be persisted, so I can start and stop the API service or the web app and still get the same data.

- I would recommend a simple local SQLite database.

#### Tips:

- Think about using a react table component to display the to-do tasks.
- Use RESTful practices when designing the API layer.
- Feel free to ask any questions you may have.

## Deliverables:

- A working webpage where I can add, view, edit, or delete to-do tasks.
- I should be able to sort or filter the tasks.
- Well-commented code.
- While it is not necessary to deploy the web app, it is encouraged. You can also send me a zip file of the fully functional project.

## Good Luck!
