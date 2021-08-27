<template>
  <div class="row no-gutters justify-content-center carousel-box">
    <div class="col-12 carousel-div">
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            v-for="(each, index) in carousels"
            :data-slide-to="index"
            :class="index == 0 ? 'active' : ''"
            :key="index"
          ></li>
        </ol>
        <div class="carousel-inner">
          <a
            class="carousel-item"
            :class="index == 0 ? 'active' : ''"
            v-for="(each, index) in carousels"
            @click="switch_page(each.content_class, each.link)"
            :key="index"
          >
            <img :src="'/media/' + each.img_filename" class="d-block w-100" />
            <div class="carousel-caption d-none d-block">
              <h5>{{ each.title }}</h5>
              <p>{{ each.description }}</p>
            </div>
          </a>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">上一个</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">下一个</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .carousel-inner h5 {
    font-size: 4rem;
  }

  .carousel-inner p {
    font-size: 1.5rem;
  }

  .carousel-box,
  .carousel-div,
  #carouselExampleCaptions,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }

  .carousel-item img {
    height: -webkit-fill-available;
    object-fit: cover;
  }

  a {
    cursor: pointer;
  }
}

@media (max-width: 991px) {
  #carouselExampleCaptions img {
    height: 20rem;
    object-fit: cover;
  }

  .carousel-caption p {
    display: none;
  }
}
</style>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      carousels: [],
      switch_to_article: {
        funcName: "articleClassDetail",
        page_info: {
          get_content_href: "",
          article_id: 0
        }
      },
      switch_to_aboutUs: {
        funcName: "textSection",
        page_info: {
          title: "关于我们",
          page_info: {
            get_text_href: "/article/detail/?id=",
            text_id: 3
          }
        }
      },
      switch_to_introduction: {
        funcName: "textSection",
        page_info: {
          title: "基地介绍",
          page_info: {
            get_text_href: "/article/detail/?id=",
            text_id: 2
          }
        }
      }
    };
  },
  mounted() {
    this.get_carousels();
    this.resizeCarousel();
  },
  methods: {
    get_carousels: function() {
      this.$http.get("/basic/carousel/?place=1").then(result => {
        this.carousels = result.body.reverse();
      });
    },
    resizeCarousel: function() {
      let offsetHei = document.documentElement.clientHeight;
      var offsetWid = document.documentElement.clientWidth;

      if (offsetWid <= 991) {
        $(".carousel-box")[0].style.height = "20rem";
        return;
      }

      $(".carousel-box")[0].style.height = offsetHei + "px";
    },
    switch_page: function(content_class, id) {
      let temp = NaN;

      switch (content_class) {
        case 1:
          temp = this.switch_to_introduction;

          break;
        case 2:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href =
            "/news/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 3:
        case 4:
        case 5:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href =
            "/notice/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 6:
          this.switch_to_article.page_info.article_id = id;
          this.switch_to_article.page_info.get_content_href =
            "/article/detail/?id=";
          temp = this.switch_to_article;

          break;
        case 7:
          temp = this.switch_to_aboutUs;

          break;
      }

      this.$emit("switch_page", temp);
    }
  }
};

$(document).ready(function() {
  window.onresize = function() {
    let offsetHei = document.documentElement.clientHeight;
    var offsetWid = document.documentElement.clientWidth;

    if (offsetWid <= 991) {
      $(".carousel-box")[0].style.height = "20rem";
      return;
    }

    $(".carousel-box")[0].style.height = offsetHei + "px";
  };
});
</script>
