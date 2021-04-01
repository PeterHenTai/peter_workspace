//app.js
const Promise = require('bluebird.core.min.js');
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    
    // 获取用户信息
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
              that.globalData.userInfo = res.userInfo;
            }
          })
        }
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowWidth = res.windowWidth
        that.globalData.windowHeight = res.windowHeight
      }
    });

  },
  login:function(){
    let that = this;
    // 登录
    return new Promise(
      function(resolve,reject){
        wx.login({
        success(res) {
          if (res.code) {
            // 发起网络请求
            wx.request({
              url: 'http://zhiduoshao.xyz:8888/api/login',
              method: "POST",
              data: {
                code: res.code
              },
              success(response) {
                // console.log(response.data)
                resolve(response.data)
                that.globalData.userID = response.data.userid;
              }
            })

            // // 获取学习设置
            // wx.request({
            //   url: 'http://zhiduoshao.xyz:8888/api/login',  // 待定
            //   method: "GET",
            //   data: {
            //     code: res.code
            //   },
            //   success(response) {
            //     resolve(response.data)
            //     that.globalData.me = response.data.me
            //   }
            // })

            
            // console.log(res.code)
          } else {
            // console.log('登录失败！' + res.errMsg)
            reject(response.errMsg)
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    userID: 0,

    windowWidth: 0,
    windowHeigth: 0,
    /*
    这些东西需要
    */
    studyTime: 0, // 当日学习时长
    me: {
      setting: {
        wordsOld: 15,
        wordsTodo: 20,
      }
    },
    rankIndex: 5,
  }
})