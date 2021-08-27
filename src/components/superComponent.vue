<template>
  <div class="superComponent-box">
    <nav_ @switch_page="switch_page"></nav_>
    <component
      @switch_page="switch_page"
      :is="funcName"
      :page_info="page_info"
      :key="(new Date()).getTime()"
    ></component>
    <footer_></footer_>
  </div>
</template>

<style scoped>
.superComponent-box {
  height: 100%;
}
</style>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueResource);

Vue.component("nav_", function(resolve) {
  require(["./nav.vue"], resolve);
});

Vue.component("home", function(resolve) {
  require(["./home.vue"], resolve);
});

Vue.component("achievement", function(resolve) {
  require(["./achievement.vue"], resolve);
});

Vue.component("articleClassDetail", function(resolve) {
  require(["./articleClassDetail.vue"], resolve);
});

Vue.component("articleClassList", function(resolve) {
  require(["./articleClassList.vue"], resolve);
});

Vue.component("memberList", function(resolve) {
  require(["./memberList.vue"], resolve);
});

Vue.component("memberDetail", function(resolve) {
  require(["./memberDetail.vue"], resolve);
});

Vue.component("textSection", function(resolve) {
  require(["./textSection.vue"], resolve);
});

Vue.component("footer_", function(resolve) {
  require(["./footer.vue"], resolve);
});

export default {
  data() {
    return {
      funcName: "home",
      page_info: NaN
    };
  },
  methods: {
    switch_page: function(switch_page_info) {
      this.funcName = switch_page_info.funcName;
      this.page_info = switch_page_info.page_info;
    }
  }
};
</script>
