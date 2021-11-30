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

 [![Capture.jpg]([![screencapture-localhost-3000-2021-11-30-23-01-28.png](https://i.postimg.cc/NjC9stnX/screencapture-localhost-3000-2021-11-30-23-01-28.png)](https://postimg.cc/DSsy69nf))
 
 ### SQL commands:
 -This is a snippet from the add-user.php file [here](https://github.com/bibmode/machine-1-backend/blob/main/server/add-user.php)
 
```
  $query = "CREATE USER $username@$host IDENTIFIED BY $password";

  $stmt = $conn->prepare($query);

  if ($stmt->execute()) {

    $query2 = "GRANT $grants ON * . * TO $username@$host";

    $stmt2 = $conn->prepare($query2);

    $stmt2->execute();

    echo json_encode([
      'success' => 1,
      'message' => 'added user to system.'
    ]);
    exit;
  }
```


## Login user and Show Grants:

 ### login page
[![screencapture-localhost-3000-2021-11-30-23-11-21.png](https://i.postimg.cc/Vkv9BKQj/screencapture-localhost-3000-2021-11-30-23-11-21.png)](https://postimg.cc/ts0V9tgT)

 ### show grants
 
 ### SQL commands:
 -This is a snippet from the get-grants.php file [here](https://github.com/bibmode/machine-1-backend/blob/main/server/get-grants.php)
 
```
   $username = htmlspecialchars(trim($data->username));
  $host = htmlspecialchars(trim($data->host));
  $password = htmlspecialchars(trim($data->password));

  $mysqli = new mysqli($host, $username, $password);

  if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
  }

  $result = $mysqli->query("SHOW GRANTS for $username@$host");

  while ($row = mysqli_fetch_array($result)) {
    echo json_encode($row[0]);
  }

  exit;
```

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
