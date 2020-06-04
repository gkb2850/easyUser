//app.js
import * as Ajax from './http/index.js'
import * as Alert from './utils/alert.js'
App({
  ajax: Ajax,
  alert: Alert,
  manager: requirePlugin("WechatSI").getRecordRecognitionManager(),
  onLaunch: function () {
    

    this.globalData = {
      baiduyuyin: {
        apiKey: 'X9O05fD4GH4k2nWGCzbrwcTc',
        secretKey: 'nZpyYCoKYj3G2ImfaM45sY8p71gLbWbl',
        url:'https://aip.baidubce.com/oauth/2.0/token'
      }
    }




    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onShow (options) {
    this.getBaiduYuyinAccessToken()
  },
  //初始化语音识别 baiduBccessToken
  initBaiduYuyinAccessToken: function () {
    var that = this;
    var baiduBccessToken = wx.getStorageSync("baidu_yuyin_access_token");
    if (baiduBccessToken == undefined || baiduBccessToken == '') {
      that.getBaiduYuyinAccessToken();
    } else {
      var baiduTime = wx.getStorageSync("baidu_yuyin_time");
      var timeNum = new Date(parseInt(new Date().getTime() - baiduTime) * 1000).getDay();
      if (timeNum > 28) {
        that.getBaiduAccessToken();
      }
    }
  },
  getBaiduYuyinAccessToken: function () {
    var that = this;
    var baiduyuyin = that.globalData.baiduyuyin;
    console.log(baiduyuyin);
    wx.request({
      url: baiduyuyin.url,
      data: {
        grant_type: 'client_credentials',
        client_id: baiduyuyin.apiKey,
        client_secret: baiduyuyin.secretKey
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        wx.setStorageSync("baidu_yuyin_access_token", res.data.access_token);
        wx.setStorageSync("baidu_yuyin_time", new Date().getTime());
      }
    })
  },
})