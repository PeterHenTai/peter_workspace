// pages/index/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // articleInfo: {},
    // fontFamily: 'chi-font',
    // loaded: false,
    // cardCur: 0,
    articleInfo:{},
    pushID:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调取数据
    // var cardCur = options.cardCur;
    // console.log("cardCur:"+cardCur);
    // this.setData({
    //   cardCur: cardCur,
    // })
    // var that = this;
    // wx.getStorage({
    //   key: 'swiperList',
    //   success(res) {
    //     var articleInfo = res.data[cardCur]
    //     that.setData({
    //       articleInfo: articleInfo,
    //     }) 
    //   }
    // })
    let pushID = options.pushID;
    // pushID = 2;
    var that = this;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/getpush?pushID=${pushID}`,
      method: "GET",
      success(res){
        that.setData({
          pushID: pushID,
          articleInfo:  res.data,
        })    
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /*
  * 自定义函数
  */
})