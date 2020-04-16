<template>
  <div>
    <!-- Table -->
    <z-page-table
      :columns="tableColumns"
      divider-title="我的/他的商品"
      :datum="tableDataTotal"
      :page-size="10"
    ></z-page-table>
    <!-- Modal -->
    <Modal
      v-model="isShowModal"
      title="请确认交易"
      @on-ok="confirmHandler"
      @on-cancel="cancelHandler"
    >
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
import zImage from "../components/zImage.vue";
import zPageTable from "../components/zPageTable.vue";
import { getCommodityListByUserApi } from "../api/http/commodityApi";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { zImage, zPageTable },
  data() {
    return {
      tableColumns: [
        {
          title: "名称",
          key: "name",
          align: "center"
        },
        {
          title: "价格",
          key: "price",
          align: "center"
        },
        // {
        //   title: "上架日期",
        //   key: "birthday",
        //   align: "center"
        // },
        {
          title: "封面",
          key: "firstPicture",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(zImage, {
                props: {
                  height: "5vh",
                  width: "100%",
                  src: params.row.firstPicture.url,
                  to: `/CommodityDetails/${params.row.cid}`
                }
              })
            ]);
          }
        },
        {
          title: "操作",
          key: "actions",
          align: "center",
          width: 80,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.commitTransaction(params.index);
                    }
                  }
                },
                "已售"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.removeCommodity(params.index);
                    }
                  }
                },
                "下架"
              )
            ]);
          }
        }
      ],
      tableDataTotal: [],
      isShowModal: false,
      modalType: false // true
    };
  },
  methods: {
    async getCommodityListByUser() {
      let responseData = await getCommodityListByUserApi(
        this.$route.params.uid
      );
      if (responseData.status) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.tableDataTotal = [];
      } else {
        this.tableDataTotal = responseData.data;
      }
    },
    removeCommodity() {},
    commitTransaction() {
      this.isShowModal = true;
    },
    cancelHandler() {},
    confirmHandler() {}
  },
  mounted() {
    this.getCommodityListByUser();
  }
};
</script>
