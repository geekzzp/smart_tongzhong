// pages/enroll/enroll.js
const db = wx.cloud.database()
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
  account14: function (e) {
    this.data.account14 = e.detail.value
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
  account24: function (e) {
    this.data.account24 = e.detail.value
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
  account34: function (e) {
    this.data.account34 = e.detail.value
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
  account44: function (e) {
    this.data.account44 = e.detail.value
  },
  account51: function (e) {
    this.data.account51 = e.detail.value
  },
  account52: function (e) {
    this.data.account52 = e.detail.value
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
  account64: function (e) {
    this.data.account64 = e.detail.value
  },
  account71: function (e) {
    this.data.account71 = e.detail.value
  },
  account72: function (e) {
    this.data.account72 = e.detail.value
  },
  account73: function (e) {
    this.data.account73 = e.detail.value
  },
  account74: function (e) {
    this.data.account74 = e.detail.value
  },
  account81: function (e) {
    this.data.account81 = e.detail.value
  },
  account82: function (e) {
    this.data.account82 = e.detail.value
  },
  account83: function (e) {
    this.data.account83 = e.detail.value
  },
  account84: function (e) {
    this.data.account84 = e.detail.value
  },
  account85: function (e) {
    this.data.account85 = e.detail.value
  },
  account86: function (e) {
    this.data.account86 = e.detail.value
  },
  account87: function (e) {
    this.data.account87 = e.detail.value
  },
  account88: function (e) {
    this.data.account88 = e.detail.value
  },
  account91: function (e) {
    this.data.account91 = e.detail.value
  },
  account92: function (e) {
    this.data.account92 = e.detail.value
  },
  account93: function (e) {
    this.data.account93 = e.detail.value
  },
  account94: function (e) {
    this.data.account94 = e.detail.value
  },
  account101: function (e) {
    this.data.account101 = e.detail.value
  },
  account102: function (e) {
    this.data.account102 = e.detail.value
  },
  account103: function (e) {
    this.data.account103 = e.detail.value
  },
  account104: function (e) {
    this.data.account104 = e.detail.value
  },
  account111: function (e) {
    this.data.account111 = e.detail.value
  },
  account112: function (e) {
    this.data.account112 = e.detail.value
  },
  account113: function (e) {
    this.data.account113 = e.detail.value
  },
  account114: function (e) {
    this.data.account114 = e.detail.value
  },
  account121: function (e) {
    this.data.account121 = e.detail.value
  },
  account122: function (e) {
    this.data.account122 = e.detail.value
  },
  account123: function (e) {
    this.data.account123 = e.detail.value
  },
  account124: function (e) {
    this.data.account124 = e.detail.value
  },
  account131: function (e) {
    this.data.account131 = e.detail.value
  },
  account132: function (e) {
    this.data.account132 = e.detail.value
  },
  account141: function (e) {
    this.data.account141 = e.detail.value
  },
  account142: function (e) {
    this.data.account142 = e.detail.value
  },
  account143: function (e) {
    this.data.account143 = e.detail.value
  },
  account144: function (e) {
    this.data.account144 = e.detail.value
  },
  account151: function (e) {
    this.data.account151 = e.detail.value
  },
  account152: function (e) {
    this.data.account152 = e.detail.value
  },
  account153: function (e) {
    this.data.account153 = e.detail.value
  },
  account154: function (e) {
    this.data.account154 = e.detail.value
  },
  account161: function (e) {
    this.data.account161 = e.detail.value
  },
  account162: function (e) {
    this.data.account162 = e.detail.value
  },
  account163: function (e) {
    this.data.account163 = e.detail.value
  },
  account164: function (e) {
    this.data.account164 = e.detail.value
  },
  account165: function (e) {
    this.data.account165 = e.detail.value
  },
  account166: function (e) {
    this.data.account166 = e.detail.value
  },
  account167: function (e) {
    this.data.account167 = e.detail.value
  },
  account168: function (e) {
    this.data.account168 = e.detail.value
  },

  regist: function (e) {
    wx.showModal({
      title: "提示！",
      content: "确认申报吗",
      showCancel: true,
      success: res => {
        if (res.confirm) {
          wx.showLoading({
            title: '申报中',
          })
          var val = wx.getStorageSync("keymsg")
          // if (this.data.account11 != undefined && this.data.account12 != undefined && this.data.account11 != '' && this.data.account12 != '') {
          //   db.collection('sport001' + val[9]).add({
          //     data: {
          //       _id: this.data.account11,
          //       name: this.data.account12
          //     }
          //   })
          // }
          // if (this.data.account13 != undefined && this.data.account14 != undefined && this.data.account13 != '' && this.data.account14 != '') {
          //   db.collection('sport001' + val[9]).add({
          //     data: {
          //       _id: this.data.account13,
          //       name: this.data.account14
          //     }
          //   })
          // }
          // if (this.data.account21 != undefined && this.data.account22 != undefined && this.data.account21 != '' && this.data.account22 != '') {
          //   db.collection('sport002' + val[9]).add({
          //     data: {
          //       _id: this.data.account21,
          //       name: this.data.account22
          //     }
          //   })
          // }
          // if (this.data.account23 != undefined && this.data.account24 != undefined && this.data.account23 != '' && this.data.account24 != '') {
          //   db.collection('sport002' + val[9]).add({
          //     data: {
          //       _id: this.data.account23,
          //       name: this.data.account24
          //     }
          //   })
          // }
          // if (this.data.account31 != undefined && this.data.account32 != undefined && this.data.account31 != '' && this.data.account32 != '') {
          //   db.collection('sport003' + val[9]).add({
          //     data: {
          //       _id: this.data.account31,
          //       name: this.data.account32
          //     }
          //   })
          // }
          // if (this.data.account33 != undefined && this.data.account34 != undefined && this.data.account33 != '' && this.data.account34 != '') {
          //   db.collection('sport003' + val[9]).add({
          //     data: {
          //       _id: this.data.account33,
          //       name: this.data.account34
          //     }
          //   })
          // }
          // if (this.data.account41 != undefined && this.data.account42 != undefined && this.data.account41 != '' && this.data.account42 != '') {
          //   db.collection('sport004' + val[9]).add({
          //     data: {
          //       _id: this.data.account41,
          //       name: this.data.account42
          //     }
          //   })
          // }
          // if (this.data.account43 != undefined && this.data.account44 != undefined && this.data.account43 != '' && this.data.account44 != '') {
          //   db.collection('sport004' + val[9]).add({
          //     data: {
          //       _id: this.data.account43,
          //       name: this.data.account44
          //     }
          //   })
          // }
          // if (this.data.account51 != undefined && this.data.account52 != undefined && this.data.account51 != '' && this.data.account52 != '') {
          //   db.collection('sport005' + val[9]).add({
          //     data: {
          //       _id: this.data.account51,
          //       name: this.data.account52
          //     }
          //   })
          // }
          // if (this.data.account61 != undefined && this.data.account62 != undefined && this.data.account61 != '' && this.data.account62 != '') {
          //   db.collection('sport006' + val[9]).add({
          //     data: {
          //       _id: this.data.account61,
          //       name: this.data.account62
          //     }
          //   })
          // }
          // if (this.data.account63 != undefined && this.data.account64 != undefined && this.data.account63 != '' && this.data.account64 != '') {
          //   db.collection('sport006' + val[9]).add({
          //     data: {
          //       _id: this.data.account63,
          //       name: this.data.account64
          //     }
          //   })
          // }
          // if (this.data.account71 != undefined && this.data.account72 != undefined && this.data.account71 != '' && this.data.account72 != '') {
          //   db.collection('sport007' + val[9]).add({
          //     data: {
          //       _id: this.data.account71,
          //       name: this.data.account72
          //     }
          //   })
          // }
          // if (this.data.account73 != undefined && this.data.account74 != undefined && this.data.account73 != '' && this.data.account74 != '') {
          //   db.collection('sport007' + val[9]).add({
          //     data: {
          //       _id: this.data.account73,
          //       name: this.data.account74
          //     }
          //   })
          // }
          // if (this.data.account81 != undefined && this.data.account82 != undefined && this.data.account81 != '' && this.data.account82 != '') {
          //   db.collection('sport008' + val[9]).add({
          //     data: {
          //       _id: this.data.account81,
          //       name: this.data.account82
          //     }
          //   })
          // }
          // if (this.data.account83 != undefined && this.data.account84 != undefined && this.data.account83 != '' && this.data.account84 != '') {
          //   db.collection('sport008' + val[9]).add({
          //     data: {
          //       _id: this.data.account83,
          //       name: this.data.account84
          //     }
          //   })
          // }
          // if (this.data.account85 != undefined && this.data.account86 != undefined && this.data.account85 != '' && this.data.account86 != '') {
          //   db.collection('sport008' + val[9]).add({
          //     data: {
          //       _id: this.data.account85,
          //       name: this.data.account86
          //     }
          //   })
          // }
          // if (this.data.account87 != undefined && this.data.account88 != undefined && this.data.account87 != '' && this.data.account88 != '') {
          //   db.collection('sport008' + val[9]).add({
          //     data: {
          //       _id: this.data.account87,
          //       name: this.data.account88
          //     }
          //   })
          // }
          // if (this.data.account91 != undefined && this.data.account92 != undefined && this.data.account91 != '' && this.data.account92 != '') {
          //   db.collection('sport009' + val[9]).add({
          //     data: {
          //       _id: this.data.account91,
          //       name: this.data.account92
          //     }
          //   })
          // }
          // if (this.data.account93 != undefined && this.data.account94 != undefined && this.data.account93 != '' && this.data.account94 != '') {
          //   db.collection('sport009' + val[9]).add({
          //     data: {
          //       _id: this.data.account93,
          //       name: this.data.account94
          //     }
          //   })
          // }
          // if (this.data.account101 != undefined && this.data.account102 != undefined && this.data.account101 != '' && this.data.account102 != '') {
          //   db.collection('sport010' + val[9]).add({
          //     data: {
          //       _id: this.data.account101,
          //       name: this.data.account102
          //     }
          //   })
          // }
          // if (this.data.account103 != undefined && this.data.account104 != undefined && this.data.account103 != '' && this.data.account104 != '') {
          //   db.collection('sport010' + val[9]).add({
          //     data: {
          //       _id: this.data.account103,
          //       name: this.data.account104
          //     }
          //   })
          // }
          // if (this.data.account111 != undefined && this.data.account112 != undefined && this.data.account111 != '' && this.data.account112 != '') {
          //   db.collection('sport011' + val[9]).add({
          //     data: {
          //       _id: this.data.account111,
          //       name: this.data.account112
          //     }
          //   })
          // }
          // if (this.data.account113 != undefined && this.data.account114 != undefined && this.data.account113 != '' && this.data.account114 != '') {
          //   db.collection('sport011' + val[9]).add({
          //     data: {
          //       _id: this.data.account113,
          //       name: this.data.account114
          //     }
          //   })
          // }
          // if (this.data.account121 != undefined && this.data.account122 != undefined && this.data.account121 != '' && this.data.account122 != '') {
          //   db.collection('sport012' + val[9]).add({
          //     data: {
          //       _id: this.data.account121,
          //       name: this.data.account122
          //     }
          //   })
          // }
          // if (this.data.account123 != undefined && this.data.account124 != undefined && this.data.account123 != '' && this.data.account124 != '') {
          //   db.collection('sport012' + val[9]).add({
          //     data: {
          //       _id: this.data.account123,
          //       name: this.data.account124
          //     }
          //   })
          // }
          // if (this.data.account131 != undefined && this.data.account132 != undefined && this.data.account131 != '' && this.data.account132 != '') {
          //   db.collection('sport013' + val[9]).add({
          //     data: {
          //       _id: this.data.account131,
          //       name: this.data.account132
          //     }
          //   })
          // }
          // if (this.data.account141 != undefined && this.data.account142 != undefined && this.data.account141 != '' && this.data.account142 != '') {
          //   db.collection('sport014' + val[9]).add({
          //     data: {
          //       _id: this.data.account141,
          //       name: this.data.account142
          //     }
          //   })
          // }
          // if (this.data.account143 != undefined && this.data.account144 != undefined && this.data.account143 != '' && this.data.account144 != '') {
          //   db.collection('sport014' + val[9]).add({
          //     data: {
          //       _id: this.data.account143,
          //       name: this.data.account144
          //     }
          //   })
          // }
          // if (this.data.account151 != undefined && this.data.account152 != undefined && this.data.account151 != '' && this.data.account152 != '') {
          //   db.collection('sport015' + val[9]).add({
          //     data: {
          //       _id: this.data.account151,
          //       name: this.data.account152
          //     }
          //   })
          // }
          // if (this.data.account153 != undefined && this.data.account154 != undefined && this.data.account154 != '' && this.data.account154 != '') {
          //   db.collection('sport015' + val[9]).add({
          //     data: {
          //       _id: this.data.account153,
          //       name: this.data.account154
          //     }
          //   })
          // }
          // if (this.data.account161 != undefined && this.data.account162 != undefined && this.data.account161 != '' && this.data.account162 != '') {
          //   db.collection('sport016' + val[9]).add({
          //     data: {
          //       _id: this.data.account161,
          //       name: this.data.account162
          //     }
          //   })
          // }
          // if (this.data.account163 != undefined && this.data.account164 != undefined && this.data.account163 != '' && this.data.account164 != '') {
          //   db.collection('sport016' + val[9]).add({
          //     data: {
          //       _id: this.data.account163,
          //       name: this.data.account164
          //     }
          //   })
          // }
          // if (this.data.account165 != undefined && this.data.account166 != undefined && this.data.account165 != '' && this.data.account166 != '') {
          //   db.collection('sport016' + val[9]).add({
          //     data: {
          //       _id: this.data.account165,
          //       name: this.data.account166
          //     }
          //   })
          // }
          // if (this.data.account167 != undefined && this.data.account168 != undefined && this.data.account167 != '' && this.data.account168 != '') {
          //   db.collection('sport016' + val[9]).add({
          //     data: {
          //       _id: this.data.account167,
          //       name: this.data.account168
          //     }
          //   })
          // }
          console.log(111111)
          db.collection('grade' + val[9]).doc(val)
            .update({
              data: {
                iffill: 1,
                sport0011: this.data.account11,
                name0011: this.data.account12,
                sport0012: this.data.account13,
                name0012: this.data.account14,
                sport0021: this.data.account21,
                name0021: this.data.account22,
                sport0022: this.data.account23,
                name0022: this.data.account24,
                sport0031: this.data.account31,
                name0031: this.data.account32,
                sport0032: this.data.account33,
                name0032: this.data.account34,
                sport0041: this.data.account41,
                name0041: this.data.account42,
                sport0042: this.data.account43,
                name0042: this.data.account44,
                sport0051: this.data.account51,
                name0051: this.data.account52,

                sport0061: this.data.account61,
                name0061: this.data.account62,
                sport0062: this.data.account63,
                name0062: this.data.account64,
                sport0071: this.data.account71,
                name0071: this.data.account72,
                sport0072: this.data.account73,
                name0072: this.data.account74,
                sport0081: this.data.account81,
                name0081: this.data.account82,
                sport0082: this.data.account83,
                name0082: this.data.account84,
                sport0083: this.data.account85,
                name0083: this.data.account86,
                sport0084: this.data.account87,
                name0084: this.data.account88,

                sport0091: this.data.account91,
                name0091: this.data.account92,
                sport0092: this.data.account93,
                name0092: this.data.account94,
                sport0101: this.data.account101,
                name0101: this.data.account102,
                sport0102: this.data.account103,
                name0102: this.data.account104,
                sport0111: this.data.account111,
                name0111: this.data.account112,
                sport0112: this.data.account113,
                name0112: this.data.account114,
                sport0121: this.data.account121,
                name0121: this.data.account122,
                sport0122: this.data.account123,
                name0122: this.data.account124,
                sport0131: this.data.account131,
                name0131: this.data.account132,

                sport0141: this.data.account141,
                name0141: this.data.account142,
                sport0142: this.data.account143,
                name0142: this.data.account144,
                sport0151: this.data.account151,
                name0151: this.data.account152,
                sport0152: this.data.account153,
                name0152: this.data.account154,
                sport0161: this.data.account161,
                name0161: this.data.account162,
                sport0162: this.data.account163,
                name0162: this.data.account164,
                sport0163: this.data.account165,
                name0163: this.data.account166,
                sport0164: this.data.account167,
                name0164: this.data.account168,
              }
            })
              wx.hideLoading()
              wx.showModal({
                title: "提示！",
                content: '申报成功!',
                showCancel: false,
              })
              wx.reLaunch({
                url: '../sport3/sport3',
              })
        }
      }
    })

  }
})