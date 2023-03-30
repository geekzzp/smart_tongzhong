// pages/society/society.js
const db = wx.cloud.database()
const com = db.collection('com')
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
    com.where({
      searchid: app.socid
    }).get().then(res => {
      this.setData({
        userName: res.data[0].title,
        userNum: res.data[0].name.length,
        userHead: res.data[0].avatarUrl,
        // array: res.data[0].array,
        name: res.data[0].name,
        qq: res.data[0].qq,
        stuid: res.data[0].stuid,
        donename: res.data[0].donename,
        doneqq: res.data[0].doneqq,
        donestuid: res.data[0].donestuid,
        items: res.data[0].doneoffice,
      })
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
  tapp: function () {
    wx.navigateTo({
      url: '../soccheck/soccheck'
    })
  },
  offcheck: function () {
    // console.log(this.data.items)
    if(this.data.items===undefined){
      wx.navigateTo({
        url: '../offcheck/offcheck'
      })
    }else {
      wx.navigateTo({
        url: '../offcheck/offcheck'
      })
    }
  }
})