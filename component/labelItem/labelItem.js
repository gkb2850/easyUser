// component/labelItem/labelItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: '1'
    },
    txtData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    labelIndex: 0,
    labelBoxShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectLabelItem (e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        labelIndex: index,
        labelBoxShow: false
      })
    },
    hideLabelBox () {
      this.setData({
        labelBoxShow: false
      })
    },
    toShowLabelShow () {
      this.setData({
        labelBoxShow: true
      })
    }
  }
})
