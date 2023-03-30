- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

企划：

共4个页面 index login choose details

在开始页面(login)用户通过点击button按钮进行微信登录，跳转至绑定个人信息页面(index），绑定完成后进入选择页面(choose)，进行选择社团，点击社团可进入详情页面(details)查看社团提供的详情信息（预先存在数据库中）【这一步可省略】，选择社团后跳转至index页面进行确定 ，将数据传递至数据库中。

后续推出修改社团页面(change)

云开发数据库参数:

集合 userInfo

集合中字段 _id _openid num(number) name(string) cho[ , ] (number) 