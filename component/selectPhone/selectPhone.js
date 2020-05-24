// component/selectPhone/selectPhone.js
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
    showPhoneBox: false,
    phoneTxt: '+853'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectPhone () {
      console.log(222)
      this.setData({
        showPhoneBox: true
      })
    },
    hidePhoneBox () {
      this.setData({
        showPhoneBox: false
      })
    },
    selectphonetxt (e) {
      let txt = e.currentTarget.dataset.txt
      this.setData({
        phoneTxt: txt,
        showPhoneBox: false
      })
    }
  }
})
