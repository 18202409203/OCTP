<template>
  <div class="login_container">
    <Card class="login_card" shadow>
      <div slot="title" class="login_title">登 录</div>
      <Form ref="loginForm" :model="authInfo" :rules="authRules">
        <FormItem prop="userName">
          <i-input
            prefix="ios-person-outline"
            type="text"
            v-model="authInfo.userName"
            placeholder="学号"
          >
          </i-input>
        </FormItem>
        <FormItem prop="passWord">
          <i-input
            type="password"
            password
            prefix="ios-lock-outline"
            v-model="authInfo.passWord"
            placeholder="密码"
          >
          </i-input>
        </FormItem>
        <FormItem>
          <div class="login_buttons space_around">
            <Button
              size="default"
              type="primary"
              @click="handleLogin('loginForm')"
              >登录</Button
            >
            <Button size="default" @click="register">注册</Button>
          </div>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Http_login } from "../api/http/httpUserApi.js";
export default {
  data() {
    return {
      authInfo: {
        userName: "",
        passWord: ""
      },
      authRules: {
        userName: [
          {
            required: true,
            message: "请输入账户名",
            trigger: "blur"
          }
        ],
        passWord: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
            type: "string"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations({
      setLoginInfo: "SET_LOGIN_INFO"
    }),
    async handleLogin(refName) {
      let isValid = await this.$refs[refName].validate();
      isValid && this.login();
    },
    async login() {
      let responseData = await Http_login(this.authInfo);
      if (responseData.code === 0) {
        this.$Notice.success({
          title: responseData.message
        });
        this.setLoginInfo(responseData.data);
        this.$router.push("/");
      } else {
        this.$Notice.error({
          title: responseData.message
        });
      }
    },
    register() {}
  }
};
</script>
<style scoped lang="less">
.login_container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  .login_card {
    width: 350px;
    .login_title {
      text-align: center;
      font-weight: bold;
    }
    .login_buttons {
      margin: 10px 0;
      width: 100%;
    }
    .space_around {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
