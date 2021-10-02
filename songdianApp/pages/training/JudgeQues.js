// pages/training/JudgeQues.js
var localJudgeQues = require("../../data/JudgeQ.js");
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    question:'《素问·玉机真脏论》说：“脉盛、皮热、腹胀、前后不通、闷瞀，此谓五证',
    is_true:0,
    is_false:0,
    totalQues:3,
    currentQues:0,
    score:0,
    btn_next_valid:0,
    showEnd:0
  },

  btn_right:function(){
    if(localJudgeQues.QuesList[this.data.currentQues].ans == 1){
      this.setData({
        btn_next_valid:1,
        is_true:1,
        score:this.data.score+1
      })
    }
    else{
      this.setData({
        btn_next_valid:1,
        is_false:1
      })
    }
    this.setData({
      currentQues:this.data.currentQues+1
    })
  },

  btn_wrong:function(){
    if(localJudgeQues.QuesList[this.data.currentQues].ans == 0){
      this.setData({
        btn_next_valid:1,
        is_true:1,
        score:this.data.score+1
      })
    }
    else{
      this.setData({
        btn_next_valid:1,
        is_false:1
      })
    }
    this.setData({
      currentQues:this.data.currentQues+1
    })
  },

  btn_next:function(){
    if (this.data.currentQues == this.data.totalQues){
      this.setData({
        showEnd:1
      })
    }
    else{
      this.setData({
        btn_next_valid:0,
        is_true:0,
        is_false:0,
        question:localJudgeQues.QuesList[this.data.currentQues].title
      })
    }
  },

  /* 答完完点击‘退出’ */
  quitTest: function () {
    this.setData({
      showEnd:0
    })
    wx.reLaunch({
      url: '../../pages/training/training',
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