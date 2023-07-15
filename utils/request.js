export const request = (param) => {
  console.log('param',param)
  return new Promise((resolve, reject) => {
          wx.request({
              ...param,
              success: (result => {
                  resolve(result)
              }),
              fail: (err => {
                  reject(err)
              })
          })
      }
  )
}


//param表示你要传递的参数对象，如url、data、header等等，具体参考文档wx.request（）里面有哪些属性。

