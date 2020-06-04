// component/searchItem/searchItem.js
const app = getApp();
const recorderManager = wx.getRecorderManager();
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
    speechType: false,
    intervalTime: ''
  },

  /**
   * 组件的方法列表
   */
  attached: function () {
    
  },
  methods: {
    yuyinClick () {

    },
    handleTouchStart (e) {
      let date = new Date()
      let timef = date.getTime()
      let intervalTime = setInterval(() => {
        let dates = new Date()
        let times = dates.getTime()
        if ((times - timef) < 500 ) {
          this.setData({
            speechType: false
          })
          return
        } else {
          clearInterval(intervalTime)
          this.setData({
            speechType: true
          })
          this.startSpeech()
        }
      }, 100)
      this.setData({
        intervalTime
      })
    },
    startSpeech () {
      //录音参数
      const options = {
        sampleRate: 16000,
        numberOfChannels: 1,
        encodeBitRate: 48000,
        format: 'PCM'
      }
      //开启录音
      recorderManager.start(options);
      app.alert.loading('正在识别中...')
    },
    handleTouchEnd: function (e) {
      clearInterval(this.data.intervalTime)
      if (this.data.speechType) {
        recorderManager.stop();
        this.bindRecorderStopEvent()
      } else {
        app.alert.error('未识别到语音信息0')
      }
    },
    bindRecorderStopEvent () {
      recorderManager.onStop((res) => {
        let baiduBccessToken = wx.getStorageSync("baidu_yuyin_access_token");
        let tempFilePath = res.tempFilePath;//音频文件地址
        const fs = wx.getFileSystemManager();
        fs.readFile({
          filePath: tempFilePath,
          success (res) {
            const base64 = wx.arrayBufferToBase64(res.data);
            let fileSize = res.data.byteLength;
            let data = {
              format: 'pcm',
              rate: 16000,
              channel: 1,
              cuid: 'sdfdfdfsfs',
              token: baiduBccessToken,
              speech: base64,
              len: fileSize
            }
            console.log(app.ajax)
            app.ajax.speechUrl(data).then(res => {
              app.alert.closeLoading();
              let result = res.data.result;
              if (result.length === 0) {
                app.alert.error('未识别到语音信息1')
                return
              }
              app.alert.error(result[0])
            }).catch(err => {
              app.alert.error('未识别到语音信息2')
            })
          },
        })
      })
    }
  }
})
