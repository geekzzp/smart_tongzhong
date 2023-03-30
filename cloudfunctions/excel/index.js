const cloud = require('wx-server-sdk')
//这里最好也初始化一下你的云开发环境
cloud.init()
//操作excel用的类库
const xlsx = require('node-xlsx');

// 云函数入口函数
exports.main = async(event, context) => {
    // let {userdata} = event
    let {userdata} = cloud.database().collection('userInfo').get()
    //1,定义excel表格名
    let dataCVS = 'test.xlsx'
    //2，定义存储数据的
    let alldata = [];
    let row = ['学号', '姓名', '社团']; //表属性
    alldata.push(row);

    for (let key in userdata) {
      let arr = [];
      arr.push(userdata[key]._id);
      arr.push(userdata[key].name);
      arr.push(userdata[key].wisenum);
      alldata.push(arr)
    }
    //3，把数据保存到excel里
    var buffer = await xlsx.build([{
      name: "mySheetName",
      data: alldata
    }]);
    //4，把excel文件保存到云存储里
    return await cloud.uploadFile({
      cloudPath: dataCVS,
      fileContent: buffer, //excel二进制文件
    })
}