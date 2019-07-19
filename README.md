# Sprint Challenge: Form Management

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored form management, custom hooks, and client-side authentication.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in advanced React techniques.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In the challenge for this Sprint, you will demonstrate proficiency by creating an application that has a registration page and let's you register a new user. Once a user is registered, you are returned a token that you can use in other calls to fetch data and render protected data to the DOM.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.





- [ ] Why are forms used so often in web applications and software?

They are a great way to capture data about users. 
Also allows apps and programs to verify that a user is who he/she says he/she is, and keep data secure for that user.





- [ ] What advantages are there by using a forms library like Formik?

Formik helps abstract away complex coding necessities that normal HTML forms require you set up.
i.e.) - Nested form data and/or arrays; wiring up state; validation; error messages
Simplifies the creation process, and speeds up coding process





- [ ] What is stateful logic?

Stateful logic is logic that is built into a component. 
Can be a handle function, setState function, or data formatting logic, or simply the state data itself 
Usually deals with state in the component.
Rendering process - everytime state logic changes - then lifecycle method would rerender



- [ ] What is a custom hook, and what does it mean to compose hooks together?

Unique hook functionality
A custom hook is a hook you build yourself to pass around component logic via a reusable function.
Composing hooks together means combining the logic between the two by using one within the other.





- [ ] Describe the process of retrieving a token from a server and using that token in subsequent API calls.

To retrieve a token from a server you have to create know the proper endpoint and the specific data types/sturcture needed to properly access the BE. Then set the token in memory on localStorage/cookies of the clients browser.

To then use the token you receive, you could add a Header config request to the API call 
Another way is to create a function that tells the program to retrieve it from the specific path (in a separate file). Then in the API call file you will import the function and pass it into the API call.




## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.
- [ ] Navigate to the BE folder in this repository (this is where your server is located) from the command line, install the dependencies, and run `yarn start` or `npm start` to spin up the server provided for you.
- [ ] In the terminal, navigate back to the main folder, then into the `client` folder.
- [ ] Create your React app here.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] A registration form built with formik - include inputs for a `username` and a `password`
- [ ] Form validation using Yup
- [ ] A POST request made from the registration form to `http://localhost:6000/api/register` to add a user and retrieve a token - the request body should have the following shape:

```js
{
    username: "Your name",
    password: "password"
}
```

and the response object will look like this:

```js
{
    "error": "false",
    "message": "User created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
}
```

- [ ] Write a custom hook that can set and retrieve this token to and from local storage

- [ ] A GET request made with the token to `http://localhost:6000/api/restricted/data` to retrieve protected data

- [ ] Map over the array of objects you recieve and render some or all of it's information to the DOM.

## Stretch Problems

1. Styling! Make your form pretty. Research pseudo elements and event selectors. Try to find interesting ways to present and layout the data you recieve from the back end.

1. Make a Login form. Compuse your Formik form in such a way that it can be extracted into a component and reused for both Register and Login.

1. Deep dive into validation. Can you make your register form check to see if a password is long enough? If it has special characters? Make two password fields for register and prevent the post request if the passwords don't match.
