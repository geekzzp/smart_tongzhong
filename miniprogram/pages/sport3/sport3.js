// pages/classteacher1/classteacher1.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  signup_click: function () {
    const val = wx.getStorageSync("keymsg")
    db.collection('grade' + val[9]).where({
      _id: val
    }).get().then(res => {
      console.log(res.data[0])
      if (res.data[0].iffill == 1) {
        wx.showModal({
          title: "提示！",
          content: "您的班级已报名",
          showCancel: false,
        })
      } else {
        wx.navigateTo({
          url: '../sport4-1/sport4-1',
        })
      }
    })
  },
  details_click: function () {
        wx.navigateTo({
          url: '../sport4-2/sport4-2',
        })
  },
  record_click: function () {
    wx.navigateTo({
      url: '../sport4-4/sport4-4',
    })
},
tour_click:function(){
  wx.navigateTo({
    url: '../sport5/sport5',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var val = wx.getStorageSync("keymsg")
    db.collection('grade' + val[9]).doc(val).get().then(res => {
      this.setData({
        title: res.data.name
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

  }
})