// pages/training/training.js
var app=getApp();
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    precent: 0,
    winWidth: 0,
    winHeigth: 0,
    select_ques: 4,
    judge_ques:3,
    selected: [
      {
        date: '2018-5-21'
      }, {
        date: '2018-5-22'
      },{
        date: '2018-5-24'
      },{
        date: '2018-5-25'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  /**
  * 日历是否被打开
  */
 bindselect(e) {
  console.log(e.detail.ischeck)
},
/**
 * 获取选择日期
 */
bindgetdate(e) {
  let time = e.detail;
  console.log(time)
},

  /*
   * 点击“开始训练”回调函数
   */
  Start:function (){
    wx.navigateTo({
      url: 'SelectQuesType',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '0' })
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

  }
})