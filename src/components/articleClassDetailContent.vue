<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>
      {{ date }}&nbsp;
      <br />
      {{ author }}&nbsp;{{ source }}
    </p>
    <div class="articleClass-text" v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      source: "",
      author: "",
      date: ""
    };
  },
  props: {
    page_info: {
      article_id: {
        typr: Number,
        default: 0
      },
      get_content_href: ""
    }
  },
  mounted() {
    this.get_content();
  },
  methods: {
    get_content: function() {
      this.$http
        .get(this.page_info.get_content_href + this.page_info.article_id)
        .then(result => {
          this.content = result.body.text;
          this.title = result.body.title;
          this.source = result.body.source ? "来源: " + result.body.source : "";
          this.author = result.body.author ? "作者: " + result.body.author : "";
          this.date = result.body.date;
        });
    }
  }
};
</script>

<style scoped>
.articleClass-text >>> p {
  text-indent: 2em;
}

.articleClass-text >>> img {
  width: 100%;
  position: relative;
  display: block;
}

h1 {
  text-align: left;
  font-weight: bold;
  line-height: 1.5em;
}

.articleClass-text {
  font-size: 1.4rem;
}

@media (min-width: 992px) {
  .container > p > br {
    display: none;
  }

  .container > p {
    border-bottom: 1px;
    border-bottom-color: gray;
    border-bottom-style: solid;
    text-align: right;
    margin-bottom: 3rem;
  }

  .container > h1 {
    text-align: center;
    margin-top: 3rem;
  }

  .articleClass-text {
    padding-right: 10rem;
    padding-left: 10rem;
    margin-bottom: -1rem;
  }
}
</style>
