// component/messageItem/messageItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    messageShow: {
      type:Boolean,
      value: false
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
    hideMessageBox () {
      this.setData({
        messageShow: false
      })
      let obj = {
        messageShow: false
      }
      this.triggerEvent("messageBtnClick", obj)
    },
    selectMessage () {

    }
  }
})
