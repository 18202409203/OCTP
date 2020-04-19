<template>
  <!-- properties -->
  <Collapse v-model="CollapsePanel">
    <Panel v-for="prop in propertys" :key="prop.property" :name="prop.property">
      <Tag color="primary">{{ prop.text }}</Tag>
      <div slot="content">
        <Button
          text
          v-if="prop.to != undefined"
          :to="
            prop.to.params
              ? `${prop.to.path}/${object[prop.to.params]}`
              : prop.to.path
          "
        >
          <span style="color: #2D8CF0">
            {{ prop.to.prefix }}
          </span>
          {{ object[prop.property] }}
          <span style="color: #2D8CF0">
            {{ prop.to.suffix }}
          </span>
        </Button>
        <p v-else>
          {{ object[prop.property] }}
        </p>
      </div>
    </Panel>
  </Collapse>
</template>

<script>
export default {
  props: {
    object: Object,
    /**
     * @namespace propertys
     * @property {String} text - 显示文字
     * @property {String} property - 字段名
     * @property {Boolean} isCollapsed - 是否不展开
     * @property {Object} to - 路由跳转信息
     * @property {String} to.path - 路由跳转路径
     * @property {String} to.params - 路由跳转所需参数
     * @property {String} to.prefix - 路由跳转文字前缀
     * @property {String} to.suffix - 路由跳转文字后缀
     */
    propertys: Array
  },
  computed: {
    // 展开的面板项
    CollapsePanel: {
      get() {
        return this.propertys
          .filter(cp => !cp.isCollapsed)
          .map(cp => cp.property);
      },
      set() {}
    }
  }
};
</script>
