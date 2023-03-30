let app = getApp()
const db = wx.cloud.database()
Page({

  data: {
    origin:0,
    currentTab: 0,
    items: [
      {
        "iconPath": "/icons/index.png",
        "selectedIconPath": "/icons/indexfill.png",
        "text": "资讯"
      },
      {
        "iconPath": "/icons/record.png",
        "selectedIconPath": "/icons/recordfill.png",
        "text": "成绩"
      },
      {
        "iconPath": "/icons/rank.png",
        "selectedIconPath": "/icons/rankfill.png",
        "text": "时表"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  onLoad: function (option) {
    db.collection('details').get().then(res => {
      this.setData({
        details:res.data,
        origin:1
      })
    })
      wx.cloud.callFunction({
        name: 'timesec',
        complete: res => {
          console.log(res)
          this.setData({
            timesec: res.result.data
          })
        }
      })
      wx.cloud.callFunction({
        name: 'timefir',
        complete: res => {
          console.log(res)
          this.setData({
            timefir:res.result.data,
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
  fir_click:function()
  {
    wx.navigateTo({
      url: '../sport6/sport6?grade=1',
    })
  },
  sec_click:function()
  {
    wx.navigateTo({
      url: '../sport6/sport6?grade=2',
    })
  },
  thi_click:function()
  {
    wx.navigateTo({
      url: '../sport6/sport6?grade=3',
    })
  },
  for_click:function()
  {
    wx.navigateTo({
      url: '../sport7/sport7',
    })
  }
})
