// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    apps: []
  },
  onLoad() {
    this.setData({
      apps: [{
        name: '贪吃蛇',
        url: '/pages/snake/snake'
      }, 
      {
        name: '抽奖模拟器',
        url: '/pages/lottery/lottery'
      },
      {
        name: 'AI问答',
        url: '/pages/chat/chat'
      },
      {
        name: '一句话',
        url: '/pages/oneword/oneword'
      },
    ]
    })
  },
  navigateTo(e) {
    // const {
    //   url
    // } = item
    const {
      name,
      url
    } = e.currentTarget.dataset.item
    console.log('name', name)
    console.log('url', url)
    if (url && url.length) {
      wx.navigateTo({
        url
      })
    }
  }
})