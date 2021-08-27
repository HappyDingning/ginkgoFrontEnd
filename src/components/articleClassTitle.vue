<template>
  <div class="title">
    <span class="title-text">{{  title  }}</span>
  </div>
</template>

<script>
export default {
    props: {
        title: ""
    }
};
</script>

<style scoped>
.title-text{
    color: #FFFFFF;
    font-size: 33px;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    line-height: 80px;
    letter-spacing: 8px;
}

.title{
    height: 80px;
    position: relative;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1691b7;
}

@media (max-width: 991px) {
  .title {
    width: 80%;
  }
}

@media (min-width: 992px) {
  .title {
    width: 30%;
  }
}
</style>
