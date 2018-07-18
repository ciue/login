let register = document.querySelector('form[name=register]')

register.addEventListener('submit', (e) => {
  console.log(register.validity);

  e.preventDefault()
  // 新建 AVUser 对象实例
  let user = new AV.User();
  // 设置用户名
  user.setUsername(register.username.value);
  // 设置密码
  user.setPassword(register.password.value);
  // 设置邮箱
  user.setEmail(register.email.value);

  console.log(user);
  user.signUp().then(function (loginedUser) {
    console.log(loginedUser);
    location.reload();
  }, function (error) {
    alert(error)
    console.log(error);
  });


})