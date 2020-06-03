Page({

  data: {
    runIndex: 1
  },

  /**
   * 初始化
   */
  onLoad: function (options) {
    let awardsList = ['1元红包', '5元红包', '9元红包', '15元红包', '1.5元红包', '谢谢惠顾'];
    this.initAwardList(awardsList);
  },

  /**
   * 初始化抽奖
   */
  initAwardList: function (list) {
    // 绘制转盘
    var awardsList = [];
    var angle = 360 / list.length;
    for (var i = 0; i < list.length; i++) {
      awardsList.push({
        degree: {
          item: `${i * angle}deg`,
          line: `${(i + 0.5) * angle}deg`,
          bg_1: `${(i - 0.5) * angle + 90}deg`,
          bg_2: `${angle - 90}deg`
        },
        award: list[i],
        color: this.getRandomColor()
      })
    }
    this.setData({
      awardsList: awardsList
    });
  },

  /**
   * 开始抽奖
   */
  getLottery: function () {
    /// 获奖序号
    var awardIndex = 2;
    /// 转动时间
    let duration = 4000;
    /// 转动圈数
    let runNum = 6;

    // 旋转抽奖
    console.log(this.runDegs)
    this.setData({
      runIndex: this.data.runIndex + 1
    })
    if (!this.runDegs) {
      this.runDegs = (360 * runNum + (awardIndex * (360 / this.data.awardsList.length)) * this.data.runIndex)
    } else {
      this.runDegs = this.runDegs + (360 * runNum + (awardIndex * (360 / this.data.awardsList.length)) * this.data.runIndex)
    }
    console.log(this.runDegs)
    /// 开始转动
    this.startRun(awardIndex, duration, this.runDegs);
  },

  /**
   * 开始转动
   */
  startRun: function (awardIndex, duration, runDegs) {
    /// 动画
    var animation = wx.createAnimation({
      duration: duration,
      timingFunction: 'ease'
    })
    animation.rotate(runDegs).step();
    this.setData({
      animationData: animation.export()
    })

    /// 中奖提示
    setTimeout(() => {
      this.stopRun(awardIndex);
    }, duration + 300)
  },

  /**
   * 结束转动
   */
  stopRun: function (awardIndex) {
    console.log('抽中了奖品: ' + awardIndex)
  },

  /**
   * 获取随机颜色
   */
  getRandomColor: function () {
    var func = function (color) {
      return (color += '0123456789abcdefg'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : func(color);
    }
    return `#${func('')}`
  }
})