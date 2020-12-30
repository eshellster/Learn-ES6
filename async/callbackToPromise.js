"use strict";

/**
 * Callback Hell example
 */
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "eshell" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 100);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "eshell") {
          resolve({ name: user, role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 100);
    });
  }
}

const userStroage = new UserStorage();
const id = prompt("enter you id");
const password = prompt("enter your password");

userStroage //
  .loginUser(id, password)
  .then(userStroage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// userStroage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStroage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
