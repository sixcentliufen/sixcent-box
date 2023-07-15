// pages/lottery/lottery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0,
    result:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  lottery(probability) {
    // 将概率乘以100并取整，转换为0到100的整数
    const chance = Math.floor((probability - 0) * 100);

    // 生成一个0到99的随机数

    const randomNum = Math.floor(Math.random() * 100);

    // 判断随机数是否小于等于概率
    let res = false
    if (randomNum <= chance) {
      res =  true; // 抽中
    } 
    return res
  },
  handleTap() {
    if(this.data.value < 0 ||this.data.value > 1){
      wx.showToast({
        title: '概率范围需要在0-1之间',
      })
      return
    }
    let result = this.lottery(this.data.value)
    this.setData({
      result
    })
  },
  bindInput(e){
    this.setData({
      value:e.detail.value
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