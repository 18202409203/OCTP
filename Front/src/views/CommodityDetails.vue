<template>
  <div>
    <Row type="flex" justify="center" :gutter="16">
      <!-- pictures -->
      <i-col :xs="24" :sm="24" :md="12" :lg="16">
        <z-carousel :pictures="commodityDetails.pictureList"></z-carousel>
      </i-col>
      <!-- properties -->
      <i-col :xs="24" :sm="24" :md="12" :lg="8">
        <z-collapse
          :object="commodityDetails"
          :propertys="commodityPropertys"
        ></z-collapse>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { Http_getCommodityDetails } from "../api/http/httpCommodityApi";
import zCarousel from "../components/zCarousel.vue";
import zCollapse from "../components/zCollapse.vue";
export default {
  components: { zCarousel, zCollapse },
  data() {
    return {
      commodityPropertys: [
        {
          text: "商品名称",
          property: "name"
        },
        {
          text: "商品售价",
          property: "price"
        },
        {
          text: "上架日期",
          property: "birthday"
        },
        {
          text: "卖家昵称",
          property: "ownerName",
          isCollapsed: true,
          to: {
            path: "/Profile",
            params: "ownerId",
            prefix: "联系"
          }
        },
        {
          text: "商品描述",
          property: "description"
        }
      ],
      commodityDetails: {}
    };
  },
  methods: {
    async getCommodityDetails() {
      let responseData = await Http_getCommodityDetails(this.$route.params.cid);
      if (responseData.code) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.commodityDetails = {};
      } else {
        this.commodityDetails = responseData.data;
      }
    }
  },
  mounted() {
    this.getCommodityDetails();
  }
};
</script>

<style scoped lang="scss">
.carousel_container {
  height: 500px;
  background: #ccc;
  .carousel_picture {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
