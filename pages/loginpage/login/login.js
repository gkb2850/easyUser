// pages/loginpage/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginData:{
      phone: '',
      pass: ''
    },
    numPhone:'853'
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
  toRegisterPage () {
    wx.navigateTo({
      url: '/pages/loginpage/register/register',
    })
  },
  forgetPassPage () {
    wx.navigateTo({
      url: '/pages/loginpage/forgetpass/forgetpass',
    })
  },
  selectPhone (e) {
    this.setData({
      numPhone: e.detail.num
    })
  },
  phoneInput (e) {
    let value = e.detail.value
    if (!(/^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/.test(value))) {
      app.alert.error('请填写正确的号码')
      return
    }
    this.setData({
      'loginData.phone': value
    })
  },
  passInput (e) {
    this.setData({
      'loginData.pass': e.detail.value
    })
  },
  toLogin () {
    if (this.data.loginData.phone === '') {
      app.alert.error('请输入手机号码')
      return
    }

    if (this.data.loginData.pass === '') {
      app.alert.error('请输入登录密码')
      return
    }
    let data = {
      cpassword: this.data.loginData.pass,
      registerChannel: '3',
      tel: this.data.loginData.phone,
      telType: this.data.numPhone
    }
    app.ajax.loginFeatch(data).then(res => {
      console.log(res)
      if (res.code === 200) {
        app.alert.error('登录成功')
        wx.setStorageSync('userInfo', res.data)
        setTimeout(() =>{
          wx.reLaunch({
            url:'/pages/index/index'
          })
        }, 500)
      } else {
        app.alert.error(res.msg)
      }
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