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
        userNum: res.data[0].name.length,
        userHead: res.data[0].avatarUrl,
        // array: res.data[0].array,
        name: res.data[0].name,
        stuid: res.data[0].stuid,
        // tot: res.data[0].tot,
        id: res.data[0]._id,
        qq: res.data[0].qq,
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
    const stuid = this.data.stuid
    for (let i = 0, lenI = stuid.length; i < lenI; ++i) {
      checked[i] = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (stuid[i] == values[j]) {
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
        content: "确认批准" + this.data.val[0] + "等" + this.data.val.length + "人吗？",
        showCancel: true,
        success: res => {
          if (res.confirm) {
            const val = this.data.val
            const stuid = this.data.stuid
            const name = this.data.name
            const qq = this.data.qq
            const checked = this.data.checked
            // const tot=this.data.tot
            const id = this.data.id
            const userName = this.data.userName
            // console.log(stuid)
            // console.log(checked)
            for (let i = 0, lenI = stuid.length; i < lenI; ++i) {
              if (checked[i] === true) {
                userInfo.doc(stuid[i]).update({
                  // data 传入需要局部更新的数据
                  data: {
                    // ['done.' + [tot[i]]]: true,
                    socdone: db.command.push([
                      [userName]
                    ]),
                  },
                })
                // console.log(id)
                com.doc(id).get().then(res => {
                  // res.data 包含该记录的数据
                  // console.log(res.data)
                })
                com.doc(id).update({
                  // data 传入需要局部更新的数据
                  data: {
                    donename: db.command.push(name[i]),
                    doneqq: db.command.push(qq[i]),
                    donestuid: db.command.push(stuid[i]),
                    name: db.command.pull(name[i]),
                    qq: db.command.pull(qq[i]),
                    stuid: db.command.pull(stuid[i]),
                  },
                })
              }
            }
            wx.showModal({
              title: "提示！",
              content: "审批完成",
              showCancel: false,
              success: res => {
                if (res.confirm) {
                  wx.reLaunch({
                    url: '../society/society'
                  })
                }
              }
            })
          }
        }
      })
    }

  },
})