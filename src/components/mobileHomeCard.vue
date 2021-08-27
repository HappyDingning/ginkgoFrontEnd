<template>
  <div class="card">
    <div class="w-100 sub-item-title-text">
      <img :src="card_info.logo_src" class="sub-item-title-logo" />
      {{ card_info.card_name }}
    </div>
    <ul class="items">
      <li v-for="(each, index) in contents" v-bind:key="index">
        <a
          @click="card_info.detail_page_info.page_info.article_id=each.id; switch_page(card_info.detail_page_info)"
        >{{ each.title }}</a>
      </li>
    </ul>
    <a
      class="load-more"
      @click="switch_page(card_info.load_more_page_info)"
    >{{ '更多' + card_info.card_name }}</a>
  </div>
</template>

<script>
import VueResource from "vue-resource";

export default {
  data() {
    return {
      number: 5,
      contents: []
    };
  },
  props: {
    card_info: {
      card_name: "",
      logo_src: "",
      get_content_href: "",
      load_more_page_info: {
        funcName: "articleClassList",
        page_info: {
          title: "",
          detail_page_info: {
            page_info: {
              get_content_href: "",
              article_id: {
                typr: Number,
                default: 0
              }
            },
            funcName: "articleClassDetail"
          }
        }
      },
      detail_page_info: {
        page_info: {
          get_content_href: "",
          article_id: {
            typr: Number,
            default: 0
          }
        },
        funcName: "articleClassDetail"
      }
    }
  },
  mounted() {
    this.get_contents();
  },
  methods: {
    get_contents: function() {
      this.$http
        .get(this.card_info.get_content_href + this.number)
        .then(result => {
          this.contents = result.body.contents;
        });
    },
    switch_page: function(switch_page_info) {
      this.$emit("switch_page", switch_page_info);
    }
  }
};
</script>

<style scoped>
.sub-item-title-logo {
  width: 1.5rem;
  margin: 0.5rem 1rem;
  top: -0.2rem;
  position: relative;
}

.sub-item-title-text {
  height: 3.5rem;
  background-color: rgb(248, 248, 248);
  font-size: 1.5rem;
  line-height: 3.5rem;
  color: #003262;
}

.items {
  list-style: none;
  font-size: 1.3rem;
  padding: 0.5rem 2rem;
  margin-bottom: 0rem;
}

.items li {
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  line-height: 3.5rem;
}

.items li > a {
  color: black;
}

.load-more {
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.3rem;
  text-align: center;
  color: #003262;
  font-weight: bold;
}

.card {
  border-radius: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
