<template>
  <div class="login_container">
    <Card class="login_card" shadow>
      <div slot="title" class="login_title">登 录</div>
      <Input
        v-model="authInfo.userName"
        placeholder="学号/手机号/邮箱"
        class="login_items"
      />
      <Input
        v-model="authInfo.passWord"
        type="password"
        password
        placeholder="密码"
        class="login_items"
      />
      <div class="login_items space_around">
        <Button size="default" type="primary" @click="login">登录</Button>
        <Button size="default" @click="register">注册</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authInfo: {
        userName: "",
        passWord: ""
      }
    };
  },
  methods: {
    login() {
      this.$router.push("/");
    },
    register(){
      
    }
  }
};
</script>
<style scoped>
.login_container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
}
.login_card {
  width: 350px;
}
.login_items {
  margin: 10px 0;
  width: 100%;
}
.login_title {
  text-align: center;
  font-weight: bold;
}
.space_around {
  display: flex;
  justify-content: space-around;
}
</style>
