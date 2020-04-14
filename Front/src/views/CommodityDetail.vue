<template>
  <div>
    <Row type="flex" justify="center" :gutter="16">
      <!-- pictures -->
      <i-col :xs="24" :sm="24" :md="12" :lg="16">
        <Carousel v-model="CarouselIndex" loop autoplay>
          <CarouselItem
            v-for="picture in commodityDetails.pictureList"
            :key="picture.pid"
          >
            <div class="carousel_container">
              <img :src="picture.url" class="carousel_picture" />
            </div>
          </CarouselItem>
        </Carousel>
      </i-col>
      <!-- properties -->
      <i-col :xs="24" :sm="24" :md="12" :lg="8">
        <Collapse v-model="CollapsePanel">
          <Panel
            v-for="prop in commodityPropertys"
            :key="prop.property"
            :name="prop.property"
          >
            <Tag color="primary">{{ prop.text }}</Tag>
            <p slot="content">{{ commodityDetails[prop.property] }}</p>
          </Panel>
        </Collapse>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { getCommodityDetailsApi } from "../api/http/commodityApi";
export default {
  data() {
    return {
      commodityPropertys: [
        {
          text: "商品名称",
          property: "name",
          isCollapse: false
        },
        {
          text: "商品售价",
          property: "price",
          isCollapse: false
        },
        {
          text: "上架日期",
          property: "birthday",
          isCollapse: false
        },
        {
          text: "卖家昵称",
          property: "ownerName",
          isCollapse: true
        },
        {
          text: "商品描述",
          property: "description",
          isCollapse: false
        }
      ],
      commodityDetails: {},
      CarouselIndex: 0
    };
  },
  computed: {
    // 展开的面板项
    CollapsePanel: {
      get() {
        return this.commodityPropertys
          .filter(cp => !cp.isCollapse)
          .map(cp => cp.property);
      },
      set() {}
    }
  },
  methods: {
    async getCommodityDetails() {
      let responseData = await getCommodityDetailsApi();
      if (responseData.status) {
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
