const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection('userInfo').where({
      _openid:event.userInfo.openId
    }).update({
      // data 传入需要局部更新的数据
      data: {
        country:"0",
        name: this.data.username,
        stunum: this.data.password
      },
    })
  } catch(e) {
    console.error(e)
  }
}