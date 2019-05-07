<template>
  <div class="section">
    <div class="wrapper">
      <div class="bg-wrap">
        <div class="nav-tit">
          <a class="selected" href="javascript:;">账户登录</a>
          <i>|</i>
          <a href="/register.html">免费注册</a>
        </div>

        <div id="loginform" name="loginform" class="login-box">
          <div class="input-box">
            <input
              id="txtUserName"
              name="txtUserName"
              type="text"
              placeholder="用户名/手机/邮箱"
              maxlength="50"
            >
          </div>
          <div class="input-box">
            <input
              id="txtPassword"
              name="txtPassword"
              type="password"
              placeholder="输入登录密码"
              maxlength="16"
            >
          </div>
          <div class="btn-box">
            <input id="btnSubmit" name="btnSubmit" type="submit" value="立即登录">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'register'
};
</script>

<style>
</style>
