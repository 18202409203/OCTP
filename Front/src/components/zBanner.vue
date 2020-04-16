<template>
  <div>
    <!-- Banner -->
    <Divider v-if="isShowDivider">{{ dividerTitle }}</Divider>
    <Row :gutter="16">
      <i-col
        v-for="commodity in commodityList"
        :key="commodity.cid"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="6"
      >
        <Card :to="`/CommodityDetails/${commodity.cid}`" style="margin: 5px;">
          <div slot="title">
            <Tag color="primary">{{ commodity.name }}</Tag>
            <Tag color="success">￥{{ commodity.price }}</Tag>
          </div>
          <z-image height="30vh" :src="commodity.firstPicture.url"></z-image>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import zImage from "../components/zImage.vue";
export default {
  components: { zImage },
  props: {
    dividerTitle: String,
    commodityList: Array
  },
  computed: {
    isShowDivider() {
      return !!this.dividerTitle;
    }
  }
};
</script>
