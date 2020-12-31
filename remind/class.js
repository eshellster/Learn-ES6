class userStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "es" && password === "es") {
        onSuccess(id);
      } else {
        onError(new Error("not found!"));
      }
    }, 1000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "es") onSuccess({ name: user, role: "admin" });
      else onError("no acount");
    });
  }
}

const userWithRoleAdmin = new userStorage();

const id = prompt("아이디를 입력하세요");
const password = prompt("페스워드를 입력하세요");
userWithRoleAdmin.loginUser(
  id,
  password,
  (user) => {
    userWithRoleAdmin.getRoles(
      user,
      (user) => {
        console.log(`${user.name}님은 이곳의 ${user.role}입니다.`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
