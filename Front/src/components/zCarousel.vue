<template>
  <!-- pictures -->
  <Carousel loop autoplay style="margin: 5px 0;">
    <CarouselItem v-for="picture in pictures" :key="picture.pid">
      <div class="carousel_container">
        <img :src="picture.url" class="carousel_picture" />
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  props: {
    /**
     * @namespace picture
     * @property {Number} pid - 唯一标识
     * @property {String} url - 资源路径
     */
    pictures: Array
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
