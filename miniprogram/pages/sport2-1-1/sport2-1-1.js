// pages/setin/setin.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  regist: function () {
    wx.redirectTo({
      url: '../classteacher1/classteacher1',
    })
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
  usernameInput: function (e) {
    this.data.username = e.detail.value
  },
  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  regist: function (e) {
    var val = wx.getStorageSync("keymsg")
    if (this.data.username === ''||this.data.username ===undefined) {
      wx.showModal({
        title: "提示！",
        content: "请输入新密码",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.password === ''||this.data.password ===undefined) {
      wx.showModal({
        title: "提示！",
        content: "请确认密码",
        showCancel: false,
        success: res => ({

        }),
      })
    } else if (this.data.username != this.data.password) {
      wx.showModal({
        title: "提示！",
        content: "两次输入不一致",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.username == val ) {
      wx.showModal({
        title: "提示！",
        content: "密码不能与账号一致",
        showCancel: false,
        success: res => ({

        })
      })
    } else {
      const grade = db.collection('grade' + val[9])
      grade.where({
        _id: val,
      }).update({
        data: {
          password: this.data.password
        },
        success: res => {
          wx.reLaunch({
            url: '../sport3/sport3',
          })
        },
      })

    }
  }
})