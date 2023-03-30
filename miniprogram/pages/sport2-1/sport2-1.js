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

    if (this.data.username === '' || this.data.username === undefined) {
      wx.showModal({
        title: "提示！",
        content: "请输入账号",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.password === '' || this.data.password === undefined) {
      wx.showModal({
        title: "提示！",
        content: "请输入密码",
        showCancel: false,
        success: res => ({

        }),
      })
    } else {
      console.log('grade' + this.data.username[9])
      console.log(this.data.username)
      console.log(this.data.password)
      const grade = db.collection('grade' + this.data.username[9])
      if (this.data.username[9] != '1' && this.data.username[9] != '2' && this.data.username[9] != '3') {
        wx.showModal({
          title: "提示！",
          content: "账号或密码输入错误",
          showCancel: false,
          success: res => ({})
        })
      } else {
        grade.where({
          _id: this.data.username,
          password: this.data.password
        }).get().then(res => {
          console.log(res.data)
          if (res.data.length == 0) {
            wx.showModal({
              title: "提示！",
              content: "账号或密码输入错误",
              showCancel: false,
              success: res => ({

              })
            })
          } else {
            console.log(this.data.username)
            console.log(this.data.password)
            wx.setStorageSync("keymsg", this.data.username)
            if (this.data.username == this.data.password) {
              wx.navigateTo({
                url: '../sport2-1-1/sport2-1-1',
              })
            } else {
              wx.reLaunch({
                url: '../sport3/sport3',
              })
            }
          }
        })
      }
    }
  }
})