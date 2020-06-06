//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerIconShow: false
  },
  onLoad: function () {
    
  },
  toSeeMoreIcon () {
    this.setData({
      headerIconShow: !this.data.headerIconShow
    })
  },
  toSeeUserShare () {
    wx.navigateTo({
      url: '/pages/indexPage/userShare/userShare',
    })
  },
  toSetIndexType () {
    this.setData({
      headerIconShow: false
    })
    wx.navigateTo({
      url: '/pages/indexPage/indexSetandcoll/indexSetandcoll',
    })
  },
  toSeeUserInfo () {
    wx.navigateTo({
      url: '/pages/indexPage/userInfo/userInfo',
    })
  },
})
