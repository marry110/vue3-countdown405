<template>
  <div class="home">
    <div>
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in dataobj" :key="index">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 限时秒杀 -->
    <div class="count_down">
      <div class="seckill">
        <!-- 倒计时 -->
        <div class="header_time">
          <p>00点场倒计时</p>
          <van-count-down :time="time_val" class="count_down_sty">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>

        <!-- 抢购按钮 -->
        <div class="ruch-pur">限时抢购 ></div>

        <!-- 限时秒杀 菜品类表 -->

        <div class="sckill_goods">
          <van-swipe :loop="false" :width="150" :show-indicators="false">
            <van-swipe-item
              v-for="(item, index) in seckill_goodsObj"
              :key="index"
              class="goodsObj"
            >
              <!-- 图片题目放在一起 为了列表宽度正好显示图片  obj 外边不能加 marin  增加一个div -->
              <div class="goodsBorder">
                <img :src="item.goods_img" alt="" />
                <p style="margin: 0">{{ item.goods_name }}</p>
                <span class="price">￥{{ item.price }}</span
                ><span class="original">￥{{ item.original_price }}</span>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- 热销导航条  -->
    <div class="goodsNav">
      <div class="title"></div>
      <div>
        <van-tabs
          class="hot_tab_list"
          v-model:active="active"
          background="#f3f3f3"
          title-inactive-color="#e29a34"
          title-active-color="#753819"
        >
          <van-tab v-for="n in goodsHotDataobj" :title="n.nav_title">
            <div class="tab_list_items">
              <div v-for="(m, index) in n.goods_Obj" class="tab_list_items_cel">
                <img :src="m.goods_img" alt="" class="img" />
                <p>{{ m.num }}</p>
                <p>{{ m.goods_txt }}</p>
                <p>￥{{ m.price }}</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import DATA_Obj from '@/DATA_Obj.config'
// @ is an alias to /src
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components: {},
  setup() {
    const dataobj = DATA_Obj.headerImg
    console.log(dataobj)

    // 限时秒杀
    const time_val = ref(30 * 60 * 60 * 1000)

    // 限时秒杀
    const seckill_goodsObj = DATA_Obj.seckill_goods
    console.log(seckill_goodsObj)

    // 热销 导航条
    const gotgoodslistObj = DATA_Obj.goodNavHotData
    console.log(gotgoodslistObj)

    // 热卖列表
    const goodsHotDataobj = DATA_Obj.goodsHotData
    console.log(goodsHotDataobj)
    return {
      dataobj,
      time_val,
      seckill_goodsObj,
      gotgoodslistObj,
      goodsHotDataobj,
    }
  },
}
</script>
<style lang="less" scoped>
// 轮播图
.my-swipe .van-swipe-item {
  width: 100%;
  height: 320px;
}
.count_down {
  width: 100%;
  // height: 250px;
  background: #fff;
  border-radius: 15px;
  position: relative;
  z-index: 4;
  top: -10px;
  padding-top: 20px;
}
.seckill {
  width: 90%;
  // height: 220px;
  border-radius: 15px;
  background-color: #ffd871;
  margin: 0 auto;
  background-image: url('../assets/countdown.png');
  background-repeat: no-repeat;
  background-size: 27%;
  background-position: 8px 11px;
  overflow: hidden;
  // 倒计时
  .header_time {
    float: left;
    margin-left: 110px;
    margin-top: 9px;
    background: #ffe9b0;
    padding: 4px 6px;
    border-radius: 5px;
    font-size: 12px;

    color: #753819;
    p {
      float: left;
      margin: 0;
      color: #753819;
      padding-top: 2px;
    }
    .count_down_sty {
      float: left;
      margin: 0;
      padding-left: 2px;
    }
    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #ee0a24;
    }
    .block {
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height: 18px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #753819;
    }
  }

  // 抢购按钮
  .ruch-pur {
    float: right;
    border: 1px solid #ccc;
    margin-top: 9px;
    margin-right: 2px;
    font-size: 12px;
    background: #ffe9b0;
    padding: 5px;
    border-radius: 5px;
    color: #753819;
    font-weight: bold;
    box-shadow: 2px 2px 2px #dbac94;
  }

  // 限时秒杀  菜品
  .sckill_goods {
    width: 100%;
    height: 150px;
    background: #ffd871;
    margin-top: 55px;
    margin-bottom: 15px;

    display: flex;
  }
  .goodsObj {
    border-radius: 15px;
    // border: 1px solid rgb(194, 8, 8);
    flex: 1;
    padding-bottom: 5px;

    .goodsBorder {
      margin: 0 10px;
      border-radius: 10px;
      background: #fff;
      overflow: hidden;
      padding-bottom: 5px;
    }
    img {
      width: 100%;
      height: 100px;
    }
    p {
      font-size: 12px;
      padding-bottom: 1px;
    }
    .price {
      font-size: 12px;
      color: #fff;
      background: #753819;
      font-weight: bold;
      padding: 2px;
      border-radius: 5px;
    }
    .original {
      font-size: 12px;
      color: #fff;
      background: #ffd871;
      font-weight: bold;
      padding: 2px;
      border-radius: 5px;
      margin-left: 5px;
    }
  }
}
.goodsNav {
  padding-bottom: 20px;
  border-radius: 15px;
  background-color: #f3f3f3;
  margin: 0 auto;
  overflow: hidden;
  // border: 1px solid red;
  .title {
    background-image: url('../assets/hotlogo.png');
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: 8px 11px;
  }
  .hot_tab_list {
  }
  .tab_list_items {
    // border: 1px solid red;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .tab_list_items_cel {
    flex: 1;
    min-width: 45%; // 加入这两个后每个item的宽度就生效了
    max-width: 45%; // 加入这两个后每个item的宽度就生效了
    height: 350px;
    width: 45%;
    // background: red;/
  }
  .img {
    width: 200px;
    height: 200px;
  }
}
</style>
