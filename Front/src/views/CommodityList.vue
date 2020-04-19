<template>
  <div>
    <!-- 最热：推荐上位 -->
    <z-banner
      divider-title="人气推荐商品"
      :commodity-list="mostPopularCommodityList"
    ></z-banner>
    <!-- 最新：按时间排序 -->
    <z-banner
      divider-title="最新上架商品"
      :commodity-list="latestCommodityList"
    ></z-banner>
  </div>
</template>

<script>
import zBanner from "../components/zBanner.vue";
import {
  Http_getMostPopularCommodityList,
  Http_getLatestCommodityList
} from "../api/http/httpCommodityApi.js";
export default {
  components: { zBanner },
  data() {
    return {
      mostPopularCommodityList: [],
      latestCommodityList: []
    };
  },
  methods: {
    async getMostPopularCommodityList() {
      let responseData = await Http_getMostPopularCommodityList();
      if (responseData.code) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.mostPopularCommodityList = [];
      } else {
        this.mostPopularCommodityList = responseData.data;
      }
    },
    async getLatestCommodityList() {
      let responseData = await Http_getLatestCommodityList();
      if (responseData.code) {
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
