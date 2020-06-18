const requestUrl = (url, data = {}, method, formType = '') => {
  return new Promise((resolve, reject) => {
    let htype = url.indexOf('vop.baidu.com/server_api') > -1 ? 1 : 0
    console.log(JSON.stringify(data))
    wx.request({
      url: url,
      header: {
        // 'content-type': htype === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
        'content-type': formType ? 'application/x-www-form-urlencoded' : 'application/json',
        'token': wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo').token : ''
      },
      data: formType ? data : JSON.stringify(data),
      method: method,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err.data)
      }
    })
  })
}

export default requestUrl