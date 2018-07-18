let loginBtn = document.querySelector('#login-btn')
let form = document.querySelector('#login-form')
let loginOutBtn = document.querySelector('#login-out')

// 登入
loginBtn.addEventListener('submit',(e) => {
  console.log('登录');
  let userName = form.username.value
  let password = form.password.value
  console.log(userName,password);

  AV.User.logIn(userName, password).then(function (loginedUser) {
    console.log(loginedUser);
  }, function (error) {
    console.log(error);
  });
})

//登出
loginOutBtn.addEventListener('click', (e) => {
  AV.User.logOut();
  location.reload()
})

