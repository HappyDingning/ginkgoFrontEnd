<template>
  <div>
    <headPic></headPic>
    <div class="container">
      <articleClassTitle :title="'成就'"></articleClassTitle>
      <achievementContent @switch_page="switch_page"></achievementContent>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("headPic", function(resolve) {
  require(["./headPic.vue"], resolve);
});

Vue.component("articleClassTitle", function(resolve) {
  require(["./articleClassTitle.vue"], resolve);
});

Vue.component("achievementContent", function(resolve) {
  require(["./achievementContent.vue"], resolve);
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
@media (min-width: 992px) {
  .container {
    background: url(/static/img/tick.png) center top repeat-y;
  }
}
</style>