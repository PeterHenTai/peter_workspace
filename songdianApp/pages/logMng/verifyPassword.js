// pages/logMng/vrifySecert.js
Page({
  mixins: [require('../../mixin/themeChanged')],

  /**
   * 页面的初始数据
   */
  data: {
    last_input_acount:{
      acount:"",
      password:""
    },
    verify_password:"password",
    toast:false,
    untoast:false
  },

  bindVerifyPassword:function(e){
    this.setData({
      verify_password:e.detail.value
    })
  },

  /* 密码不一致提示 */
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

  /* 点击确定 */
  verify:function(e){
    if(this.data.last_input_acount.password != this.data.verify_password){
      this.openToast();
    }
    else{
      var tmpacountInfo = this.data.last_input_acount;
      console.log(tmpacountInfo);
      wx.navigateTo({
        url: 'verifyCode',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: tmpacountInfo})
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel();
    var p_this = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      //console.log(data);
      p_this.setData({
        last_input_acount:data.data
      })
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