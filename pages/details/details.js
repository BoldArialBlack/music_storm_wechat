// pages/square/square.js

// 获取服务器接口地址
const api = require('../../config/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{},
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    // console.log(params);
     // console.log(params.msgId);
    var that = this;

    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    });
   
    wx.request({
      url: api.commentUrl + params.msgId,
      data: {},
      header: {
        'Content-Type': 'application/json',
        'Charset': 'UTF-8'
      }, success: function(res) {
        // console.log(res.data);
        wx.hideToast();

        var arrs = [];
        // console.log(res.data.comments);
        res.data.comments.map(function (item) {
          // arrs.push(item.split(','))
          arrs.push(item);
        })
        // console.log(arrs);

        that.setData({
          post: res.data.post,
          likes: res.data.post.likes,
          comments: arrs
        })
        // console.log(that.comments);
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