"use strict";
// What should we pass askPassword in the code below, so that it calls user.login(true) as ok
//and user.login(false) as fail?
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(//?, ?); // ?

askPassword(
  () => user.login(true),
  () => user.login(false)
);

askPassword(user.login.bind(user, true), user.login.bind(user, false));

//

"use strict";
//Question 3: Fix the code below using bind
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();

//Answer

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();