// pages/newdetails/newdetails.js
const db = wx.cloud.database()
const soc_details = db.collection('soc_details')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    }),
    wx.cloud.callFunction({
      name: 'getnum',
      complete: res => {
        console.log(res)
        this.setData({
          products: res.result.data
        })
      }
    })
    wx.hideLoading()
    /*
    soc_details.orderBy('letter', 'asc')
    .get().then(res => {
      console.log(res.data)
      this.setData({
        products: res.data
      })
      })
      */
      /*
    soc_details.get().then(res=>{
      this.setData({
        products:res.data
      })
      // console.log(this.data.products)
    })
    */
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