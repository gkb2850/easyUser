// pages/indexPage/personalInfo/personalInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameBoxShow: false,
    years: [],
    months: [],
    days: [],
    dateBoxShow: false
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
    let date = new Date()
    let years = []
    let months = []
    let days = []

    for (let i = 1990; i<= date.getFullYear(); i++) {
      years.push(i)
    }

    for(let i = 1; i <= 12; i++) {
      if (i < 10) {
        months.push('0' + i)
      } else {
        months.push(i)
      }
    }

    for(let i = 1; i <= 31; i++) {
      if (i < 10) {
        days.push('0' + i)
      } else {
        days.push(i)
      }
    }
    this.setData({
      years,
      months,
      days
    })
  },
  bindChangeDate () {},
  toSelectAddress () {
    wx.navigateTo({
      url: '/pages/indexPage/useraddress/useraddress',
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