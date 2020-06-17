const requestUrl = (url, data = {}, method) => {
  return new Promise((resolve, reject) => {
    let htype = url.indexOf('vop.baidu.com/server_api') > -1 ? 1 : 0
    console.log(JSON.stringify(data))
    wx.request({
      url: url,
      header: {
        'content-type': htype === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
        // 'content-type':'application/json'
      },
      data: JSON.stringify(data),
      method: method,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

export default requestUrl