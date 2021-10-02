// pages/study/study.js
var LocalBookList;

Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    showTODO:0
  },

  switchToPageStudy_01_from1:function(e){
    wx.navigateTo({
      url: 'studyMainPage',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '0' })
      }
    })
  },

  switchToPageStudy_01_from2:function(e){
    wx.navigateTo({
      url: 'studyMainPage',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '1' })
      }
    })
  },

  switchToPageStudy_01_from3:function(e){
    wx.navigateTo({
      url: 'studyMainPage',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '2' })
      }
    })
  },
  
  switchToPageStudy_01_from4:function(e){
    wx.navigateTo({
      url: 'studyMainPage',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '3' })
      }
    })
  },
  addMore:function (){
    this.setData({
      showTODO:1
    })
  },

  close:function (){
    this.setData({
      showTODO:0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    LocalBookList = require('../../data/book.js');
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