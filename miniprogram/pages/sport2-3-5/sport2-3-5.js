// pages/sport2-3-5/sport2-3-5.js
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['破校运动会记录', '破校最高记录', '破市年龄组记录'], //下拉列表的数据
    mark:[5,7,10],
    indexs: 0, //选择的下拉列 表下标,
  },
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    // console.log(Indexs)
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows
    });

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
  account1: function (e) {
    this.data.account1 = e.detail.value
  },
  account11: function (e) {
    this.data.account11 = e.detail.value
  },
  account12: function (e) {
    this.data.account12 = e.detail.value
  },
  account13: function (e) {
    this.data.account13 = e.detail.value
  },
  regist: function (e) {
    wx.showModal({
      title: "提示！",
      content: "确认上传成绩吗",
      showCancel: true,
      success: res => {
        if (res.confirm) {
          wx.showLoading({
            title: '上传中',
          })
          var indexs=this.data.indexs
          db.collection('grade' + this.data.account11[0]).doc("2020sport" + this.data.account11[0] + this.data.account11[1] + this.data.account11[2])
            .update({
              data: {
                total: _.inc(this.data.mark[indexs]),
                copy1: db.command.push(this.data.account1+this.data.selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(this.data.mark[indexs]),
              },
            })
            db.collection('details').add({
              data:{
                title:this.data.account1,
                stuid:this.data.account11,
                name:this.data.account12,
                record:this.data.account13,
                dec:this.data.selectDatas[indexs]
              }
            })
            wx.hideLoading()
            wx.reLaunch({
              url: '../sport2-3-2/sport2-3-2',
            })
        }
      }
    })
  }
})