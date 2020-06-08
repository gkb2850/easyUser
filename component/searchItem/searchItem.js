// component/searchItem/searchItem.js
const app = getApp();
var plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    search: '',
    setVioceBoxShow: false,
    voiceStartType: false,
    vioceShowBox: false,
    vioceTxt: '聆听中...'
  },

  /**
   * 组件的方法列表
   */
  attached: function () {
    this.recordInit()
  },
  methods: {
    yuyinClick () {
      console.log('click')
    },
    recordInit () {
      let that = this
      manager.onRecognize = function (res) {
        console.log("current result", res.result)
      }
      manager.onStop = function (res) {
        console.log("record file path", res.tempFilePath)
        console.log("result", res.result.slice(0, res.result.length))
        that.setData({
          vioceShowBox: false
        })
        if (res.duration < 500) {
          app.alert.error('录音时间太短，请重试!')
        } else {
          if (res.result === '') {
            app.alert.error('没听清楚，请重试!')
          } else {
            that.setData({
              search: res.result.slice(0, res.result.length - 1)
            })
          }
        }
      }
      manager.onStart = function (res) {
        console.log("成功开始录音识别", res)
        console.log(that.data.voiceStartType)
        if (!that.data.voiceStartType) {
          manager.stop()
          app.alert.error('暂停录音')
        }
      }
      manager.onError = function (res) {
        console.error("error msg", res.msg)
      }
    },
    handleTouchStart (e) {
      let that = this
      let voiceQX = wx.getStorageSync('voiceNumType') || 0;
      if (this.data.vioceShowBox) {
        return;
      }
      wx.getSetting({
        success (res) {
          console.log(res)
          if (res.authSetting['scope.record']) {
            app.alert.error('请长按识别语音')
          } else {
            wx.authorize({
              scope: 'scope.record',
              success() {
                app.alert.error('请长按识别语音')
              },
              fail () {
                if (voiceQX === 0) {
                  app.alert.error('您取消了授权，请稍后再试')
                  wx.setStorageSync('voiceNumType', 1)
                } else {
                  that.setData({
                    setVioceBoxShow: true
                  })
                }
              }
            })
          }
        } 
      })
    },
    handleLongTap () {
      this.startVoice()
    },
    startVoice () {
      console.log('bigin')
      this.setData({
        vioceTxt: '聆听中...',
        voiceStartType: true
      })
      //录音参数
      const options = {
        lang: "zh_CN"
      }
      //开启录音
      manager.start(options);
      this.setData({
        vioceShowBox: true
      })
    },
    handleTouchEnd: function (e) {
      console.log(e.timeStamp + 'touchend')
      this.setData({
        vioceTxt: '识别中...'
      })
      if (this.data.voiceStartType) {
        manager.stop();
      }
      setTimeout(() => {
        this.setData({
          voiceStartType: false
        })
      },200)
    },
    toCancelVioceSet () {
      this.setData({
        setVioceBoxShow: false
      })
    },
    toSureVioceSet () {
      let that = this
      this.setData({
        setVioceBoxShow: false
      })
      wx.openSetting({
        success(res) {
          console.log(res.authSetting)
          if (res.authSetting['scope.record']) {
            app.alert.error('已允许录音权限，可以长按录音体验了')
          } else {
            app.alert.error('检测还没打开录音权限，请重试')
          }
        }
      })
    },
  }
})
