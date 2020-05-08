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
})
