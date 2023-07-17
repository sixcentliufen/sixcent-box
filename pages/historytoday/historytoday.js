// pages/historytoday/historytoday.js
import {
  request
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: '',
    historyList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getToday()
    this.getHistory()
  },
  getToday() {
    let todayDate = new Date()
    let year = todayDate.getFullYear()
    let month = todayDate.getMonth() + 1
    let date = todayDate.getDate()
    let today = year + '年' + month + '月' + date + '日'
    this.setData({
      today
    })
  },
  async getHistory(){
    const {data:{code,msg}} = await request({
      method:'GET',
      url:'https://apis.liaomengyun.top/API/history.php?num=10&method=json'
    })
    if(code == 200){
      this.setData({
        historyList:msg
      })
    }
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