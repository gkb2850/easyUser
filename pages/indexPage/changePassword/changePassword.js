// pages/indexPage/changePassword/changePassword.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passData:{
      oldPass:'',
      newPass:'',
      newsPass: ''
    }
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
  toSubmitPass () {
    console.log(this.data.passData)
    if (this.data.passData.newPass !== this.data.passData.newsPass) {
      app.alert.error('两次输入密码不一致')
      return
    }

    if (this.data.passData.oldPass === '') {
      app.alert.error('原密码不能为空')
      return
    }
    if (this.data.passData.newsPass === '') {
      app.alert.error('请输入新密码')
      return
    }

    let data = {
      userId: wx.getStorageSync('userInfo').user.id,
      cpassword: this.data.passData.oldPass,
      newCpassword: this.data.passData.newsPass
    }
    app.ajax.changePassFeatch(data).then(res => {
      if (res.code === 200) {
        app.alert.error('修改成功')
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 500)
      } else {
        app.alert.error(res.msg)
      }
    }).catch(err => {
      app.alert.error(err.msg)
    })
  },
  passInput (e) {
    let type = e.currentTarget.dataset.str
    let value = e.detail.value
    switch (type) {
      case 'old': 
      this.setData({
        'passData.oldPass': value
      })
      break;
      case 'new': 
      this.setData({
        'passData.newPass': value
      })
      break;
      case 'news': 
      if (this.data.passData.newPass !== value) {
        app.alert.error('两次输入密码不一致');
        this.setData({
          'passData.newsPass': ''
        })
        return
      }
      this.setData({
        'passData.newsPass': value
      })
      break;
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