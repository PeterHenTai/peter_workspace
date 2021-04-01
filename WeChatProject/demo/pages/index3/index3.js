// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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

  },

  connectLocal(){
    wx.request({
      url: 'http://localhost:8000/server/message/',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.showModal({
          title: '提示',
          content: res.data,
        })
      },
      fail: function (res) {
        wx.showModal({
          title: '提示',
          content: res.data,
        })
      }
    })
  },
  testLogin(){
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'http://zhiduoshao.xyz:8888/api/login',
            method:"POST",
            data: {
              code: res.code
            },
            success(response) {
              console.log(response.data)
            }
          })
          // console.log(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // wx.openSetting({
    //   success(res) {
    //     console.log(res.authSetting)
    //   }
    // })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
})