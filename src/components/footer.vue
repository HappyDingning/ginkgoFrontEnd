<template>
  <div class="bottom-bar">
    <div class="slash"></div>
    <div class="row justify-content-center bottom-bar-content">
      <div class="col-lg-3 bottom-bar-logo-box">
        <div class="bottom-bar-logo">
          <img src="/static/img/logo.png" style="width: 8rem;" />
          <img src="/static/img/text.png" style="height: 4rem;" />
        </div>
      </div>
      <div class="bottom-bar-text col-lg-9 col-12">
        <p>版权所有：太原理工大学 科学云计算中心</p>
        <p>地址：山西省晋中市魏榆路157号 邮编：030619</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 991px) {
  .bottom-bar {
    height: 10rem;
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    background-color: #014B7D;
  }

  .slash {
    display: none;
  }

  .bottom-bar-logo-box {
    display: none;
  }

  .bottom-bar-content {
    margin-top: 3rem;
  }
}

@media (min-width: 992px) {
  .bottom-bar {
    height: 25rem;
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    background: url("/static/img/bottom_bar_background.jpg") no-repeat;
  }

  .bottom-bar-logo-box {
    border-right-style: solid;
    display: table;
    height: 6rem;
    padding-right: 0px;
  }

  .bottom-bar-logo {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
  }

  .slash {
    width: 200%;
    height: 13rem;
    background-color: #e7eaea;
    transform: rotateZ(-3deg);
    top: -10rem;
    position: relative;
    left: -12px;
  }

  .bottom-bar-text {
    text-align: left;
  }

  .bottom-bar-text p{
    padding-top: .5rem;
  }

  .bottom-bar-content {
    margin-top: 1rem;
  }
}
</style>
