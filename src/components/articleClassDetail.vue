<template>
  <div>
    <headPic></headPic>
    <articleClassDetailContent :page_info="page_info"></articleClassDetailContent>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("headPic", function(resolve) {
  require(["./headPic.vue"], resolve);
});

Vue.component("articleClassDetailContent", function(resolve) {
  require(["./articleClassDetailContent.vue"], resolve);
});

export default {
  props: {
    page_info: {
      article_id: {
        typr: Number,
        default: 0
      },
      get_content_href: ""
    }
  }
};
</script>

<style>
</style>
