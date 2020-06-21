// pages/indexPage/userAccount/userAccount.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
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
  toChangePhone () {
    wx.navigateTo({
      url: '/pages/indexPage/changePhone/changePhone',
    })
  },
  toChangePass () {
    wx.navigateTo({
      url: '/pages/indexPage/changePassword/changePassword',
    })
  },
  getUserInfo () {
    let data = {
      userId: wx.getStorageSync('userInfo').user.id
    }
    app.alert.loading()
    app.ajax.userInfoDataFeatch(data, 'formType').then(res => {
      app.alert.closeLoading();
      console.log(res)
      if (res.code === 200) {
        this.setData({
          userInfo: res.user
        })
      } else {
        app.alert.error(res.msg)
      }
    }).catch(err => {
      app.alert.closeLoading();
      app.alert.error(err.msg)
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