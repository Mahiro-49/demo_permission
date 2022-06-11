const Mock = require('mockjs')

// const Random = Mock.Random

const userData = function() {
  let userList = [
    {
      username: `admin`,
      password: 123456,
      token: `fajhndlksdasa`,
      role: "editor"
    }
  ]
  // for(let i = 0; i < 3; i++) {
  //   let userObject = {
  //     username: `admin${i}`,
  //     password: 123456,
  //     token: `admin${i + 5}`,
  //     role: i > 1 ? "admin" : "editor"
  //   }
  //   userList.push(userObject)
  // }

  return userList
}

Mock.mock('/mock/login', userData)