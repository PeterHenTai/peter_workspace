// pages/index4/schedule.js

// For the charts
var wxCharts = require('./wxcharts.js');
var util4 = require('./util4.js')
var app = getApp();
var lineChart = null;

const numdays = 7;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 看来做每本书的学习进度是没有办法了
    // section: [
    //   {
    //     name: "七年级上册",
    //     progress: 70,
    //   },
    //   {
    //     name: "七年级下册",
    //     progress: 30,
    //   },
    //   {
    //     name: "八年级上册",
    //     progress: 50
    //   }
    // ],

    // 这里记录了每天学习的词汇数量，这里我还是改成学习时间好了
    numbers: [],
    canvasWidth: 320,
    canvasHeight: 200,
  },

  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + '    ' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 10; i++) {
      categories.push('2016-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },

  // 返回过去 N (numdays) 天的学习时间，从服务器获取数据
  getData: function() {
    var that = this;

    var nums;
    // 在 url 里填写 userID，get 可以用这种方式来获取特定用户的信息
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/schedule?user_id=${app.globalData.userID}`,
      method: 'GET',
      success(res) {
        var zeros = new Array(numdays).fill(0);
        var raw = res.data.numbers;
        nums = zeros.concat(raw);
        var len = nums.length;
        nums = nums.slice(len - numdays, len);
        console.log(nums);
        that.setData({
          numbers: nums,
        });
        // console.log(res);
        var categories = util4.last_days(numdays).reverse();
        return {
          categories: categories,
          data: nums,
        }
      },
      fail(res) {
        return {
          categories: -1,
          data: -1,
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 把代码写成这个样子我能怎么办，我也很无奈啊
  onLoad: function (options) {
    var that = this;

    // Control the canvas size (Coz canvas can only be manipulated correctly by `px`)
    let cvsWidth = 0;
    let cvsHeight = 0;
    try {
      let res = wx.getSystemInfoSync();
      cvsWidth = res.windowWidth;
      cvsHeight = res.screenHeight / 2;
    } catch (e) {
      // do something when get system info failed
      cvsWidth = 320;
      cvsHeight = 200;
    } finally {
      // 
    }

    that.setData({
      canvasWidth: cvsWidth,
      canvasHeight: cvsHeight,
    })

    // var data = that.getData();
    var nums;
    var data;
    wx.request({
      url: `http://zhiduoshao.xyz:8888/api/schedule?user_id=${app.globalData.userID}`,
      method: 'GET',
      success(res) {
        var zeros = new Array(numdays).fill(0);
        var raw = res.data.numbers;
        nums = zeros.concat(raw);
        var len = nums.length;
        nums = nums.slice(len - numdays, len);
        console.log(nums);
        that.setData({
          numbers: nums,
        });
        // console.log(res);
        var categories = util4.last_days(numdays).reverse();
        // return {
        //   categories: categories,
        //   data: nums,
        // }
        data = {
          'categories': categories,
          'data': nums,
        }
        console.log(data);
        lineChart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',

          categories: data.categories,
          series: [{
            name: '过去一周的学习时长',
            // 这里传数据的方式无解啊
            data: data.data,
            format: function (val) {
              return val.toFixed(1);
            }
          },
          ],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '（分钟）',
            format: function (val) {
              return val.toFixed(0);
            },
            min: 0
          },
          width: cvsWidth,
          height: cvsHeight,
          extra: {
            lineStyle: 'curve'
          },
          // Set the background color
          background: '#F1F1F1',
        });
      },
      fail(res) {
        return {
          categories: -1,
          data: -1,
        }
      }
    })

    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
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

  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  }
})