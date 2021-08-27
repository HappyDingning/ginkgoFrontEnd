<template>
  <div>
      <homeDesktopNews @switch_page="switch_page"></homeDesktopNews>
      <homeDesktopCarousel @switch_page="switch_page"></homeDesktopCarousel>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component("homeDesktopCarousel", function(resolve) {
  require(["./homeDesktopCarousel.vue"], resolve);
});

Vue.component("homeDesktopNews", function(resolve) {
  require(["./homeDesktopNews.vue"], resolve);
});

export default {
  methods: {
    switch_page: function(switch_page_info) {
      this.$emit("switch_page", switch_page_info);
    }
  }
}
</script>

<style>

</style>