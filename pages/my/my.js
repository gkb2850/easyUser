// pages/my/my.js
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
  toSeeMessageorGg () {
    wx.navigateTo({
      url: '/pages/myPage/messagePage/messagePage',
    })
  },
  toSeeMessge () {
    wx.navigateTo({
      url: '/pages/myPage/messagePageUser/messagePageUser',
    })
  },
  toSeeRedWallet (e) {
    let index = e.currentTarget.dataset.index
    if (index === '1') {
      wx.navigateTo({
        url: '/pages/myPage/myRedWallent/myRedWallent',
      })
    } else if (index === '2') {
      wx.navigateTo({
        url: '/pages/myPage/selectRedWallet/selectRedWallet',
      })
    } else if (index === '3') {
      wx.navigateTo({
        url: '/pages/myPage/accountRedWallet/accountRedWallet',
      })
    }
  },
  toSeeMyInvit () {
    wx.navigateTo({
      url: '/pages/myPage/myInvitaition/myInvitaition',
    })
  },
  toSeeMyWallet () {
    wx.navigateTo({
      url: '/pages/myPage/myWallet/myWallet',
    })
  },
  toSeeOrder (e) {
    let index = e.currentTarget.dataset.index
    if (index === '1') {
      wx.navigateTo({
        url: '/pages/orderPage/orderListPage/orderListPage',
      })
    } else if (index === '2') {
      wx.navigateTo({
        url: '/pages/orderPage/orderListPage/orderListPage',
      })
    } else if (index === '3') {
      wx.navigateTo({
        url: '/pages/orderPage/orderListPage/orderListPage',
      })
    } else if (index === '4') {
      wx.navigateTo({
        url: '/pages/orderPage/orderListPage/orderListPage',
      })
    } else if (index === '0') {
      wx.navigateTo({
        url: '/pages/orderPage/orderListPage/orderListPage',
      })
    }
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