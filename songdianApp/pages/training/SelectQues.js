// pages/training/SelectQues.js
var localQues = require("../../data/SelectQ.js");
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
      question:"《素问·水热穴论》称“胃之关”是",
      items: [
        { name: '1', value: 'A. 胆'},
        { name: '2', value: 'B. 胃'},
        { name: '3', value: 'C. 食道'},
        { name: '4', value: 'D. 肾'},
      ],
      is_true:0,
      is_false:0,
      is_end:0,
      ok_or_next:1,
      userAns:0,
      ans:'B',
      totalQues:4,
      currentQues:0,
      nextQues:0,
      score:0,
      rightCnt:0,
      showEnd:0
  },

  /* 记录用户输入的答案 */
  radioChange: function (e) {
    this.setData({
      userAns:e.detail.value
    });
  },

  /* 点击‘确定’按钮 */
  ok_btn:function(e){
    if (this.data.userAns == localQues.QuesList[this.data.nextQues].ans){
      console.log("true");
      this.setData({
        is_true:1,
        score:this.data.score+2
      });
      this.data.rightCnt++;
    }
    else{
      console.log("false");
      this.setData({is_false:1});
      if(localQues.QuesList[this.data.nextQues].ans == 1){
        this.setData({ans:'A'});
      }
      else if ( localQues.QuesList[this.data.nextQues].ans == 2){
        this.setData({ans:'B'});
      }
      else if ( localQues.QuesList[this.data.nextQues].ans == 3){
        this.setData({ans:'C'});
      }
      else{
        this.setData({ans:'D'});
      }
    }
    this.setData({
      ok_or_next:0,
      currentQues:this.data.currentQues+1
    });
  },

  /* 点击‘下一个’按钮 */
  next_btn:function(e){
    this.data.nextQues++;
    if (this.data.nextQues == this.data.totalQues){
      this.setData({
        showEnd:1
      })
    }
    else{
      this.setData({
        is_true:0,
        is_false:0,
        ok_or_next:1,
        question:localQues.QuesList[this.data.nextQues].title,
        items:localQues.QuesList[this.data.nextQues].items
      });
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