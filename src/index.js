import './css/base.css'
import './css/style.css'
import './js/tab'
import './js/signUp'
import './js/logInOut'

// 连接 leancloud
var APP_ID = 'a4tnfVU5MS5It3wunjA4jIhr-gzGzoHsz';
var APP_KEY = '7lCTgPlvoQAqE8HKT5uou7Tz';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 判断当前是否有用户登录
let log = document.querySelector('.log')
let el = document.querySelector('#successfully')
let currentUser = AV.User.current();
if (currentUser) {
  console.log(currentUser);
  let userName = currentUser.attributes.username
  el.hidden = false
  log.hidden = true
  el.querySelector('h2').innerText += userName
}
else {
  el.hidden = true
  log.hidden = false
}