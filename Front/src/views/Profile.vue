<template>
  <div>
    <Row>
      <!-- 公开信息 -->
      <List>
        <ListItem>
          <ListItemMeta :description="profileData.description">
            <p slot="title" style="font-size: 2em; font-weight: bold;">
              {{ profileData.name }}
            </p>
            <avatar
              slot="avatar"
              size="100"
              :src="profileData.avatar"
              icon="ios-person"
            ></avatar>
          </ListItemMeta>
        </ListItem>
      </List>
    </Row>
    <Divider></Divider>
    <Row>
      <!-- 私密信息 -->
      <z-collapse
        :object="profileData"
        :propertys="proiflePropertys"
      ></z-collapse>
    </Row>
  </div>
</template>
<script>
import { Http_getProfileByUser } from "../api/http/httpUserApi";
import zCollapse from "../components/zCollapse";
export default {
  components: { zCollapse },
  data() {
    return {
      formItems: [],
      formItemModels: {},
      profileData: {
        name: "游客",
        description: "个人介绍",
        avatar: null
      },
      proiflePropertys: [
        { property: "num", text: "学号" },
        { property: "birth", text: "注册日期" },
        { property: "address", text: "地址" },
        { property: "phone", text: "电话" },
        { property: "qq", text: "QQ" },
        { property: "wechat", text: "微信" },
        { property: "mail", text: "邮箱" }
      ]
    };
  },
  methods: {
    async getProfileByUser() {
      let responseData = await Http_getProfileByUser();
      if (responseData.code === 0) {
        console.log(responseData.data);
        this.profileData = responseData.data;
      } else {
        this.$Notice.error({
          title: responseData.message
        });
      }
    }
  },
  mounted() {
    this.getProfileByUser();
  }
};
</script>
