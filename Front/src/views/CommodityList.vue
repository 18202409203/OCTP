<template>
  <div>
    <!-- 最热：推荐上位 -->
    <Divider>人气推荐商品</Divider>
    <Row :gutter="16">
      <i-col
        v-for="mostPopularCommodity in mostPopularCommodityList"
        :key="mostPopularCommodity.cid"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="6"
      >
        <Card>
          <z-image
            height="30vh"
            :src="mostPopularCommodity.firstPicture.url"
          ></z-image>
        </Card>
      </i-col>
    </Row>
    <!-- 最新：按时间排序 -->
    <Divider>最新上架商品</Divider>
    <Row :gutter="16">
      <i-col
        v-for="latestCommodity in latestCommodityList"
        :key="latestCommodity.cid"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="6"
      >
        <Card>
          <z-image
            height="30vh"
            :src="latestCommodity.firstPicture.url"
          ></z-image>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import zImage from "../components/zImage.vue";
import {
  getMostPopularCommodityListApi,
  getLatestCommodityListApi
} from "../api/http/commodityApi.js";
export default {
  components: { zImage },
  data() {
    return {
      mostPopularCommodityList: [],
      latestCommodityList: []
    };
  },
  methods: {
    async getMostPopularCommodityList() {
      let responseData = await getMostPopularCommodityListApi();
      if (responseData.status) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.mostPopularCommodityList = [];
      } else {
        this.mostPopularCommodityList = responseData.data;
      }
    },
    async getLatestCommodityList() {
      let responseData = await getLatestCommodityListApi();
      if (responseData.status) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.latestCommodityList = [];
      } else {
        this.latestCommodityList = responseData.data;
      }
    }
  },
  mounted() {
    this.getMostPopularCommodityList();
    this.getLatestCommodityList();
  }
};
</script>
