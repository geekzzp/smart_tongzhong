// pages/officer/officer.js
const db = wx.cloud.database()
const soc_details = db.collection('soc_details')
const userInfo = db.collection('userInfo')
const com = db.collection('com')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const array = app.array
    // console.log(array)
    soc_details.where({
      name: db.command.in(array)
    }).get().then(res => {
      // console.log(res.data)
      this.setData({
        products: res.data
      })
    })
    userInfo.where({
      _id: app.id
    }).get().then(res => {
      // console.log(res.data)
      // console.log(res.data.offchoice)
      this.setData({
        offchoice: res.data[0].offchoice
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
  bindViewTap: function (event) {
    const action = event.currentTarget.dataset.action;
    // console.log(action)
    const actionname = action.name
    // console.log(action.name)
    // console.log(this.data.offchoice)
    if (this.data.offchoice === undefined) {
      wx.navigateTo({
        url: '../filled/filled?id=' + action.searchid + '&name=' + action.name,
      })
    } else if (this.data.offchoice[actionname] === true) {
      wx.showModal({
        title: "提示！",
        content: '您已在此社团申报过职务',
        showCancel: false,
      })
    } else {
      wx.navigateTo({
        url: '../filled/filled?id=' + action.searchid + '&name=' + action.name,
      })
    }
  },
  backindex: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  }
})