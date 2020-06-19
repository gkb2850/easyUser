// pages/indexPage/useraddress/useraddress.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageBackStatus: false,
    adressList: []
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
    this.getUserAddress()
  },
  toUserMessageInfo (e) {
    let item = e.currentTarget.dataset.item
    if (this.data.pageBackStatus) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.setStorageSync('addressItem', item)
      wx.navigateTo({
        url: '/pages/indexPage/editUserAddress/editUserAddress?type=edit',
      })
    }
  },
  toAddressAdd () {
    wx.navigateTo({
      url: '/pages/indexPage/editUserAddress/editUserAddress?type=add',
    })
  },
  getUserAddress () {
    let data = {
      userId: wx.getStorageSync('userInfo').user.id
    }
    app.ajax.addressListFeatch(data, 'formType').then(res => {
      console.log(res)
      if (res.code === 200) {
        this.setData({
          adressList: res.adressList
        })
      } else {
        app.alert.error(res.msg)
      }
    }).catch(err => {
      app.alert.error(err.msg)
    })
  },
  addressClickBtn (e) {
    let type = e.currentTarget.dataset.type
    let addressdata = e.currentTarget.dataset.addressdata
    console.log(addressdata)
    if (type === 'edit') {
      wx.navigateTo({
        url: '/pages/indexPage/editUserAddress/editUserAddress?addressId=' + addressdata.id,
      })
    } else {
      let data = {
        userId: addressdata.id
      }
      app.ajax.addressUserDelFeatch(data, 'formType').then(res => {
        if (res.code === 200) {
          app.alert.error('删除成功')
          this.getUserAddress()
        } else {
          app.alert.error(res.msg)
        }
      }).catch(err => {
        app.alert.error(err.msg)
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