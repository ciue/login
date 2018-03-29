let register = document.querySelector('form[name=register]')
let btn = document.querySelector('button[name=register]')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  // 新建 AVUser 对象实例
  let user = new AV.User();
  // 设置用户名
  user.setUsername(register.username.value);
  // 设置密码
  user.setPassword(register.password.value);
  // 设置邮箱
  user.setEmail(register.email.value);

  user.signUp().then(function (loginedUser) {
    console.log(loginedUser);
    location.reload();
  }, function (error) {
    console.log(error);
  });
})