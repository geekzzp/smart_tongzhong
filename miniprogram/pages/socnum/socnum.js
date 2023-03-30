// pages/socnum/socnum.js
const db = wx.cloud.database()
const com = db.collection('com')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    socid: '',
    newid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  newInput: function (e) {
    this.data.newid = e.detail.value
  },
  usernameInput: function (e) {
    this.data.socid = e.detail.value
  },
  regist: function (e) {
    if (this.data.newid == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入社团id",
        showCancel: false,
        success: res => ({

        })
      })
    } else if(this.data.socid == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入专属码",
        showCancel: false,
        success: res => ({

        })
      })
    } else {
      com.where({
        searchid: this.data.socid,
        _id: this.data.newid
      }).get().then(res => {
        // console.log(res)
        if (res.data.length == 0) {
          wx.showModal({
            title: "提示！",
            content: '社团id或专属码错误',
            showCancel: false,
          })
        } else {
          wx.showToast({
            title: '登录中',
            icon: 'loading'
          })
          app.socid = this.data.socid;
          wx.reLaunch({
            url: '../society/society',
          })
        }
      })
    }
  }
})