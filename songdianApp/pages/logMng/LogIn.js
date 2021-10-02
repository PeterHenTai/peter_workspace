// pages/logMng/LogIn.js
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    acount:{
      acountID:"",
      acountPassword:""
    },
    toast: false,
    warnToast: false,
    hideToast: false,
    hideWarnToast: false,
  },

  bindID:function(e){
    this.data.acount.acountID = e.detail.value
  },

  bindPassword:function(e){
    this.data.acount.acountPassword = e.detail.value
  },

  /* 登录成功提示 */
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
            // wx.reLaunch({
            //   url: '../../pages/mine/mine',
            // })
        }, 30);
    }, 1000);
  },

  /* 登录失败提示 */
  openWarnToast: function() {
    this.setData({
        warnToast: true
    });
    setTimeout(() => {
        this.setData({
            hidewarnToast: true
        });
        setTimeout(() => {
            this.setData({
                warnToast: false,
                hidewarnToast: false,
            });
        }, 300);
    }, 1000);
},

  ok_and_login:function(e){
    console.log(this.data.acount.acountID);
    if(this.data.acount.acountID != 0) {
      this.openToast();
    }
    else{
      this.openWarnToast();
    }
    // var tmpAcount = this.data.acount;
    // var p_this = this;
    // wx.request({
    //   url: 'http://...www/runxiang_yiyao/Mobile/Index/login',
    //   method: 'get',
    //   data:tmpAcount,
    //   header: {
    //   "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     if (res.userInfo.true){
    //       p_this.openToast();
    //       wx.setStorage({
    //         key:"userAcount",
    //         data:"res.UserInfo"
    //       });
    //       wx.reLaunch({
    //         url: '../../pages/mine/mine',
    //       })
    //     }
    //     else{
    //       p_this.openToast();
    //       wx.reLaunch({
    //         url: '../../pages/mine/mine',
    //       });
    //     }
    //   },
    //   fail:function (res) {
    //     console.log(res)
    //   }
    // })
    
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