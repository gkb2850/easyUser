export const loading = (title) => {
  wx.showLoading({
    title: title || '数据加载中',
    mask: true
  })
}

export const closeLoading = () => {
  wx.hideLoading()
}

export const message = (msg, title) => {
  wx.showModal({
    title: title || '提示信息',
    content: msg,
    showCancel: false
  })
}

export const success = (msg) => {
  wx.showToast({
    title: msg || '请求成功',
    icon: 'success',
    duration: 1000
  })
}

export const error = (msg) => {
  wx.showToast({
    title: msg || '返回失败',
    icon: 'none',
    duration: 1000
  })
}