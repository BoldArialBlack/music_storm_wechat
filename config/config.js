// 服务器域名
const baseUrl = 'http://10.242.52.238:8080/TomcatTest/wechat_api.jsp';
// 获取音乐信息接口地址
const getMusicsUrl = baseUrl + '?action=search&q=';
// 查看评论接口
const commentUrl = baseUrl + '?action=get_comment&msgId=';
// 查询post接口
const postUrl = baseUrl + '?action=get_post';
// 登录接口
const loginUrl = baseUrl + '?action=login';
// // 获取当前用户已购书籍接口
// const getBoughtBooksUrl = baseUrl + 'api/user/getBoughtBooks';
// // 兑换书籍接口
// const buyBookUrl = baseUrl + 'api/order/buy';


module.exports = {
  postUrl: postUrl,
  commentUrl: commentUrl,
  getMusicsUrl: getMusicsUrl,
  loginUrl: loginUrl,
};
