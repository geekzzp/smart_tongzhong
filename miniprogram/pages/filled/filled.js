// pages/filled/filled.js
const db = wx.cloud.database()
const com = db.collection('com')
const userInfo = db.collection('userInfo')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['社长', '副社长', '美编', '文编'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
    name: '无'
  },

  // 点击下拉显示框
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
    // console.log(option.id)
    // console.log(option.name)
    this.setData({
      searchid: option.id,
      name: option.name
    })
    if (option.id == '2020new008') {
      console.log(option.id)
      this.setData({
        selectDatas: ['书吧管理', '社长', '副社长', '美编', '文编']
      })
    } else if (option.id == '2020new014') {
      console.log(option.id)
      this.setData({
        selectDatas: ['主播', '策划', '后期', '摄像', '网站运营']
      })
    } else {
      this.setData({
        selectDatas: ['社长', '副社长', '美编', '文编']
      })
    }
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
  regist: function (e) {
    if (!app.id) {
      wx.showModal({
        title: "提示！",
        content: "登录已失效,请重新登录",
        showCancel: true,
        success: res => {
          wx.reLaunch({
            url: '../index/index'
          })
        }
      })
    } else {
      const selectDatas = this.data.selectDatas;
      const indexs = this.data.indexs;
      wx.showModal({
        title: "提示！",
        content: "确认申报" + selectDatas[indexs] + "职务吗？",
        showCancel: true,
        success: res => {
          if (res.confirm) {
            const searchid = this.data.searchid;
            const name = this.data.name;
            // console.log(app.id)
            userInfo.doc(app.id).update({
              // data 传入需要局部更新的数据
              data: {
                office: db.command.push([
                  [name, selectDatas[indexs]]
                ]),
                ['offchoice.' + [name]]: true
              },
            })
            com.doc(searchid).update({
              // data 传入需要局部更新的数据
              data: {
                office: db.command.push([
                  [app.name, app.id, app.qq, selectDatas[indexs]]
                ]),
              },
            })
            wx.showModal({
              title: "提示！",
              content: '申报成功',
              showCancel: true,
              success: res => {
                wx.reLaunch({
                  url: '../index/index'
                })
              }
            })

          }
        }
      })
    }
  }
})