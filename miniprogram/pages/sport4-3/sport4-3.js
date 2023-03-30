// pages/enroll/enroll.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var val = wx.getStorageSync("keymsg")
    db.collection('grade' + val[9]).doc(val).get().then(res => {
      this.setData({
        array: res.data
      })
      wx.setStorageSync("former", res.data)
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
    this.data.array.sport0011 = e.detail.value
  },
  account12: function (e) {
    this.data.array.name0011 = e.detail.value
  },
  account13: function (e) {
    this.data.array.sport0012 = e.detail.value
  },
  account14: function (e) {
    this.data.array.name0012 = e.detail.value
  },
  account21: function (e) {
    this.data.array.sport0021 = e.detail.value
  },
  account22: function (e) {
    this.data.array.name0021 = e.detail.value
  },
  account23: function (e) {
    this.data.array.sport0022 = e.detail.value
  },
  account24: function (e) {
    this.data.array.name0022 = e.detail.value
  },
  account31: function (e) {
    this.data.array.sport0031 = e.detail.value
  },
  account32: function (e) {
    this.data.array.name0031 = e.detail.value
  },
  account33: function (e) {
    this.data.array.sport0032 = e.detail.value
  },
  account34: function (e) {
    this.data.array.name0032 = e.detail.value
  },
  account41: function (e) {
    this.data.array.sport0041 = e.detail.value
  },
  account42: function (e) {
    this.data.array.name0041 = e.detail.value
  },
  account43: function (e) {
    this.data.array.sport0042 = e.detail.value
  },
  account44: function (e) {
    this.data.array.name0042 = e.detail.value
  },
  account51: function (e) {
    this.data.array.sport0051 = e.detail.value
  },
  account52: function (e) {
    this.data.array.name0051 = e.detail.value
  },
  account61: function (e) {
    this.data.array.sport0051 = e.detail.value
  },
  account62: function (e) {
    this.data.array.name0061 = e.detail.value
  },
  account63: function (e) {
    this.data.array.sport0062 = e.detail.value
  },
  account64: function (e) {
    this.data.array.name0062 = e.detail.value
  },
  account71: function (e) {
    this.data.array.sport0071 = e.detail.value
  },
  account72: function (e) {
    this.data.array.name0071 = e.detail.value
  },
  account73: function (e) {
    this.data.array.sport0072 = e.detail.value
  },
  account74: function (e) {
    this.data.array.name0072 = e.detail.value
  },
  account81: function (e) {
    this.data.array.sport0081 = e.detail.value
  },
  account82: function (e) {
    this.data.array.name0081 = e.detail.value
  },
  account83: function (e) {
    this.data.array.sport0082 = e.detail.value
  },
  account84: function (e) {
    this.data.array.name0082 = e.detail.value
  },
  account85: function (e) {
    this.data.array.sport0083 = e.detail.value
  },
  account86: function (e) {
    this.data.array.name0083 = e.detail.value
  },
  account87: function (e) {
    this.data.array.sport0084 = e.detail.value
  },
  account88: function (e) {
    this.data.array.name0084 = e.detail.value
  },
  account91: function (e) {
    this.data.array.sport0091 = e.detail.value
  },
  account92: function (e) {
    this.data.array.name0091 = e.detail.value
  },
  account93: function (e) {
    this.data.array.sport0092 = e.detail.value
  },
  account94: function (e) {
    this.data.array.name0092 = e.detail.value
  },
  account101: function (e) {
    this.data.array.sport0101 = e.detail.value
  },
  account102: function (e) {
    this.data.array.name0101 = e.detail.value
  },
  account103: function (e) {
    this.data.array.sport0102 = e.detail.value
  },
  account104: function (e) {
    this.data.array.name0102 = e.detail.value
  },
  account111: function (e) {
    this.data.array.sport0111 = e.detail.value
  },
  account112: function (e) {
    this.data.array.name0111 = e.detail.value
  },
  account113: function (e) {
    this.data.array.sport0112 = e.detail.value
  },
  account114: function (e) {
    this.data.array.name0112 = e.detail.value
  },
  account121: function (e) {
    this.data.array.sport0121 = e.detail.value
  },
  account122: function (e) {
    this.data.array.name0121 = e.detail.value
  },
  account123: function (e) {
    this.data.array.sport0122 = e.detail.value
  },
  account124: function (e) {
    this.data.array.name0122 = e.detail.value
  },
  account131: function (e) {
    this.data.array.sport0131 = e.detail.value
  },
  account132: function (e) {
    this.data.array.name0131 = e.detail.value
  },
  account141: function (e) {
    this.data.array.sport0141 = e.detail.value
  },
  account142: function (e) {
    this.data.array.name0141 = e.detail.value
  },
  account143: function (e) {
    this.data.array.sport0142 = e.detail.value
  },
  account144: function (e) {
    this.data.array.name0142 = e.detail.value
  },
  account151: function (e) {
    this.data.array.sport0151 = e.detail.value
  },
  account152: function (e) {
    this.data.array.name0151 = e.detail.value
  },
  account153: function (e) {
    this.data.array.sport0152 = e.detail.value
  },
  account154: function (e) {
    this.data.array.name0152 = e.detail.value
  },
  account161: function (e) {
    this.data.array.sport0161 = e.detail.value
  },
  account162: function (e) {
    this.data.array.name0161 = e.detail.value
  },
  account163: function (e) {
    this.data.array.sport0162 = e.detail.value
  },
  account164: function (e) {
    this.data.array.name0162 = e.detail.value
  },
  account165: function (e) {
    this.data.array.sport0163 = e.detail.value
  },
  account166: function (e) {
    this.data.array.name0163 = e.detail.value
  },
  account167: function (e) {
    this.data.array.sport0164 = e.detail.value
  },
  account168: function (e) {
    this.data.array.name0164 = e.detail.value
  },

  regist: function (e) {
    // var val = wx.getStorageSync("keymsg")
    // var former = wx.getStorageSync("former")
    // console.log(former.sport0011)
    // console.log(former.name0011)
    // console.log(former.sport0012)
    // console.log(former.name0012)
    // console.log(this.data.array.sport0011)
    // console.log(this.data.array.sport0012)

    wx.showModal({
      title: "提示！",
      content: "确认修改吗",
      showCancel: true,
      success: res => {
        if (res.confirm) {
          wx.showLoading({
            title: '修改中',
          })
          var val = wx.getStorageSync("keymsg")
          var former = wx.getStorageSync("former")
          // if (former.sport0011 != this.data.array.sport0011) {
          //   if (former.sport0011 != '' && former.sport0011 != undefined) {
          //     db.collection('sport001' + val[9]).doc(former.sport0011).remove()
          //   }
          //   if (this.data.array.sport0011 != '') {
          //     db.collection('sport001' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0011,
          //         name: this.data.array.name0011
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0011 != former.name0011) {
          //   db.collection('sport001' + val[9]).doc(former.sport0011).update({
          //     data: {
          //       name: this.data.array.name0011
          //     }
          //   })
          // }
          // if (former.sport0012 != this.data.array.sport0012) {
          //   if (former.sport0012 != '' && former.sport0012 != undefined) {
          //     db.collection('sport001' + val[9]).doc(former.sport0012).remove()
          //   }
          //   if (this.data.array.sport0012 != '') {
          //     db.collection('sport001' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0012,
          //         name: this.data.array.name0012
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0012 != former.name0012) {
          //   db.collection('sport001' + val[9]).doc(former.sport0012).update({
          //     data: {
          //       name: this.data.array.name0012
          //     }
          //   })
          // }
          // if (former.sport0021 != this.data.array.sport0021) {
          //   if (former.sport0021 != '' && former.sport0021 != undefined) {
          //     db.collection('sport002' + val[9]).doc(former.sport0021).remove()
          //   }
          //   if (this.data.array.sport0021 != '') {
          //     db.collection('sport002' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0021,
          //         name: this.data.array.name0021
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0021 != former.name0021) {
          //   db.collection('sport002' + val[9]).doc(former.sport0021).update({
          //     data: {
          //       name: this.data.array.name0021
          //     }
          //   })
          // }
          // if (former.sport0022 != this.data.array.sport0022) {
          //   if (former.sport0022 != '' && former.sport0022 != undefined) {
          //     db.collection('sport002' + val[9]).doc(former.sport0022).remove()
          //   }
          //   if (this.data.array.sport0022 != '') {
          //     db.collection('sport002' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0022,
          //         name: this.data.array.name0022
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0022 != former.name0022) {
          //   db.collection('sport002' + val[9]).doc(former.sport0022).update({
          //     data: {
          //       name: this.data.array.name0022
          //     }
          //   })
          // }
          // if (former.sport0031 != this.data.array.sport0031) {
          //   if (former.sport0031 != '' && former.sport0031 != undefined) {
          //     db.collection('sport003' + val[9]).doc(former.sport0031).remove()
          //   }
          //   if (this.data.array.sport0031 != '') {
          //     db.collection('sport003' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0031,
          //         name: this.data.array.name0031
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0031 != former.name0031) {
          //   db.collection('sport003' + val[9]).doc(former.sport0031).update({
          //     data: {
          //       name: this.data.array.name0031
          //     }
          //   })
          // }
          // if (former.sport0032 != this.data.array.sport0032) {
          //   if (former.sport0032 != '' && former.sport0032 != undefined) {
          //     db.collection('sport003' + val[9]).doc(former.sport0032).remove()
          //   }
          //   if (this.data.array.sport0032 != '') {
          //     db.collection('sport003' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0032,
          //         name: this.data.array.name0032
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0032 != former.name0032) {
          //   db.collection('sport003' + val[9]).doc(former.sport0032).update({
          //     data: {
          //       name: this.data.array.name0032
          //     }
          //   })
          // }
          // if (former.sport0041 != this.data.array.sport0041) {
          //   if (former.sport0041 != '' && former.sport0041 != undefined) {
          //     db.collection('sport004' + val[9]).doc(former.sport0041).remove()
          //   }
          //   if (this.data.array.sport0041 != '') {
          //     db.collection('sport004' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0041,
          //         name: this.data.array.name0041
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0041 != former.name0041) {
          //   db.collection('sport004' + val[9]).doc(former.sport0041).update({
          //     data: {
          //       name: this.data.array.name0041
          //     }
          //   })
          // }
          // if (former.sport0042 != this.data.array.sport0042) {
          //   if (former.sport0042 != '' && former.sport0042 != undefined) {
          //     db.collection('sport004' + val[9]).doc(former.sport0042).remove()
          //   }
          //   if (this.data.array.sport0042 != '') {
          //     db.collection('sport004' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0042,
          //         name: this.data.array.name0042
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0042 != former.name0042) {
          //   db.collection('sport004' + val[9]).doc(former.sport0042).update({
          //     data: {
          //       name: this.data.array.name0042
          //     }
          //   })
          // }
          // if (former.sport0051 != this.data.array.sport0051) {
          //   if (former.sport0051 != '' && former.sport0051 != undefined) {
          //     db.collection('sport005' + val[9]).doc(former.sport0051).remove()
          //   }
          //   if (this.data.array.sport0051 != '') {
          //     db.collection('sport005' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0051,
          //         name: this.data.array.name0051
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0051 != former.name0051) {
          //   db.collection('sport005' + val[9]).doc(former.sport0051).update({
          //     data: {
          //       name: this.data.array.name0051
          //     }
          //   })
          // }
          // if (former.sport0061 != this.data.array.sport0061) {
          //   if (former.sport0061 != '' && former.sport0061 != undefined) {
          //     db.collection('sport006' + val[9]).doc(former.sport0061).remove()
          //   }
          //   if (this.data.array.sport0051 != '') {
          //     db.collection('sport006' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0061,
          //         name: this.data.array.name0061
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0061 != former.name0061) {
          //   db.collection('sport006' + val[9]).doc(former.sport0061).update({
          //     data: {
          //       name: this.data.array.name0061
          //     }
          //   })
          // }
          // if (former.sport0062 != this.data.array.sport0062) {
          //   if (former.sport0062 != '' && former.sport0062 != undefined) {
          //     db.collection('sport006' + val[9]).doc(former.sport0062).remove()
          //   }
          //   if (this.data.array.sport0061 != '') {
          //     db.collection('sport006' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0062,
          //         name: this.data.array.name0062
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0062 != former.name0062) {
          //   db.collection('sport006' + val[9]).doc(former.sport0062).update({
          //     data: {
          //       name: this.data.array.name0062
          //     }
          //   })
          // }
          // if (former.sport0071 != this.data.array.sport0071) {
          //   if (former.sport0071 != '' && former.sport0071 != undefined) {
          //     db.collection('sport007' + val[9]).doc(former.sport0071).remove()
          //   }
          //   if (this.data.array.sport0071 != '') {
          //     db.collection('sport007' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0071,
          //         name: this.data.array.name0071
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0071 != former.name0071) {
          //   db.collection('sport007' + val[9]).doc(former.sport0071).update({
          //     data: {
          //       name: this.data.array.name0071
          //     }
          //   })
          // }
          // if (former.sport0072 != this.data.array.sport0072) {
          //   if (former.sport0072 != '' && former.sport0072 != undefined) {
          //     db.collection('sport007' + val[9]).doc(former.sport0072).remove()
          //   }
          //   if (this.data.array.sport0072 != '') {
          //     db.collection('sport007' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0072,
          //         name: this.data.array.name0072
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0072 != former.name0072) {
          //   db.collection('sport007' + val[9]).doc(former.sport0072).update({
          //     data: {
          //       name: this.data.array.name0072
          //     }
          //   })
          // }
          // if (former.sport0081 != this.data.array.sport0081) {
          //   if (former.sport0081 != '' && former.sport0081 != undefined) {
          //     db.collection('sport008' + val[9]).doc(former.sport0081).remove()
          //   }
          //   if (this.data.array.sport0081 != '') {
          //     db.collection('sport008' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0081,
          //         name: this.data.array.name0081
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0081 != former.name0081) {
          //   db.collection('sport008' + val[9]).doc(former.sport0081).update({
          //     data: {
          //       name: this.data.array.name0081
          //     }
          //   })
          // }
          // if (former.sport0082 != this.data.array.sport0082) {
          //   if (former.sport0082 != '' && former.sport0082 != undefined) {
          //     db.collection('sport008' + val[9]).doc(former.sport0082).remove()
          //   }
          //   if (this.data.array.sport0082 != '') {
          //     db.collection('sport008' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0082,
          //         name: this.data.array.name0082
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0082 != former.name0082) {
          //   db.collection('sport008' + val[9]).doc(former.sport0082).update({
          //     data: {
          //       name: this.data.array.name0082
          //     }
          //   })
          // }
          // if (former.sport0083 != this.data.array.sport0083) {
          //   if (former.sport0083 != '' && former.sport0083 != undefined) {
          //     db.collection('sport008' + val[9]).doc(former.sport0083).remove()
          //   }
          //   if (this.data.array.sport0083 != '') {
          //     db.collection('sport008' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0083,
          //         name: this.data.array.name0083
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0083 != former.name0083) {
          //   db.collection('sport008' + val[9]).doc(former.sport0083).update({
          //     data: {
          //       name: this.data.array.name0083
          //     }
          //   })
          // }
          // if (former.sport0084 != this.data.array.sport0084) {
          //   if (former.sport0084 != '' && former.sport0084 != undefined) {
          //     db.collection('sport008' + val[9]).doc(former.sport0084).remove()
          //   }
          //   if (this.data.array.sport0084 != '') {
          //     db.collection('sport008' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0084,
          //         name: this.data.array.name0084
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0084 != former.name0084) {
          //   db.collection('sport008' + val[9]).doc(former.sport0084).update({
          //     data: {
          //       name: this.data.array.name0084
          //     }
          //   })
          // }
          // if (former.sport0091 != this.data.array.sport0091) {
          //   if (former.sport0091 != '' && former.sport0091 != undefined) {
          //     db.collection('sport009' + val[9]).doc(former.sport0091).remove()
          //   }
          //   if (this.data.array.sport0091 != '') {
          //     db.collection('sport009' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0091,
          //         name: this.data.array.name0091
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0091 != former.name0091) {
          //   db.collection('sport009' + val[9]).doc(former.sport0091).update({
          //     data: {
          //       name: this.data.array.name0091
          //     }
          //   })
          // }
          // if (former.sport0092 != this.data.array.sport0092) {
          //   if (former.sport0092 != '' && former.sport0092 != undefined) {
          //     db.collection('sport009' + val[9]).doc(former.sport0092).remove()
          //   }
          //   if (this.data.array.sport0092 != '') {
          //     db.collection('sport009' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0092,
          //         name: this.data.array.name0092
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0092 != former.name0092) {
          //   db.collection('sport009' + val[9]).doc(former.sport0092).update({
          //     data: {
          //       name: this.data.array.name0092
          //     }
          //   })
          // }
          // if (former.sport0101 != this.data.array.sport0101) {
          //   if (former.sport0101 != '' && former.sport0101 != undefined) {
          //     db.collection('sport010' + val[9]).doc(former.sport0101).remove()
          //   }
          //   if (this.data.array.sport0101 != '') {
          //     db.collection('sport010' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0101,
          //         name: this.data.array.name0101
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0101 != former.name0101) {
          //   db.collection('sport010' + val[9]).doc(former.sport0101).update({
          //     data: {
          //       name: this.data.array.name0101
          //     }
          //   })
          // }
          // if (former.sport0102 != this.data.array.sport0102) {
          //   if (former.sport0102 != '' && former.sport0102 != undefined) {
          //     db.collection('sport010' + val[9]).doc(former.sport0102).remove()
          //   }
          //   if (this.data.array.sport0102 != '') {
          //     db.collection('sport010' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0102,
          //         name: this.data.array.name0102
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0102 != former.name0102) {
          //   db.collection('sport010' + val[9]).doc(former.sport0102).update({
          //     data: {
          //       name: this.data.array.name0102
          //     }
          //   })
          // }
          // if (former.sport0111 != this.data.array.sport0111) {
          //   if (former.sport0111 != '' && former.sport0111 != undefined) {
          //     db.collection('sport011' + val[9]).doc(former.sport0111).remove()
          //   }
          //   if (this.data.array.sport0111 != '') {
          //     db.collection('sport011' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0111,
          //         name: this.data.array.name0111
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0111 != former.name0111) {
          //   db.collection('sport011' + val[9]).doc(former.sport0111).update({
          //     data: {
          //       name: this.data.array.name0111
          //     }
          //   })
          // }
          // if (former.sport0112 != this.data.array.sport0112) {
          //   if (former.sport0112 != '' && former.sport0112 != undefined) {
          //     db.collection('sport011' + val[9]).doc(former.sport0112).remove()
          //   }
          //   if (this.data.array.sport0112 != '') {
          //     db.collection('sport011' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0112,
          //         name: this.data.array.name0112
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0112 != former.name0112) {
          //   db.collection('sport011' + val[9]).doc(former.sport0112).update({
          //     data: {
          //       name: this.data.array.name0112
          //     }
          //   })
          // }
          // if (former.sport0121 != this.data.array.sport0121) {
          //   if (former.sport0121 != '' && former.sport0121 != undefined) {
          //     db.collection('sport012' + val[9]).doc(former.sport0121).remove()
          //   }
          //   if (this.data.array.sport0121 != '') {
          //     db.collection('sport012' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0121,
          //         name: this.data.array.name0121
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0121 != former.name0121) {
          //   db.collection('sport012' + val[9]).doc(former.sport0121).update({
          //     data: {
          //       name: this.data.array.name0121
          //     }
          //   })
          // }
          // if (former.sport0122 != this.data.array.sport0122) {
          //   if (former.sport0122 != '' && former.sport0122 != undefined) {
          //     db.collection('sport012' + val[9]).doc(former.sport0122).remove()
          //   }
          //   if (this.data.array.sport0122 != '') {
          //     db.collection('sport012' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0122,
          //         name: this.data.array.name0122
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0122 != former.name0122) {
          //   db.collection('sport012' + val[9]).doc(former.sport0122).update({
          //     data: {
          //       name: this.data.array.name0122
          //     }
          //   })
          // }
          // if (former.sport0131 != this.data.array.sport0131) {
          //   if (former.sport0131 != '' && former.sport0131 != undefined) {
          //     db.collection('sport013' + val[9]).doc(former.sport0131).remove()
          //   }
          //   if (this.data.array.sport0131 != '') {
          //     db.collection('sport013' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0131,
          //         name: this.data.array.name0131
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0131 != former.name0131) {
          //   db.collection('sport013' + val[9]).doc(former.sport0131).update({
          //     data: {
          //       name: this.data.array.name0131
          //     }
          //   })
          // }
          // if (former.sport0141 != this.data.array.sport0141) {
          //   if (former.sport0141 != '' && former.sport0141 != undefined) {
          //     db.collection('sport014' + val[9]).doc(former.sport0141).remove()
          //   }
          //   if (this.data.array.sport0141 != '') {
          //     db.collection('sport014' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0141,
          //         name: this.data.array.name0141
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0141 != former.name0141) {
          //   db.collection('sport014' + val[9]).doc(former.sport0141).update({
          //     data: {
          //       name: this.data.array.name0141
          //     }
          //   })
          // }
          // if (former.sport0142 != this.data.array.sport0142) {
          //   if (former.sport0142 != '' && former.sport0142 != undefined) {
          //     db.collection('sport014' + val[9]).doc(former.sport0142).remove()
          //   }
          //   if (this.data.array.sport0142 != '') {
          //     db.collection('sport014' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0142,
          //         name: this.data.array.name0142
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0142 != former.name0142) {
          //   db.collection('sport014' + val[9]).doc(former.sport0142).update({
          //     data: {
          //       name: this.data.array.name0142
          //     }
          //   })
          // }
          // if (former.sport0151 != this.data.array.sport0151) {
          //   if (former.sport0151 != '' && former.sport0151 != undefined) {
          //     db.collection('sport015' + val[9]).doc(former.sport0151).remove()
          //   }
          //   if (this.data.array.sport0151 != '') {
          //     db.collection('sport015' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0151,
          //         name: this.data.array.name0151
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0151 != former.name0151) {
          //   db.collection('sport015' + val[9]).doc(former.sport0151).update({
          //     data: {
          //       name: this.data.array.name0151
          //     }
          //   })
          // }
          // if (former.sport0152 != this.data.array.sport0152) {
          //   if (former.sport0152 != '' && former.sport0152 != undefined) {
          //     db.collection('sport015' + val[9]).doc(former.sport0152).remove()
          //   }
          //   if (this.data.array.sport0152 != '') {
          //     db.collection('sport015' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0152,
          //         name: this.data.array.name0152
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0152 != former.name0152) {
          //   db.collection('sport015' + val[9]).doc(former.sport0152).update({
          //     data: {
          //       name: this.data.array.name0152
          //     }
          //   })
          // }
          // if (former.sport0161 != this.data.array.sport0161) {
          //   if (former.sport0161 != '' && former.sport0161 != undefined) {
          //     db.collection('sport016' + val[9]).doc(former.sport0161).remove()
          //   }
          //   if (this.data.array.sport0161 != '') {
          //     db.collection('sport016' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0161,
          //         name: this.data.array.name0161
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0161 != former.name0161) {
          //   db.collection('sport016' + val[9]).doc(former.sport0161).update({
          //     data: {
          //       name: this.data.array.name0161
          //     }
          //   })
          // }
          // if (former.sport0162 != this.data.array.sport0162) {
          //   if (former.sport0162 != '' && former.sport0162 != undefined) {
          //     db.collection('sport016' + val[9]).doc(former.sport0162).remove()
          //   }
          //   if (this.data.array.sport0162 != '') {
          //     db.collection('sport016' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0162,
          //         name: this.data.array.name0162
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0162 != former.name0162) {
          //   db.collection('sport016' + val[9]).doc(former.sport0162).update({
          //     data: {
          //       name: this.data.array.name0162
          //     }
          //   })
          // }
          // if (former.sport0163 != this.data.array.sport0163) {
          //   if (former.sport0163 != '' && former.sport0163 != undefined) {
          //     db.collection('sport016' + val[9]).doc(former.sport0163).remove()
          //   }
          //   if (this.data.array.sport0163 != '') {
          //     db.collection('sport016' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0163,
          //         name: this.data.array.name0163
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0163 != former.name0163) {
          //   db.collection('sport016' + val[9]).doc(former.sport0163).update({
          //     data: {
          //       name: this.data.array.name0163
          //     }
          //   })
          // }
          // if (former.sport0164 != this.data.array.sport0164) {
          //   if (former.sport0164 != '' && former.sport0164 != undefined) {
          //     db.collection('sport016' + val[9]).doc(former.sport0164).remove()
          //   }
          //   if (this.data.array.sport0164 != '') {
          //     db.collection('sport016' + val[9]).add({
          //       data: {
          //         _id: this.data.array.sport0164,
          //         name: this.data.array.name0164
          //       }
          //     })
          //   }
          // } else if (this.data.array.name0164 != former.name0164) {
          //   db.collection('sport016' + val[9]).doc(former.sport0164).update({
          //     data: {
          //       name: this.data.array.name0164
          //     }
          //   })
          // }
          db.collection('grade' + val[9]).doc(val)
            .update({
              data: {
                iffill: 1,
                sport0011: this.data.array.sport0011,
                name0011: this.data.array.name0011,
                sport0012: this.data.array.sport0012,
                name0012: this.data.array.name0012,
                sport0021: this.data.array.sport0021,
                name0021: this.data.array.name0021,
                sport0022: this.data.array.sport0022,
                name0022: this.data.array.name0022,
                sport0031: this.data.array.sport0031,
                name0031: this.data.array.name0031,
                sport0032: this.data.array.sport0032,
                name0032: this.data.array.name0032,
                sport0041: this.data.array.sport0041,
                name0041: this.data.array.name0041,
                sport0042: this.data.array.sport0042,
                name0042: this.data.array.name0042,
                sport0051: this.data.array.sport0051,
                name0051: this.data.array.name0051,
                sport0061: this.data.array.sport0061,
                name0061: this.data.array.name0061,
                sport0062: this.data.array.sport0062,
                name0062: this.data.array.name0062,
                sport0071: this.data.array.sport0071,
                name0071: this.data.array.name0071,
                sport0072: this.data.array.sport0072,
                name0072: this.data.array.name0072,
                sport0081: this.data.array.sport0081,
                name0081: this.data.array.name0081,
                sport0082: this.data.array.sport0082,
                name0082: this.data.array.name0082,
                sport0083: this.data.array.sport0083,
                name0083: this.data.array.name0083,
                sport0084: this.data.array.sport0084,
                name0084: this.data.array.name0084,
                sport0091: this.data.array.sport0091,
                name0091: this.data.array.name0091,
                sport0092: this.data.array.sport0092,
                name0092: this.data.array.name0092,
                sport0101: this.data.array.sport0101,
                name0101: this.data.array.name0101,
                sport0102: this.data.array.sport0102,
                name0102: this.data.array.name0102,
                sport0111: this.data.array.sport0111,
                name0111: this.data.array.name0111,
                sport0112: this.data.array.sport0112,
                name0112: this.data.array.name0112,
                sport0121: this.data.array.sport0121,
                name0121: this.data.array.name0121,
                sport0122: this.data.array.sport0122,
                name0122: this.data.array.name0122,
                sport0131: this.data.array.sport0131,
                name0131: this.data.array.name0131,
                sport0141: this.data.array.sport0141,
                name0141: this.data.array.name0141,
                sport0142: this.data.array.sport0142,
                name0142: this.data.array.name0142,
                sport0151: this.data.array.sport0151,
                name0151: this.data.array.name0151,
                sport0152: this.data.array.sport0152,
                name0152: this.data.array.name0152,
                sport0161: this.data.array.sport0161,
                name0161: this.data.array.name0161,
                sport0162: this.data.array.sport0162,
                name0162: this.data.array.name0162,
                sport0163: this.data.array.sport0163,
                name0163: this.data.array.name0163,
                sport0164: this.data.array.sport0164,
                name0164: this.data.array.name0164,
              }
            })
          wx.hideLoading()
          wx.showModal({
            title: "提示！",
            content: '修改成功!',
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