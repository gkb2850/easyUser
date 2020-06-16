const requestUrl = (url, data= {}, method) => {
  return new Promise((resolve, reject) => {
    let htype = url.indexOf('vop.baidu.com/server_api') > -1 ? 1 : 0
    wx.request({
      url: url,
      header: {
        // 'content-type': htype === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
        'content-type': 'application/jason;charset=utf-8'
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