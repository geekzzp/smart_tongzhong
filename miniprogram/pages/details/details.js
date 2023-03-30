// pages/details/details.js
const db = wx.cloud.database()
const soc_details = db.collection('soc_details')
const userInfo = db.collection('userInfo')
const com = db.collection('com')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    products: '',
    val: [],
    che: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    soc_details.orderBy('letter', 'asc')
      .get().then(res => {
        console.log(res.data)
        var dataone=res.data
        this.setData({
          products: res.data
        })
      })
      */
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
          console.log(this.data.products)
          console.log(this.data.products[1])
        }
      })
      

      wx.hideLoading()
      /*
      soc_details.get().then(res => {
        this.setData({
          products: res.data
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
    // console.log("触底")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  usernameInput: function (e) {
    this.data.username = e.detail.value
  },
  checkboxChange(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      val: e.detail.value
    })
    const products = this.data.products
    const values = e.detail.value
    for (let i = 0, lenI = products.length; i < lenI; ++i) {
      products[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (products[i].name === values[j]) {
          products[i].checked = true
          break
        }
      }
    }
    this.setData({
      products
    })
    // console.log(this.data.val)
  },
  regist: function (e) {
    if (this.data.val.length == 0) {
      wx.showModal({
        title: "提示！",
        content: "请进行选择",
        showCancel: false,
        success: res => ({

        })
      })
    } else if (!app.id) {
      wx.showModal({
        title: "提示！",
        content: "登录已失效,请重新登录",
        showCancel: true,
      })
    } else if (this.data.val.length > 3) {
      wx.showModal({
        title: "提示！",
        content: "您最多只能选择三个社团进行申报",
        showCancel: false,
      })
    } else {
      wx.showModal({
        title: "提示！",
        content: "确认申报" + this.data.val[0] + "等" + this.data.val.length + "个社团吗？",
        showCancel: true,
        success: res => {
          if (res.confirm) {
            // console.log(app.id)
            const val = this.data.val
            userInfo.doc(app.id).update({
              // data 传入需要局部更新的数据
              data: {
                society: val
              },
            })
            app.array = val
            const products = this.data.products
            // console.log(products)
            for (let i = 0, lenI = products.length; i < lenI; ++i) {
              if (products[i].checked === true) {
                // console.log(app.name)
                // console.log(products[i].searchid)
                com.doc(products[i].searchid).update({
                  // data 传入需要局部更新的数据
                  data: {
                    name: db.command.push(app.name),
                    stuid: db.command.push(app.id),
                    qq: db.command.push(app.qq),
                  },
                })
              }
            }
            wx.showModal({
              title: "提示！",
              content: '申报成功，即将进入职务申报页',
              showCancel: false,
            })
            wx.redirectTo({
              url: '../officer/officer'
            })
          }
        }
      })
    }
  },
  search: function () {
    this.data.che = []
    const products = this.data.products
    const username = this.data.username
    if (username == '') {
      this.setData({
        che: []
      })
    } else {
      for (let index = 0; index < products.length; index++) {
        const str = products[index].name;
        if (str.indexOf(username) != -1) {
          this.data.che[index] = true
        }
        console.log(this.data.che)
        console.log(index)
      }
      this.setData({
        che: this.data.che
      })
    }
  },
})