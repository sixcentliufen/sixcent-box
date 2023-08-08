// pages/woodenfish/woodenfish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 1,
    msg: '',
    isTaping: false,
    msgPosition: {
      x: 0,
      y: 0
    },
    msgStyle: {

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onTap(e) {
    console.log('e', e)
    const {
      x,
      y
    } = e.detail
    let msg = '功德+' + this.data.count
    this.setData({
      count: this.data.count + 1,
      msg
    })
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  },
  tapStart(e) {
    // console.log('eeee',e)
    this.setData({
      isTaping: true
    })
  },
  tapEnd() {
    this.setData({
      isTaping: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})