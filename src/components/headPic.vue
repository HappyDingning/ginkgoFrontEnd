<template>
  <div class="head-pic"></div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 991px) {
  .head-pic {
    height: 10rem;
  }
}

@media (min-width: 992px) {
  .head-pic {
    height: 30rem;
  }
}

.head-pic {
  background-image: url(/static/img/timg.jpg);
  background-size: 100% 100%;
  width: 100%;
}
</style>