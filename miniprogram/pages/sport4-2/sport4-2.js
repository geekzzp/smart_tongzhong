// pages/sport4-2/sport4-2.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var val = wx.getStorageSync("keymsg")
    db.collection('grade' + val[9]).where({
      _id:val
    }).
      get().then(res => {
      if (res.data[0].iffill1 != 0) {
        console.log(res.data[0])
        this.setData({
          array: res.data[0],
          gra: val[9]
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
  regist: function () {
    var val = wx.getStorageSync("keymsg")
    db.collection('grade' + val[9]).where({
      _id: val
    }).get().then(res => {
      if (res.data[0].iffill === 0) {
        wx.showModal({
          title: "提示！",
          content: "您的班级还未报名，请先报名",
          showCancel:true,
          success: res => {
            if (res.confirm) {
              wx.navigateTo({
                url: '../sport4-1/sport4-1',
              })
            }
          }
        })
      } else {
        // wx.navigateTo({
        //   url: '../sport4-3/sport4-3',
        // })
        wx.showModal({
          title: "提示！",
          content: "信息已整理，如仍有修改需求请联系qq:1958230983",
          showCancel:false,
        })
      }
    })
  }
})