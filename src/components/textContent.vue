<template>
  <div class="text-section" v-html="text"></div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  props: {
    page_info: {
      get_text_href: "",
      text_id: {
        typr: Number,
        default: 0
      }
    }
  },
  mounted() {
    this.get_text();
  },
  methods: {
    get_text: function() {
      this.$http
        .get(this.page_info.get_text_href + this.page_info.text_id)
        .then(result => {
          this.text = result.body.text;
        });
    }
  }
};
</script>

<style scoped>
.text-section >>> p {
  text-indent: 2em;
}

.text-section >>> img {
  width: 100%;
  position: relative;
  display: block;
}

.text-section {
  font-size: 1.4rem;
}

@media (min-width: 992px) {
  .container > p {
    border-bottom: 1px;
    border-bottom-color: gray;
    border-bottom-style: solid;
    text-align: right;
    margin-bottom: 3rem;
  }

  .text-section {
    padding-right: 10rem;
    padding-left: 10rem;
    margin-bottom: -1rem;
  }
}
</style>