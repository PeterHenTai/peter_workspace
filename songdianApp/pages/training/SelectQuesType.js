// pages/training/SelectQuesType.js
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    items: [
        { name: '1', value: '选择题'},
        { name: '2', value: '判断题'},
    ],
    quesPageUrl:'noPage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  radioChange: function (e) {
    if(e.detail.value == 1){
      this.setData({
        quesPageUrl:'SelectQues'
      })  
    }
    else{
      this.setData({
        quesPageUrl:'JudgeQues'
      })
    }
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
 },

 StartTrain:function(e){
  wx.navigateTo({
    url: this.data.quesPageUrl,
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
    console.log("onload");
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