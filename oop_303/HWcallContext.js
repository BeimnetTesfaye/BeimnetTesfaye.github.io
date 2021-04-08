//Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }
  let user = {
    name: "John",
    loginOk() {
      alert(`${this.name} logged in`);
    },
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };
  askPassword(user.loginOk, user.loginFail);
  
  //Answer
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: "John",
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  //

  "use strict";
//Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk, user.loginFail);

//Ans
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

