<template>
  <div>
    <div class="desktop">
      <ul class="articleClass-items">
        <li v-for="(each, index) in contents" :key="index">
          <div class="row justify-content-center" :id="each.id" @click="switch_page(each.id)">
            <div class="col-8 row each-item">
              <div class="hoverbackground col-12"></div>
              <div class="col-3 articleClass-date-box">
                <h1 class="day">{{ each.date | getDay }}</h1>
                <h5 class="date">{{ each.date }}</h5>
              </div>
              <div class="col-9 articleClass-title-box">
                <p class="articleClass-title">{{ each.title }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mobile">
      <ul class="articleClass-items">
        <li v-for="(each, index) in contents" :key="index">
          <p class="articleClass-title" :id="each.id" @click="switch_page(each.id)">{{ each.title }}</p>
        </li>
      </ul>
    </div>
    <nav aria-label="Page navigation example" v-if="total_num != 1">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">上一页</a>
        </li>
        <li class="page-item" v-for="(page_num, index) in total_num" :key="index">
          <a class="page-link" href="#">{{ page_num }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">下一页</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

Vue.filter("getDay", function(value) {
  return value.slice(8);
});

export default {
  data() {
    return {
      contents: [],
      each_page_items_num: 20,
      page_now: 0,
      total_num: 1,
      switch_page_info: {
        page_info: {
          article_id: 0,
          get_content_href: ""
        },
        funcName: ""
      }
    };
  },
  props: {
    page_info: {
      funcName: "",
      get_content_href: "",
      get_detail_content_href: ""
    }
  },
  mounted() {
    this.get_contents();
  },
  methods: {
    get_contents: function() {
      this.$http
        .get(
          this.page_info.get_content_href +
            this.each_page_items_num +
            "&page=" +
            this.page_now
        )
        .then(result => {
          this.contents = result.body.contents;
          this.total_num = parseInt(
            result.body.total_num / this.each_page_items_num + 0.99
          );
        });
    },
    switch_page: function(id) {
      this.switch_page_info.page_info.article_id = id;
      this.switch_page_info.page_info.get_content_href = this.page_info.get_detail_content_href;
      this.switch_page_info.funcName = this.page_info.funcName;

      this.$emit("switch_page", this.switch_page_info);
    }
  }
};
</script>

<style scoped>
.articleClass-items {
  list-style: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0rem;
}

.articleClass-items li {
  line-height: 3.5rem;
}

@media (min-width: 992px) {
  .mobile {
    display: none;
  }

  .articleClass-date-box {
    padding-left: 0px;
    background: transparent;
  }

  .articleClass-title-box {
    background: transparent;
  }

  .articleClass-items li {
    margin-bottom: 15px;
  }

  .day,
  .date {
    text-align: center;
    margin-bottom: 0px;
  }

  .day {
    font-size: 44px;
    background-color: #bbe2f3;
    color: #0072a6;
    margin-bottom: 0px;
    height: 80px;
    line-height: 80px;
  }

  .date {
    font-size: 14px;
    background-color: #6dc8ee;
    color: #0072a6;
    height: 30px;
    line-height: 30px;
  }

  .articleClass-title {
    font-size: 20px;
    line-height: 110px;
    margin-bottom: 0px;
  }

  .each-item {
    background-color: white;
    padding: 0px;
    cursor: pointer;
  }

  .each-item:hover {
    color: white;
  }

  .each-item:hover .day {
    background-color: #eff4f7;
    transition: all 0.2s ease;
  }

  .each-item:hover .date {
    background-color: transparent;
    color: white;
  }

  .hoverbackground {
    height: 110px;
    position: absolute;
    width: 0%;
    padding: 0px;
    position: absolute;
    background-color: #0072a6;
    transition: all 0.6s ease;
  }

  .each-item:hover .hoverbackground {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .desktop {
    display: none;
  }

  .mobile {
    border-radius: 0px;
  }

  .articleClass-title {
    cursor: pointer;
  }
}
</style>
