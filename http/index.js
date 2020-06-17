import requestUrl from './requestUrl.js'

const requestApi = 'http://150.109.38.111:8081/renren-api'

export const loginFeatch = (data, formType) => requestUrl(requestApi + '/api/cUserLogin', data, 'POST', formType);// 登录接口
export const speechUrl = (data, formType) => requestUrl('https://vop.baidu.com/server_api', data, 'POST', formType);// 语音识别接口
export const registerFeatch = (data, formType) => requestUrl(requestApi + '/api/cuserRegister', data, 'POST', formType);// 注册接口
export const changePassFeatch = (data, formType) => requestUrl(requestApi + '/api/cuser/cModifyPassword', data, 'POST', formType);// 修改密码
export const addAddressFeatch = (data, formType) => requestUrl(requestApi + '/api/cuser/cUserAdressAdd', data, 'POST', formType);// 添加地址
export const addressListFeatch = (data, formType) => requestUrl(requestApi + '/api/cuser/cUserAdress', data, 'POST', formType);// 地址列表
export const addressUserDelFeatch = (data, formType) => requestUrl(requestApi + '/api/cuser/cUserAdressDel', data, 'POST', formType);// 地址删除

