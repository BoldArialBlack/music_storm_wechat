//index.js

// 获取服务器接口地址
const api = require('../../config/config.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    title: "加载中",
    posts: {}
  },
  onLoad: function(){
    let that = this;
    wx.showToast({
      title: '加载中...',
      icon: "loading",
      duration: 10000
    });

    wx.request({
      url: api.postUrl,
      data: {},
      header: {
        'Content-Type': 'application/json',
        'Charset': 'utf-8'
      },
      success: function(res) {
        var arrs = [];
        // console.log(res.data);
        wx.hideToast();
        var data = res.data;
        // console.log(data);
        data.post.map(function(item) {
          // arrs.push(item.split(','))
          arrs.push(item);
        })
        // console.log(arrs);
        that.setData({
          title: "广场",
          posts: arrs
        });
      }
    });
  }
  /*
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  */
})
