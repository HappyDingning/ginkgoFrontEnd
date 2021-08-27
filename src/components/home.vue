<template>
  <div>
    <bigCarousel @switch_page="switch_page"></bigCarousel>
    <div class="desktop">
      <homeDesktop @switch_page="switch_page"></homeDesktop>
    </div>
    <div class="mobile">
      <homeMobile @switch_page="switch_page"></homeMobile>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("bigCarousel", function(resolve) {
  require(["./bigCarousel.vue"], resolve);
});

Vue.component("homeDesktop", function(resolve) {
  require(["./homeDesktop.vue"], resolve);
});

Vue.component("homeMobile", function(resolve) {
  require(["./homeMobile.vue"], resolve);
});

export default {
  methods: {
    switch_page: function(switch_page_info) {
      this.$emit("switch_page", switch_page_info);
    }
  }
};
</script>

<style scoped>
@media (max-width: 991px) {
  .desktop {
    display: none;
  }
}

@media (min-width: 992px) {
  .mobile {
    display: none;
  }
}
</style>