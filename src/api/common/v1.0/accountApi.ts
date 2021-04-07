import axios, { AxiosRequestConfig } from 'axios'
import UpdateStaffMessageREQ from './definitions/UpdateStaffMessageREQ'
import LoginREQ from './definitions/LoginREQ'
import LoginBO from './definitions/LoginBO'
import EnterpriseParamByKeyBO from './definitions/EnterpriseParamByKeyBO'
import AccountSendSmsParam from './params/AccountSendSmsParam'
import SendSmsBO from './definitions/SendSmsBO'
import StaffPasswordSettingREQ from './definitions/StaffPasswordSettingREQ'
import AccountSwitchEntParam from './params/AccountSwitchEntParam'

export class AccountApi {

  /**
   * 修改当前员工信息
   *
   * @param { UpdateStaffMessageREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStaffMessage(
    data: UpdateStaffMessageREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/account/account`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 员工登录
   *
   * @param { LoginREQ } data
   * @reutrn { Promise<LoginBO> }
   */
  public static login(
    data: LoginREQ,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/account/login`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登出
   *
   * @reutrn { Promise<void> }
   */
  public static logout(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/account/logout`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询当前账号信息
   *
   * @reutrn { Promise<LoginBO> }
   */
  public static menuList(config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/account/message`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业属性选项(返回键值对)
   *
   * @reutrn { Promise<EnterpriseParamByKeyBO> }
   */
  public static enterpriseListByKey(config?: AxiosRequestConfig): Promise<EnterpriseParamByKeyBO> {
    return axios(Object.assign({
      url: `/common/v1.0/account/option/key`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发送短信验证码
   *
   * @param { AccountSendSmsParam } data
   * @reutrn { Promise<SendSmsBO> }
   */
  public static sendSms(
    data: AccountSendSmsParam,
    config?: AxiosRequestConfig): Promise<SendSmsBO> {
    return axios(Object.assign({
      url: `/common/v1.0/account/send/sms/${data.mobile}/${data.domain}`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 设置密码
   *
   * @param { StaffPasswordSettingREQ } data
   * @reutrn { Promise<void> }
   */
  public static settingPassword(
    data: StaffPasswordSettingREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/account/setting/password`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 切换企业
   *
   * @param { AccountSwitchEntParam } params
   * @reutrn { Promise<LoginBO> }
   */
  public static switchEnt(
    params: AccountSwitchEntParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/account/switch/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
