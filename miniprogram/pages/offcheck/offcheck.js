// pages/society/society.js
const db = wx.cloud.database()
const com = db.collection('com')
const userInfo = db.collection('userInfo')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: []
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
        userNum: res.data[0].office.length,
        userHead: res.data[0].avatarUrl,
        items: res.data[0].office,
        id: res.data[0]._id,
        checked: []
      })
      // console.log(this.data.array)
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
  checkboxChange(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      val: e.detail.value
    })
    const checked = this.data.checked
    const values = e.detail.value
    const items = this.data.items
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      checked[i] = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i][1] == values[j]) {
          checked[i] = true
          break
        }
      }
    }
    this.setData({
      checked
    })
  },
  tapp: function () {
    if (this.data.val.length == 0) {
      wx.showModal({
        title: "提示！",
        content: "请进行选择",
        showCancel: false,
        success: res => ({

        })
      })
    } else {
      wx.showModal({
        title: "提示！",
        content: "一旦审批无法修改，确定审批吗？",
        showCancel: true,
        success: res => {
          if (res.confirm) {
            const items = this.data.items
            const userName = this.data.userName
            const id = this.data.id
            const checked = this.data.checked
            // console.log(checked)
            for (let i = 0, lenI = items.length; i < lenI; ++i) {
              if (checked[i] === true) {
                userInfo.doc(items[i][1]).update({
                  // data 传入需要局部更新的数据
                  data: {
                    officedone: db.command.push([
                      [userName, items[i][3]]
                    ]),
                  },
                })
                com.doc(id).update({
                  // data 传入需要局部更新的数据
                  data: {
                    doneoffice: db.command.push([items[i]]),
                    office: db.command.pullAll([items[i]])
                  },
                })
              }
            }
            wx.showModal({
              title: "提示！",
              content: "审批完成",
              showCancel: true,
            })
            wx.reLaunch({
              url: '../society/society'
            })
          }
        }
      })
    }
  },
  exist: function () {
    wx.navigateTo({
      url: '../exist/exist',
    })
  }
})