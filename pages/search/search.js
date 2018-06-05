// pages/search/search.js

const api = require('../../config/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musics: []
  },

  search: function (e) {
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });

    var that = this;

    wx.request({
      url: api.getMusicsUrl + e.detail.value,
      data: {},
      header: {
        'Content-Type': 'application/json',
        'Charset': 'UTF-8'
      },
      success: function (res) {
        // console.log(res.data);
        wx.hideToast();

        var arrs = [];
        res.data.music.map(function (item) {
          arrs.push(item);
        });

        that.setData({
          musics: arrs
        });
      }
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