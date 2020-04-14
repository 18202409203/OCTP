<template>
  <div>
    <Table :columns="tableColumns" :data="tableDataCurrentPage"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page
          :total="tableDataTotalLength"
          :page-size="pageSize"
          :current="currentPage"
          @on-change="changePage"
        ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import zImage from "../components/zImage.vue";
import { getCommodityListByUserApi } from "../api/http/commodityApi";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { zImage },
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
                  src: params.row.firstPicture.url
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
      currentPage: 1,
      // 每页显示量
      pageSize: 10
    };
  },
  computed: {
    tableDataCurrentPage() {
      let startIndex = (this.currentPage - 1) * this.pageSize;
      return this.tableDataTotal.slice(startIndex, startIndex + this.pageSize);
    },
    tableDataTotalLength() {
      return this.tableDataTotal.length;
    }
  },
  methods: {
    async getCommodityListByUser() {
      let responseData = await getCommodityListByUserApi();
      if (responseData.status) {
        this.$Notice.error({
          desc: responseData.message
        });
        this.tableDataTotal = [];
      } else {
        this.tableDataTotal = responseData.data;
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    removeCommodity() {},
    commitTransaction() {}
  },
  mounted() {
    this.getCommodityListByUser();
  }
};
</script>
