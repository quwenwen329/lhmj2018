<template>
  <div class="glory-wapper">
    <div class="glory">
      <div class="title-wapper"><i class="title"></i></div>
      <div class="swiper-title-wapper">
        <i class="swiper-title">
          盈利过亿将帅风采
        </i>
      </div>
      <div class="swiper-wapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide class="item" v-for="item in [0,1,2,3,4,5,6,7,8,9]" :key="item">
            <div class="pic">
              <div class="title">标题{{item}}</div>
            </div>

          </swiper-slide>
          <swiper-slide class="item">
            <div class="pic">
              <div class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      <div class="record">
        <div class="icon">
          <div class="title">蓝海密剑记录</div>
        </div>
        <div class="text">
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢进取一号</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢进取一号123123</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
          <div class="item">
            <div class="crown"></div>
            <div class="title">年度收益额记录：</div>
            <div class="ID">持赢</div>
            <div class="value">1234567890.00</div>
            <div class="up"></div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="nav">
          <div class="item ">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item active">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
          <div class="item">
            <div class="date">2018年</div>
            <div class="session">&lt;第十届&gt;</div>
            <div class="info">十年再出发，续创辉煌</div>
          </div>
        </div>
        <div class="context">
          <div class="title">
            "蓝海密剑"第五届中国对冲基金经理公开赛
          </div>
          <div class="info">
            大赛增设1000万级别基金组,开放不交易商的盟军选手参赛
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
            </table>
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
            </table>
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
            </table>
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
            </table>
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>January</td>
                <td>$100</td>
                <td>Savings</td>
                <td>Savings</td>
                <td>Savings</td>
              </tr>
            </table>
          </div>
          <div class="table-wapper">
            <div class="text">蓝海密剑勋章</div>
            <table border="1" cellspacing="0">
              <tr>
                <th>Month123123</th>
                <th>Savings123123</th>
                <th>Savings123123</th>
                <th>Savings123123</th>
                <th>Savings321321</th>
              </tr>
              <tr>
                <td>January123123</td>
                <td>$100123123</td>
                <td>Savings123123</td>
                <td>Savings123123</td>
                <td>Savings123123</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DhGlory',
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        navigation: {
          nextEl: '.glory .swiper-button-next',
          prevEl: '.glory .swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "glory.styl";
</style>
