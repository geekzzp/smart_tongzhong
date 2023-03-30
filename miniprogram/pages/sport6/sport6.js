// pages/sport6/sport6.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    origin:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.setData({
      grade: option.grade
    })
    if(option.grade==1){
      this.setData({
        noww:"高一"
      })
    }
    else if(option.grade==2){
      this.setData({
        noww:"高二"
      })
    }
    else{
      this.setData({
        noww:"高三"
      })
    }
    db.collection('sport'+option.grade).get().then(res => {
      this.setData({
        array:res.data,
        origin:1
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