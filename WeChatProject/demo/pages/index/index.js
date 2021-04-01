// pages/index3/index3.js
var app = getApp();
Page({
  data: {
    swiperList:[],
    fontFamily: 'chi-font',
    isLoaded: false,
    cardCur: 0,
  },
  onLoad() {
    this.towerSwiper('swiperList');
    //读取储存更新
    //向后端请求数据
    // var that = this;
    // wx.getStorage({
    //   key: 'swiperList',
    //   success(res) {    //如果在储存中
    //     // console.log("in storage");
    //     wx.getStorage({
    //       key: 'swiperList',
    //       success(res) {
    //         that.setData({
    //           swiperList: res.data,
    //         })
    //       }
    //     })
    //   },
    //   fail(res) {      //如果没有在储存中
        // console.log("not in storage");
        var that = this;
        let userID = app.globalData.userID;
        if(userID == 0){
          //如果未登录
          app.login().then(
            function(res){
              that._getSwiperlist();
          })
        }else{
          //如果登陆了
          that._getSwiperlist();
        }
      // }
    // })
  },
  //获取推送信息
  _getSwiperlist(){
    var that = this;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/yiju?userID=${app.globalData.userID}&date=2019-5-25&num=5`,
      method: 'GET',
      success(res) {
        console.log(res.data)
        that.setData({
          swiperList: res.data.swiper_List,
          isLoaded: true,
        })
        //抽取被收藏的页面并保存为likeList
        let likeList = [];
        for(let swiper of that.data.swiperList){
          if(swiper.like) likeList.push(swiper.push_id)
        }
        wx.setStorage({
          // key: 'swiperList',
          // data: res.data.swiper_List,
          key: "likeList",
          data: likeList,
        })
      }
    })
  },

  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },

  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  //自定义动作
  clickFavor(e){
    var swiperList = this.data.swiperList;
    var cardCur = this.data.cardCur;
    var isLike = swiperList[cardCur].like?0:1;
    let pushID = swiperList[cardCur].push_id;
    var that = this;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/pushlike_yiju?userID=${app.globalData.userID}&pushID=${pushID}&like=${isLike}`,
      method: "GET",
      success(res) {
        var newlike_count = res.data;
        swiperList[cardCur].like = isLike;
        swiperList[cardCur].like_count = newlike_count;
        that.setData({
          swiperList: swiperList,
        })
        //更新本地缓存
       that._toggleFavor(pushID, isLike)
      }
    })
  },

  _toggleFavor(pushID, isLike){
    wx.getStorage({
      key: 'likeList',
      success(res) {
        let likeList = res.data;
        if(isLike){
          likeList.push(pushID);
        }else{
          let idx = likeList.indexOf(pushID);
          likeList.splice(idx, 1);
        }
        console.log("likeList: ",likeList)
        wx.setStorage({
          key: 'likeList',
          data: likeList,
        })
      }
    })
    wx.showToast({
      title: isLike ? "已收藏" : "已取消",
      icon: 'success',
      duration: 500
    })
  },

  clickRead(e){
    let cardCur = this.data.cardCur;
    let swiperList = this.data.swiperList;
    let pushID = swiperList[cardCur].push_id
    wx.navigateTo({
      url:  `./article?pushID=${pushID}`,
    })
    // wx.navigateTo({
    //   url: './searchResult?word=' + "奇"
    // })
  },
  onSearchBarFocus(e) {
    wx.navigateTo({
      url: './search'
    })
  },
})