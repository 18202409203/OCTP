<template>
  <div>
    <!-- Table -->
    <Divider v-if="isShowDivider">{{ dividerTitle }}</Divider>
    <Table :columns="columns" :data="tableDataCurrentPage"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page
          :total="datumLength"
          :page-size="pageSize"
          :current="currentPage"
          @on-change="changePage"
        ></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dividerTitle: String,
    /**
     * @namespace columns
     * @property {String} title - 显示文字
     * @property {String} key - 字段名
     * @property {String} align - 排列方式: 'center'
     */
    columns: Array,
    datum: Array,
    pageSize: Number
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    tableDataCurrentPage() {
      let startIndex = (this.currentPage - 1) * this.pageSize;
      return this.datum.slice(startIndex, startIndex + this.pageSize);
    },
    datumLength() {
      return this.datum.length;
    },
    isShowDivider() {
      return !!this.dividerTitle;
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>
