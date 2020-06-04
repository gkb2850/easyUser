import requestUrl from './requestUrl.js'

const requestApi = ''

export const loginUrl = (data) => requestUrl(requestApi + '', data, 'GET');// 登录接口
export const speechUrl = (data) => requestUrl('https://vop.baidu.com/server_api', data, 'POST');// 语音识别接口

