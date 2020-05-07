const requestUrl = (url, data= {}, method) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: data,
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