<template>
  <div>
    <Layout>
      world
      <router-link to="/Commodity">商品详情</router-link>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoText: "OCTP线下校园交易平台"
    };
  },
  methods: {
    changeMenu(name) {
      this.activeMenu = name;
    }
  }
};
</script>
