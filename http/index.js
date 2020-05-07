import requestUrl from './requestUrl.js'

const requestApi = ''

export const loginUrl = (data) => requestUrl(requestApi + '', data, 'get');// 登录接口

