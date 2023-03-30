const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    secpassword: "",
    qqnum: ""
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
  classInput: function (e) {
    this.data.cla = e.detail.value
  },
  usernameInput: function (e) {
    this.data.username = e.detail.value
  },
  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  secpasswordInput: function (e) {
    this.data.secpassword = e.detail.value
  },
  qqnumInput: function (e) {
    this.data.qqnum = e.detail.value
  },
  regist: function (e) {
    if (this.data.username == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入姓名",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.password == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入学号",
        showCancel: false,
        success: res => ({

        }),
      })
    } else if (this.data.password < 201820101) {
      wx.showModal({
        title: "提示！",
        content: "学号不符合要求",
        showCancel: false,
        success: res => ({

        }),
      })
    } else if (this.data.secpassword < 10000000) {
      wx.showModal({
        title: "提示！",
        content: "智学号不符合要求",
        showCancel: false,
        success: res => ({

        }),
      })
    } else if (this.data.secpassword == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入智学号",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.qqnum == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入qq号",
        showCancel: false,
        success: res => ({

        })
      })
    } else {
      console.log(this.data.password)
      this.data.password = this.data.password * 1
      this.data.secpassword = this.data.secpassword * 1
      userInfo.where({
        _id: this.data.password,
        name: this.data.name,
        wisenum: this.data.secpassword
      }).get().then(res => {
        console.log(res.data)
        if (res.data.length == 0) {
          wx.showModal({
            title: "提示！",
            content: "姓名.学号或智学号输入错误",
            showCancel: false,
            success: res => ({

            })
          })
        } else {
          userInfo.where({
            _id: this.data.password,
          }).update({
            data: {
              qq: this.data.qqnum
            },
            success: res => {
              app.id = this.data.password
              wx.reLaunch({
                url: '../index/index',
              })
            },
          })
        }
      })
      /*
      userInfo.where({
        _id: this.data.password
      }).get().then(res => {
        // console.log(res.data)
        if (res.data.length > 0) {
          wx.showModal({
            title: "提示！",
            content: "此学号已被另一微信账号绑定，如非本人操作，请联系我们",
            showCancel: false,
            success: res => ({

            })
          })
        } else {
          wx.showModal({
            title: "提示！",
            content: "确认绑定吗？",
            showCancel: true,
            success: res => {
              if (res.confirm) {
                app.id = this.data.password
                wx.cloud.callFunction({
                  name: 'getOpenid',
                  complete: res => {
                    userInfo.add({
                      data: {
                        _id: this.data.password,
                        name: this.data.username,
                        _openid: res.result.openId,
                        qq: this.data.qqnum,
                      },
                      success: res => {
                        wx.reLaunch({
                          url: '../index/index',
                        })
                      },
                    })
                  }
                })
              }
            }
          })
        }
      })
      */
    }
  }
})