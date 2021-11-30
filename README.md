# MACHINE 1 PROBLEM - IT107

<div align="center">
  <h3>
    This is a problem to add new users to mysql database with chosen grants. The user can also log in to see the privileges given to him/her.
  </h3>
</div>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [1. Adding new user](#adding-new-user)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge:
- Perform the adding of user/s to SQL database with limited privileges (own choice) via web-based interface.
- Develop a web-based login page for the authentication of users before the system's access.
- Create a webpage that will display the user's assigned privileges every after successful entry to the system.

## Adding new user:
- Get the tasks and notes of the user logged in
- Post new task and memo to the database under the user's id
- Update tasks' and memos' details by their ids
- Get tasks and notes by inputted keywords

### Links

**Note: I will be deploying this entire app in the future. I have a limited time to deploy it on heroku which I have not used before since the deadline of this school project is later this day @ 12:00 am 2021-11-28. To use it for now, follow the instructions in the How-to-use section.**
<!--
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
-->

## How to use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

 1. clone this repo and put it in the htdocs under your xampp folder
 2. create a new database and name it notes-app
 3. create a users table with these properties: 
 [![Capture.jpg](https://i.postimg.cc/8zsj8t4t/Capture.jpg)](https://postimg.cc/5XdxL5ZC)
 4. under the users table create a new user named Visitor with an id number of 8 with this sql command:
```
INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES (8, 'Visitor', 'test@gmail.com', '$2y$10$1KqJrmpixqLY36gIyllJfuQFWreJbVw7ZYiTtXcuXHQ1WX7qILZcS')
```
 5. create a memos table with these properties: 
 [![Capture.jpg](https://i.postimg.cc/g2SdppjZ/Capture.jpg)](https://postimg.cc/WdkxmQMN)
 6. create a todos table with these properties: 
 [![Capture.jpg](https://i.postimg.cc/ZRmwDBmF/Capture.jpg)](https://postimg.cc/p90Qmdpp)
 7. run the apache and mysql in your xampp control panel
 
 ## Results
 [![ezgif-3-e61eb84aa8e5.gif](https://i.postimg.cc/9Qy4W1s2/ezgif-3-e61eb84aa8e5.gif)](https://postimg.cc/cv41h7sk)


## My process

### Built with

- [PHP](https://www.php.net/) - For connecting the backend to the frontend
- [MySQL](https://www.mysql.com/) - Database service
- [Apache](https://httpd.apache.org/) - For HTTP server
- [React](https://reactjs.org/) - Front frontend javascript library/framework
- [Material UI](https://mui.com/) - CSS components library 
- [Formik](https://formik.org/) - Form handling library
- [Yup](https://github.com/jquense/yup) - Form validation library

### What I learned

In the process of this project, I learned a lot of things. Here are some of them:
- Connecting the sql database to the front end using api calls
- Binding data from user's input in the UI to php
- Making POST, GET, UPDATE, and DELETE queries
- How to debug in php using echo calls 

### Useful resources

- [React JS + PHP + MySQL DB Login & Registration System](https://www.w3jar.com/react-js-php-mysql-db-login-registration-system/) - This helped me create the loginand registration system of this app.
- [Getting started with React.js & PHP](https://www.youtube.com/watch?v=BPGIrau9dW4&t=99s&ab_channel=Keith%2CtheCoder) - This is an amazing video that helped me in connecting my frontend folder to the backend folder using react and php


## Acknowledgments

Thank you to Sir Mark Phil B. Pacot, our IT107 professor, who gave this project as our assignment. This was a great learning experience for me and I'm sure I'll be able to use what I learned in this project in my next CRUD applications.
