import axios, { AxiosRequestConfig } from 'axios'
import WxMpAuthBO from './definitions/WxMpAuthBO'
import WxmpauthAppletSessionParam from './params/WxmpauthAppletSessionParam'
import WxMaJscode2SessionResult from './definitions/WxMaJscode2SessionResult'
import WxmpauthJumpParam from './params/WxmpauthJumpParam'
import WxmpauthGotoPreAuthUrlParam from './params/WxmpauthGotoPreAuthUrlParam'
import WxDomainConfigBO from './definitions/WxDomainConfigBO'
import WxmpauthGetAuthorizerInfoParam from './params/WxmpauthGetAuthorizerInfoParam'
import WxOpenAuthorizerInfoResult from './definitions/WxOpenAuthorizerInfoResult'
import OnlineStatusRsp from './definitions/OnlineStatusRsp'
import WxmpauthPhoneParam from './params/WxmpauthPhoneParam'
import WxmpauthGetCodeParam from './params/WxmpauthGetCodeParam'
import WxmpauthWxMaUserInfoParam from './params/WxmpauthWxMaUserInfoParam'
import WxMaUserInfo from './definitions/WxMaUserInfo'
import WxmpauthWxOpenMaServiceParam from './params/WxmpauthWxOpenMaServiceParam'
import WxOpenMaService from './definitions/WxOpenMaService'

export class WxmpauthApi {

  /**
   * 获取授权列表
   *
   * @reutrn { Promise<WxMpAuthBO[]> }
   */
  public static getList(config?: AxiosRequestConfig): Promise<WxMpAuthBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * appletSession
   *
   * @param { WxmpauthAppletSessionParam } params
   * @reutrn { Promise<WxMaJscode2SessionResult> }
   */
  public static appletSession(
    params: WxmpauthAppletSessionParam,
    config?: AxiosRequestConfig): Promise<WxMaJscode2SessionResult> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/appletSession`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 授权
   *
   * @param { WxmpauthJumpParam } params
   * @reutrn { Promise<number[]> }
   */
  public static jump(
    params: WxmpauthJumpParam,
    config?: AxiosRequestConfig): Promise<number[]> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/auth`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取预授权地址
   *
   * @param { WxmpauthGotoPreAuthUrlParam } params
   * @reutrn { Promise<void> }
   */
  public static gotoPreAuthUrl(
    params: WxmpauthGotoPreAuthUrlParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/auth/goto_auth_url`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取域名ip等信息
   *
   * @reutrn { Promise<WxDomainConfigBO> }
   */
  public static getDomainInfo(config?: AxiosRequestConfig): Promise<WxDomainConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/domain`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取授权状态
   *
   * @param { WxmpauthGetAuthorizerInfoParam } params
   * @reutrn { Promise<WxOpenAuthorizerInfoResult> }
   */
  public static getAuthorizerInfo(
    params: WxmpauthGetAuthorizerInfoParam,
    config?: AxiosRequestConfig): Promise<WxOpenAuthorizerInfoResult> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/get_authorizer_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询小程序是否上线
   *
   * @reutrn { Promise<OnlineStatusRsp> }
   */
  public static getOnlineStatus(config?: AxiosRequestConfig): Promise<OnlineStatusRsp> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/online_status`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * phone
   *
   * @param { WxmpauthPhoneParam } params
   * @reutrn { Promise<string> }
   */
  public static phone(
    params: WxmpauthPhoneParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/phone`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 生成二维码
   *
   * @param { WxmpauthGetCodeParam } params
   * @reutrn { Promise<string> }
   */
  public static getCode(
    params: WxmpauthGetCodeParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/qrcode`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * wxMaUserInfo
   *
   * @param { WxmpauthWxMaUserInfoParam } params
   * @reutrn { Promise<WxMaUserInfo> }
   */
  public static wxMaUserInfo(
    params: WxmpauthWxMaUserInfoParam,
    config?: AxiosRequestConfig): Promise<WxMaUserInfo> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/wxMaUserInfo`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * wxOpenMaService
   *
   * @param { WxmpauthWxOpenMaServiceParam } params
   * @reutrn { Promise<WxOpenMaService> }
   */
  public static wxOpenMaService(
    params: WxmpauthWxOpenMaServiceParam,
    config?: AxiosRequestConfig): Promise<WxOpenMaService> {
    return axios(Object.assign({
      url: `/api/v1.0/wxmpauth/wxOpenMaService`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
