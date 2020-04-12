<template>
  <Layout>
    <Row type="flex" justify="center">
      <i-col :span="8">
        <Carousel v-model="CarouselIndex" loop>
          <CarouselItem
            v-for="picture in commodityDetails.pictureList"
            :key="picture.pid"
          >
            <div class="demo-carousel">
              <img :src="picture.url" />
            </div>
          </CarouselItem>
        </Carousel>
      </i-col>
      <i-col :span="8">
        <List>
          <ListItem v-for="prop in commodityPropertys" :key="prop.property">
            <Tag color="primary">{{ prop.text }}</Tag>
            <span>{{ commodityDetails[prop.property] }}</span>
          </ListItem>
        </List>
      </i-col>
    </Row>
  </Layout>
</template>

<script>
import { getCommodityDetailsApi } from "../api/http/commodityApi";
export default {
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
          text: "卖家昵称",
          property: "ownerName"
        }
      ],
      commodityDetails: {},
      CarouselIndex: 0
    };
  },
  methods: {
    async getCommodityDetails() {
      this.commodityDetails = await getCommodityDetailsApi();
    }
  },
  mounted() {
    this.getCommodityDetails();
  }
};
</script>
