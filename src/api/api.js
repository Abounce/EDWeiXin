import ajax from './ajax.js'


export function hasErr(error){
  //console.error(error);
  if (error.status === 200 && error.statusText === 'OK'&& error.data.status === "OK") {
      // Message.error({
      //   title: '错误',
      //   message: error.data.errorMsg,
      //   customClass:"istop"
      // });
      // const status = response.data.errorCode;
      // INVALID_TOKEN("A00002", "非法token认证"),
      // ACCOUNT_LOCKED("100004","账户已被锁定"),
      // INVALID_PSWD("100002","密码错误"),
      // USER_NOT_EXIST("100003","用户不存在"),
      // INCOMPLETE_INFO("A00003","信息不完整"),
      }else{
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 401 清除token信息并跳转到登录页面
    //             delete localStorage['token']
    //             router.push({
    //               name: '登录'
    //             })
    //     }
    // }
    // Message.error({
    //   title: '错误',
    //   message: '连接服务器出错',
    //   duration: 0,
    //   customClass:"istop"
    // });
  }
}

export function login (name) {
  return new Promise((resolve, reject) => {
    ajax.post('/doctor/list',name)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}
