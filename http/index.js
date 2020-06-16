import requestUrl from './requestUrl.js'

const requestApi = 'http://150.109.38.111:8081/renren-api'

export const loginUrl = (data) => requestUrl(requestApi + '', data, 'GET');// 登录接口
export const speechUrl = (data) => requestUrl('https://vop.baidu.com/server_api', data, 'POST');// 语音识别接口
export const registerFeatch = (data) => requestUrl(requestApi + '/api/cuserRegister', data, 'POST');// 注册接口

