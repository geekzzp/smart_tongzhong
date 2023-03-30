const db = wx.cloud.database()
const com = db.collection('com')
const userInfo = db.collection('userInfo')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    secpassword: "",
    qqnum: "无",
    officenum: "",
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['社长', '副社长', '美编', '文编', '社员'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
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
  onLoad: function (options) {
    com.where({
      searchid: app.socid
    }).get().then(res => {
      this.setData({
        userName: res.data[0].title,
        id: res.data[0]._id,
      })
      // console.log(this.data.array)
      console.log(res.data[0]._id)
      if (res.data[0]._id == '2020new008') {
        this.setData({
          selectDatas: ['书吧管理', '社长', '副社长', '美编', '文编', '志愿者']
        })
      } else if (res.data[0]._id == '2020new014') {
        this.setData({
          selectDatas: ['主播', '策划', '后期', '摄像', '网站运营']
        })
      } else {
        this.setData({
          selectDatas: ['社长', '副社长', '美编', '文编']
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
  usernameInput: function (e) {
    this.data.username = e.detail.value
  },
  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  qqnumInput: function (e) {
    this.data.qqnum = e.detail.value
  },
  officenumInput: function (e) {
    this.data.officenum = e.detail.value
  },
  regist: function (e) {
    if (this.data.username == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入姓名",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (this.data.password == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入学号",
        showCancel: false,
        success: res => ({

        }),
      })
    } else if (this.data.password < 201820101) {
      wx.showModal({
        title: "提示！",
        content: "学号不符合要求",
        showCancel: false,
        success: res => ({

        }),
      })
    }
    /*
    else if (this.data.officenum == '') {
      wx.showModal({
        title: "提示！",
        content: "请输入安排的职务",
        showCancel: false,
        success: res => ({

        })
      })
    } 
    */
    else {
      this.data.password = this.data.password * 1
      userInfo.where({
        _id: this.data.password,
        name: this.data.username
      }).get().then(res => {
        // console.log(res.data)
        if (res.data.length === 0) {
          wx.showModal({
            title: "提示！",
            content: "姓名或学号输入错误",
            showCancel: false,
          })
        } else {
          wx.showModal({
            title: "提示！",
            content: "确认安排吗？",
            showCancel: true,
            success: res => {
              if (res.confirm) {
                const selectDatas = this.data.selectDatas;
                const indexs = this.data.indexs;
                const userName = this.data.userName
                const id = this.data.id
                userInfo.doc(this.data.password).update({
                  // data 传入需要局部更新的数据
                  data: {
                    officedone: db.command.push([
                      // [userName, this.data.officenum]
                      [userName, selectDatas[indexs]]
                    ]),
                  },
                })
                // console.log(id)
                com.doc(id).update({
                  // data 传入需要局部更新的数据
                  data: {
                    doneoffice: db.command.push([
                      // [this.data.username, this.data.password, this.data.qqnum, this.data.officenum]
                      [this.data.username, this.data.password, this.data.qqnum, selectDatas[indexs]]
                    ]),
                  },
                })
                wx.showModal({
                  title: "提示！",
                  content: "安排成功",
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
      })
    }
  }
})