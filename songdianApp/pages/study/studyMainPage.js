// pages/study/study_01.js
var localData;
var localEntry;
var appInstance = getApp();
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    entry_class:"示例条目",
    entry_from:"这里展示出处",
    entry_field:"这里介绍详细条目的完整信息",
    nextEntry:0,
    totalEntry:0,
    gotEntry:0,
    isEnd:0,
    soucangIconUrl:'../../images/soucang.png',
    showSouCangIcon:0,
    showSouCangSucess:0,
    toast:false,
    untoast:false
  },

  

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel();
    var p_this = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      localEntry = require("../../data/book.js");
      p_this.setData({
        totalEntry:localEntry.bookList[data.data].totalEntry
      });
      switch(data.data){
        case '0':
          localData = require("../../data/HuangDiNeiJing.js");
          break;
        case '1':
          localData = require("../../data/ShangHanLun.js");
          break;
        case '2':
          localData = require("../../data/JinKuiYaoLue.js");
          break;
        case '3':
          localData = require("../../data/WenBingXue.js");
          break;
        default:
          console.log("no data");
          break;
      };
    })
  },
  
  /* 点击‘下一条’回调函数 */
  NextEntryCb: function(){
    this.setData({
      entry_class:localData.dataList[this.data.nextEntry].class,
      entry_field:localData.dataList[this.data.nextEntry].field,
      entry_from:localData.dataList[this.data.nextEntry].from,
      showSouCangIcon:1,
      soucangIconUrl:'../../images/soucang.png'
    });
    if (this.data.gotEntry >= this.data.totalEntry){
      this.data.nextEntry = 0;
      this.setData({
        isEnd:1
      });
    }
    else{
      this.setData({
        gotEntry:this.data.nextEntry+1
      });
    }
    this.data.nextEntry++;
  },

  /* 识记完点击‘退出’ */
  quitStudy: function () {
    this.setData({
      isEnd:0
    })
    wx.reLaunch({
      url: '../../pages/study/study',
    })
  },

  /* 识记完点击‘再记一遍’ */
  studyAgain: function () {
    this.setData({
      isEnd:0,
      entry_class:localData.dataList[0].class,
      entry_field:localData.dataList[0].field,
      entry_from:localData.dataList[0].from,
      gotEntry:0,
      nextEntry:0
    })
  },

  /* 收藏提示 */
  openToast: function() {
    this.setData({
        toast: true
    });
    setTimeout(() => {
        this.setData({
            hideToast: true
        });
        setTimeout(() => {
            this.setData({
                toast: false,
                hideToast: false,
            });
        }, 30);
    }, 1000);
  },

  /* 取消收藏提示 */
  openunToast: function() {
    this.setData({
        untoast: true
    });
    setTimeout(() => {
        this.setData({
            hideToast: true
        });
        setTimeout(() => {
            this.setData({
                untoast: false,
                hideToast: false,
            });
        }, 30);
    }, 1000);
  },

  /* 点击收藏图标 */
  clickSouCang: function () {
    if(!this.data.showSouCangSucess){//收藏
      this.data.showSouCangSucess = 1;
      this.openToast();
      this.setData({
        soucangIconUrl:'../../images/soucang-select.png'
      });
    }
    else{//取消收藏
      this.data.showSouCangSucess = 0;
      this.openunToast();
      this.setData({
        soucangIconUrl:'../../images/soucang.png'
      });
    }
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