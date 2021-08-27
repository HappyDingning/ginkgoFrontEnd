<template>
  <div>
    <headPic></headPic>
    <div class="container">
      <articleClassTitle :title="page_info.title"></articleClassTitle>
      <textContent :page_info="page_info.page_info"></textContent>
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

Vue.component("textContent", function(resolve) {
  require(["./textContent.vue"], resolve);
});

export default {
  props: {
    page_info: {
      title: "",
      page_info: {
        get_text_href: "",
        text_id: ""
      }
    }
  }
};
</script>

<style>
</style>
