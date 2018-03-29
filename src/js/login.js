let loginBtn = document.querySelector('#login-btn')
let form = document.querySelector('#login-form')
console.log(form);

loginBtn.addEventListener('click',(e) => {
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



