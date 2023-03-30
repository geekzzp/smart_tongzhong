// pages/text/text.js
const db = wx.cloud.database()
const openif = db.collection('openif')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorageSync()
    db.collection('111').doc('1526e12a601bc3490223c19e7716b95e').get({
      success: function(res) {
        // res.data 包含该记录的数据
        console.log(res.data.text)
        this.setData({
          text0:res.data.text
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  choose1: function () {
    // openif.get().then(res => {
    //   console.log(res.data)
    //   if (res.data[0].sports === true)
        wx.reLaunch({
          url: "../sport1/sport1"
        })
    //   else {
    //     wx.showModal({
    //       title: "提示！",
    //       content: res.data[0].sportstext,
    //       showCancel: false,
    //     })
    //   }
    // })

  },
  choose2: function () {
    openif.get().then(res => {
      console.log(res.data)
      if (res.data[0].society === true)
        wx.reLaunch({
          url: "../index/index"
        })
      else {
        wx.showModal({
          title: "提示！",
          content: res.data[0].societytext,
          showCancel: false,
        })
      }
    })
  },
})