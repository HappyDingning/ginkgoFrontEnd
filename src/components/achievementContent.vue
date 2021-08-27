<template>
  <div class="achievements">
    <div class="desktop">
      <ul class="achievement-list">
        <li v-for="(each, index) in achievement_list" :key="index">
          <div :class="index % 2 == 0 ? 'odd' : 'even'" @click="switch_page(each.news_id)">
            <div class="achievement-date">{{ each.date | dateFilter }}</div>
            <div class="achievement-text">
              <div class="achievement-title">{{ each.title }}</div>
              <p>{{ each.outline }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mobile">
      <div class="item" v-for="(each, index) in achievement_list" :key="index">
        <div
          style="color: #4876e8; font-size: 2rem; margin-bottom: .7rem; margin-top: 1.5rem; font-size: 20px;"
        >{{ each.date | dateFilter }}</div>
        <h5 style="font-size: 16px;" @click="switch_page(each.news_id)">{{ each.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

Vue.filter("dateFilter", function(value) {
  return value.substr(0, 7);
});

export default {
  data() {
    return {
      achievement_list: [],
      switch_page_info: {
        page_info: {
          article_id: 0,
          get_content_href: "/news/detail/?id="
        },
        funcName: "articleClassDetail"
      }
    };
  },
  mounted() {
    this.get_achievement();
  },
  methods: {
    get_achievement: function() {
      this.$http.get("/propaganda/achievement/?level=3").then(result => {
        this.achievement_list = result.body;
      });
    },
    switch_page: function(id) {
      if (!id){
        return ;
      }
      this.switch_page_info.page_info.article_id = id;

      this.$emit("switch_page", this.switch_page_info);
    }
  }
};
</script>

<style scoped>
@media (min-width: 992px) {
  .mobile {
    display: none;
  }

  .odd:after,
  .even:after,
  ul:after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    list-style: none;
    width: 30rem;
    margin-left: auto;
    margin-right: auto;
  }

  .odd {
    transform: translateX(-14.8rem);
  }

  .even {
    transform: translateX(14.3rem);
  }

  .achievement-list {
    position: relative;
    padding: 0px;
  }

  .odd > .achievement-date {
    background: url(/static/img/time-point-left.png) center center no-repeat;
    background-size: cover;
    font-size: 20px;
    font-weight: 400;
    width: 15rem;
    padding-left: 3rem;
    color: #4876e8;
    float: right;
  }

  .odd > .achievement-text {
    float: right;
    width: 100%;
    text-align: right;
    padding-right: 2rem;
  }

  .odd > .achievement-text,
  .even > .achievement-text {
    font-size: 24px;
    cursor: pointer;
  }

  .even > .achievement-date {
    background: url(/static/img/time-point.png) center center no-repeat;
    background-size: cover;
    font-size: 20px;
    font-weight: 400;
    width: 15rem;
    padding-left: 5rem;
    color: #4876e8;
  }

  .even > .achievement-text {
    width: 100%;
    text-align: left;
    padding-left: 2rem;
  }

  .odd > .achievement-text > p, .even > .achievement-text > p{
    font-size: 12px;
    text-align: left;
  }

  h5 {
    font-size: 24px;
  }
}

@media (max-width: 991px) {
  .desktop {
    display: none;
  }

  .achievements {
    margin-bottom: 2rem;
  }
}
</style>