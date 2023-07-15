// pages/chat/chat.js
import {
  request
} from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // ak: '0KcHmaiU4mKo1vmWP6Bo6cncKG5ieaKS',
    // sk: '64q3E0mriTs5a0KNb6V5rW9nCkQEny6a',
    sk: 'sk-Khz2tyRMZJetjPNLFDQFpe2bXmOLRn0nZt2pNuKmDIQC8CJk',
    // accessToken: '',
    text: '',
    chatRes: '',
    disabled:false
    // taskId: '',
    // requestId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onload')
    // 获取token
    // this.getChatToken()
  },
  // 提交提问内容
  submitChat() {
    if (this.data.text.length === 0) {
      wx.showToast({
        title: '提问内容不能为空',
        icon: 'none'
      })
      return
    }
    this.getChatRes(this.data.text)
  },
  // 输入事件处理函数，绑定输入值
  handleInput(e) {
    this.setData({
      text: e.detail.value
    })
  },
  // 获取回答
  async getChatRes(text) {
    console.log('text', text)
    // this.createTask()
    const url = "http://apis.liaomengyun.top/API/qing_chat.php?msg=" + this.data.text
    const method = "GET"
    // const data = {
      //   "model": "gpt-3.5-turbo",
      //   "prompt": this.data.text,
      //   "max_tokens": 7,
      //   "temperature": 0,
      //   "top_p": 1,
      //   "n": 1,
      //   "stream": false
      // }
      // const header = {
        //   "Authorization": 'Bearer ' +this.data.sk
        // }
        wx.showLoading({
          title: '思考中',
        })
        this.setData({
          disabled:true
        })
        const {
          data: {
            code,
            msg
      }
    } = await request({
      url,
      method,
      // data,
      // header
    })
    if (code == 200) {
      this.setData({
        chatRes: msg
      })
    }
    wx.hideLoading()
    this.setData({
      disabled:false
    })
  },
  // 获取token
  // async getChatToken() {
  //   const {
  //     ak,
  //     sk
  //   } = this.data
  //   const url = `https://wenxin.baidu.com/moduleApi/portal/api/oauth/token?grant_type=client_credentials&client_id=${ak}&client_secret=${sk}`
  //   const header = {
  //     "Content-Type": "application/x-www-form-urlencoded"
  //   }
  //   const {
  //     data: {
  //       code,
  //       data
  //     }
  //   } = await request({
  //     url,
  //     method: 'POST',
  //     header,
  //   })
  //   if (code == 0) {
  //     console.log('data', data)
  //     this.setData({
  //       accessToken: data
  //     })
  //     wx.showToast({
  //       title: '获取token成功',
  //     })
  //   }
  // },
  // 异步预测
  // async createTask() {

  //   const url = `https://wenxin.baidu.com/moduleApi/portal/api/rest/1.0/ernie/3.0.25/zeus?access_token=${this.data.accessToken}`
  //   const method = 'POST'
  //   const header = {
  //     'content-type': 'application/x-www-form-urlencoded',
  //   }
  //   const data = {
  //     text: this.data.text,
  //     async: 1,
  //     typeId: 1,
  //     seq_len: 512,
  //     min_dec_len: 2,
  //     topp: 0.8,
  //     task_prompt: 'qa',
  //     penalty_score: 1.2,
  //     is_unidirectional: 0,
  //     min_dec_penalty_text: '。?：！[<S>]',
  //     mask_type: 'word'
  //   }
  //   const res = await request({
  //     url,
  //     method,
  //     header,
  //     data
  //   })
  //   console.log('res', res)
  // },
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

  }


})