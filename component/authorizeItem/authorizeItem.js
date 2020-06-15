// component/authorizeItem/authorizeItem.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleTxt: {
      type:String,
      value: '检测到您没有打开保存位置权限，是否去设置打开？'
    },
    setBoxShow: {
      type: Boolean,
      value: false
    },
    authorStr: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toCancelSet () {
      let that = this
      app.alert.error('您取消授权，请重试')
      let obj = {
        str: that.data.authorStr,
        status: false
      }
      that.triggerEvent('toSetAuthor', obj)
    },
    toSureSet () {
      let that = this
      wx.openSetting({
        success: res => {
          let strtxt = 'scope.' + that.data.authorStr
          if (res.authSetting[strtxt]) {
            app.alert.error('用户完成授权')
            let obj = {
              str: that.data.authorStr,
              status: true
            }
            that.triggerEvent('toSetAuthor', obj)
          } else {
            app.alert.error(that.data.titleTxt)
          }
        }
      })
    },
  }
})
