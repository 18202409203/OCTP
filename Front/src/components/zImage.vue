<template>
  <div class="image_container" :style="style" @click="handleClick">
    <img :src="src" class="image_picture" />
  </div>
</template>

<script>
export default {
  name: "zImage",
  props: {
    src: String,
    width: String,
    height: String,
    to: String
  },
  data() {
    return {
      imageId: 12
    };
  },
  computed: {
    style() {
      return `width: ${this.width};height: ${this.height}`;
    }
  },
  methods: {
    handleClick() {
      this.to &&
        this.$router.push({
          path: this.to
        });
    }
  }
};
</script>

<style scoped lang="scss">
.image_container {
  height: 100%;
  background: #ccc;
  .image_picture {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
