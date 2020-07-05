// pages/loginpage/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    registerData: {
      phone:'',
      passF:'',
      passS: '',
      yqCode: '',
      codeNum: ''
    },
    numPhone: '853',
    labelTxt: '请选择入驻分类'
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
  toLoginPage () {
    wx.navigateTo({
      url: '/pages/loginpage/login/login',
    })
  },
  selectPhone (e) {
    let data = e.detail
    console.log(e)
    if (data.str === 'register') {
      this.setData({
        numPhone: data.num
      })
    }
  },
  numPhoneInput (e) {
    let value = e.detail.value
    if (!(/^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/.test(value))) {
      this.setData({
        'registerData.phone': ''
      })
      app.alert.error('请填写正确的号码')
      return
    }
    this.setData({
      'registerData.phone': value
    })
  },
  numCodeInput (e) {
    this.setData({
      'registerData.codeNum': e.detail.value
    })
  },
  passInput (e) {
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    console.log(type)
    console.log(value)
    console.log(this.data.registerData.passF)
    if (type === 'f') {
      this.setData({
        'registerData.passF': value
      })
    } else if (type === 's') {
      if (this.data.registerData.passF !== value) {
        this.setData({
          'registerData.passS': ''
        })
        app.alert.error('两次密码不一致，请重试')
        return
      }
      this.setData({
        'registerData.passS': value
      })
    }
  },
  codeInput (e) {
    this.setData({
      'registerData.yqCode': e.detail.value
    })
  },
  toRegisterNow () {
    if (this.data.registerData.phone === '') {
      app.alert.error('请输入手机号')
      return
    }
    console.log(this.data.registerData)
    if (this.data.registerData.passS === '') {
      app.alert.error('请输入密码')
      return
    }

    let data = {
      cpassword: this.data.registerData.passS,
      invitationCode: this.data.registerData.yqCode,
      tel: this.data.registerData.phone,
      telType: this.data.numPhone,
      registerChannel: '3'
    }
    app.ajax.registerFeatch(data).then(res => {
      console.log(res)
      if (res.code === 200) {
        app.alert.error('注册成功')
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/loginpage/login/login',
          })
        }, 500)
      } else {
        app.alert.error(res.msg)
      }
    }).catch(err => {
      console.log(err)
      app.alert.error(err.msg)
    })
  },
  toGetPhoneCode () {
    if (this.data.registerData.phone === '') {
      app.alert.error('手机号不能为空')
      return
    }

    let data = {
      userId: 1,
      tel: this.data.registerData.phone,
      telType: this.data.numPhone
    }
    app.ajax.getPhoneCodeFeach(data, 'fromType').then(res => {
      app.alert.error('短信发送成功')
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