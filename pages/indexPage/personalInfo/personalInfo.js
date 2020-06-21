// pages/indexPage/personalInfo/personalInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameBoxShow: false,
    years: [],
    months: [],
    days: [],
    dateBoxShow: false,
    briDay: ''
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

    for (let i = 1960; i<= date.getFullYear(); i++) {
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
  bindChangeDate (e) {
    console.log(e)
    let arrayIndex = e.detail.value
    this.setData({
      briDay: this.data.years[arrayIndex[0]] + this.data.months[arrayIndex[1]] + this.data.days[arrayIndex[2]]
    })
  },
  toSelectAddress () {
    wx.navigateTo({
      url: '/pages/indexPage/useraddress/useraddress',
    })
  },
  toChangeBriDay () {
    this.setData({
      dateBoxShow: true
    })
  },
  hideDateBox () {
    this.setData({
      dateBoxShow: false
    })
  },
  toSubmitBriDay () {
    let data = {
      userId: wx.getStorageSync('userInfo').user.id,
      birthday: this.data.briDay.toString()
    }
    app.ajax.userBrigthdayFeatch(data).then(res => {
      if (res.code === 200) {
        app.alert.error('修改成功')
      } else {
        app.alert.error(res.msg)
      }
      this.setData({
        dateBoxShow: false
      })
    }).catch(err => {
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