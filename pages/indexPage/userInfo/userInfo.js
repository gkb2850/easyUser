// pages/indexPage/userInfo/userInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  toSeeMyCode () {
    wx.navigateTo({
      url: '/pages/indexPage/myCode/myCode',
    })
  },
  toSeeMyMessageInfo () {
    wx.navigateTo({
      url: '/pages/indexPage/personalInfo/personalInfo',
    })
  },
  toSeeUserId () {
    wx.navigateTo({
      url: '/pages/indexPage/submitIDcard/submitIDcard',
    })
  },
  toSeeUserAccount () {
    wx.navigateTo({
      url: '/pages/indexPage/userAccount/userAccount',
    })
  },
  toSetPay () {
    wx.navigateTo({
      url: '',
    })
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