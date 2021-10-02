// pages/logMng/register.js
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    acountInfo:{
      acount:"",
      password:""
    },
    info:"info"
  },

  bindAcount:function(e){
    //console.log(e.detail.value);
    this.data.acountInfo.acount = e.detail.value;
  },

  bindPassword:function(e){
    //console.log(e.detail.value);
    this.data.acountInfo.password = e.detail.value;
  },

  switchToVerifyPassword:function(e){
    //console.log(this.data.acountInfo);
    //console.log(this.data.acountInfo);
    var tmpacountInfo = this.data.acountInfo;
    wx.navigateTo({
      url: 'verifyPassword',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: tmpacountInfo})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})