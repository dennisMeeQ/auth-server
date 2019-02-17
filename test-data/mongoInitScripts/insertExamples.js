/* eslint-disable */
// As this file executes in the mongo shell, we can't use require, we have to use load
load('../exampleUsers.js');
validUsers.forEach(user => {
  db.users.insert(user);
});