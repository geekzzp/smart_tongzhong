// pages/sport2-3-1/sport2-3-1.js
const db = wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['男子100米', '男子200米', '男子400米', '男子1500米', '男子5000米', '男子跳高', '男子跳远', '女子100米', '女子200米', '女子400米', '女子800米', '女子5000米', '女子跳高', '女子立定跳远'], //下拉列表的数据
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
  onLoad: function (option) {
    this.setData({
      grade: option.grade
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
  account11: function (e) {
    this.data.account11 = e.detail.value
  },
  account12: function (e) {
    this.data.account12 = e.detail.value
  },
  account13: function (e) {
    this.data.account13 = e.detail.value
  },
  account21: function (e) {
    this.data.account21 = e.detail.value
  },
  account22: function (e) {
    this.data.account22 = e.detail.value
  },
  account23: function (e) {
    this.data.account23 = e.detail.value
  },
  account31: function (e) {
    this.data.account31 = e.detail.value
  },
  account32: function (e) {
    this.data.account32 = e.detail.value
  },
  account33: function (e) {
    this.data.account33 = e.detail.value
  },
  account41: function (e) {
    this.data.account41 = e.detail.value
  },
  account42: function (e) {
    this.data.account42 = e.detail.value
  },
  account43: function (e) {
    this.data.account43 = e.detail.value
  },
  account51: function (e) {
    this.data.account51 = e.detail.value
  },
  account52: function (e) {
    this.data.account52 = e.detail.value
  },
  account53: function (e) {
    this.data.account53 = e.detail.value
  },
  account61: function (e) {
    this.data.account61 = e.detail.value
  },
  account62: function (e) {
    this.data.account62 = e.detail.value
  },
  account63: function (e) {
    this.data.account63 = e.detail.value
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
          var val = this.data.grade
          var selectDatas=this.data.selectDatas
          var indexs=this.data.indexs
          db.collection('sport' + val).add({
            data: {
              title:selectDatas[indexs],
              account11: this.data.account11,
              account12: this.data.account12,
              account13: this.data.account13,
              account21: this.data.account21,
              account22: this.data.account22,
              account23: this.data.account23,
              account31: this.data.account31,
              account32: this.data.account32,
              account33: this.data.account33,
              account41: this.data.account41,
              account42: this.data.account42,
              account43: this.data.account43,
              account51: this.data.account51,
              account52: this.data.account52,
              account53: this.data.account53,
              account61: this.data.account61,
              account62: this.data.account62,
              account63: this.data.account63,
            }
          })
          db.collection('grade' + val).doc("2020sport" + val + this.data.account11[1] + this.data.account11[2])
            .update({
              data: {
                total: _.inc(7),
                stuid: db.command.push(this.data.account11),
                athlete: db.command.push(this.data.account12),
                record: db.command.push(this.data.account13),
                rank: db.command.push(1),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(7),
              },
            })
          db.collection('grade' + val).doc("2020sport" + val + this.data.account21[1] + this.data.account21[2])
            .update({
              data: {
                total: _.inc(5),
                stuid: db.command.push(this.data.account21),
                athlete: db.command.push(this.data.account22),
                record: db.command.push(this.data.account23),
                rank: db.command.push(2),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(5),
              },
            })
            db.collection('grade' + val).doc("2020sport" + val + this.data.account31[1] + this.data.account31[2])
            .update({
              data: {
                total: _.inc(4),
                stuid: db.command.push(this.data.account31),
                athlete: db.command.push(this.data.account32),
                record: db.command.push(this.data.account33),
                rank: db.command.push(3),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(4),
              },
            })
            db.collection('grade' + val).doc("2020sport" + val + this.data.account41[1] + this.data.account41[2])
            .update({
              data: {
                total: _.inc(3),
                stuid: db.command.push(this.data.account41),
                athlete: db.command.push(this.data.account42),
                record: db.command.push(this.data.account43),
                rank: db.command.push(4),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(3),
              },
            })
            db.collection('grade' + val).doc("2020sport" + val + this.data.account51[1] + this.data.account51[2])
            .update({
              data: {
                total: _.inc(2),
                stuid: db.command.push(this.data.account51),
                athlete: db.command.push(this.data.account52),
                record: db.command.push(this.data.account53),
                rank: db.command.push(5),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(2),
              },
            })
            db.collection('grade' + val).doc("2020sport" + val + this.data.account61[1] + this.data.account61[2])
            .update({
              data: {
                total: _.inc(1),
                stuid: db.command.push(this.data.account61),
                athlete: db.command.push(this.data.account62),
                record: db.command.push(this.data.account63),
                rank: db.command.push(6),
                project:db.command.push(selectDatas[indexs]),

                copy1: db.command.push(selectDatas[indexs]),
                copy2: db.command.push(this.data.account11),
                copy3: db.command.push(1),
              },
            })
          wx.hideLoading()
          wx.showModal({
            title: "提示！",
            content: '上传成功!',
            showCancel: false,
          })
          wx.reLaunch({
            url: '../sport2-3-2/sport2-3-2',
          })
        }
      }
    })

  }
})