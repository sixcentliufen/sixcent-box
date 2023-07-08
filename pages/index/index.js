// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    apps:[]
  },
  onLoad() {
    this.setData({
      apps:[{
        name:'贪吃蛇',
        url:'/pages/snake/snake'
      }]
    })
  },
  navigateTo(e) {
    // const {
    //   url
    // } = item
    const {name,url} = e.currentTarget.dataset.item
    console.log('name',name)
    console.log('url',url)
    wx.navigateTo({
      url
    })
  }
})