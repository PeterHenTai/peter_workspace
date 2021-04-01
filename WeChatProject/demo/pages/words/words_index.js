// pages/words_index/words_index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    precent: 0,
    winWidth: 0,
    winHeigth: 0,
    word_learing: 123,
    word_learned: 200,
    word_unlearn: 200,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data = this.data;
    /*
      请求背词状态也信息
    */


    var precent = data.word_learned / (data.word_learing + data.word_learned + data.word_unlearn) * 100
    precent = Math.round(precent)
    
    that.setData({
      precent: precent
    })

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeigth: res.windowHeight
        })
      }
    });
    
  },

  clickStudy: function() {
    wx.navigateTo({
      url: './words_module/words_study',
    })
  },
})