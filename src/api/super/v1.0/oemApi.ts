import axios, { AxiosRequestConfig } from 'axios'
import OemPageParam from './params/OemPageParam'
import Page from './definitions/Page'
import PlatformPageBO from './definitions/PlatformPageBO'
import OemAddREQ from './definitions/OemAddREQ'
import UpdatePlatformREQ from './definitions/UpdatePlatformREQ'
import UpdateOemLoginConfigREQ from './definitions/UpdateOemLoginConfigREQ'
import ResetPasswordREQ from './definitions/ResetPasswordREQ'
import OemResetSmsConfigParam from './params/OemResetSmsConfigParam'
import ConfigSmsREQ from './definitions/ConfigSmsREQ'
import OemDetailSmsConfigParam from './params/OemDetailSmsConfigParam'
import ConfigSmsBO from './definitions/ConfigSmsBO'
import UpdateStationNumREQ from './definitions/UpdateStationNumREQ'
import UpdatePlatformStatusREQ from './definitions/UpdatePlatformStatusREQ'
import OemGetParam from './params/OemGetParam'
import PlatformBO from './definitions/PlatformBO'

export class OemApi {

  /**
   * 服务商列表
   *
   * @param { OemPageParam } params
   * @reutrn { Promise<Page<PlatformPageBO>> }
   */
  public static page(
    params: OemPageParam,
    config?: AxiosRequestConfig): Promise<Page<PlatformPageBO>> {
    return axios(Object.assign({
      url: `/super/v1.0/oem`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增服务商
   *
   * @param { OemAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: OemAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改服务商信息
   *
   * @param { UpdatePlatformREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdatePlatformREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 初始化超级后台账号
   *
   * @reutrn { Promise<void> }
   */
  public static initializeSuperAccount(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/initialize`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改服务商登录页配置
   *
   * @param { UpdateOemLoginConfigREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateOemLoginConfig(
    data: UpdateOemLoginConfigREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/login/config`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重置密码
   *
   * @param { ResetPasswordREQ } data
   * @reutrn { Promise<void> }
   */
  public static resetPassword(
    data: ResetPasswordREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/reset`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重置服务商短信配置
   *
   * @param { OemResetSmsConfigParam } params
   * @reutrn { Promise<void> }
   */
  public static resetSmsConfig(
    params: OemResetSmsConfigParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/reset/sms/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 配置修改短信
   *
   * @param { ConfigSmsREQ } data
   * @reutrn { Promise<void> }
   */
  public static configSms(
    data: ConfigSmsREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/sms`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 服务商短信配置详情
   *
   * @param { OemDetailSmsConfigParam } params
   * @reutrn { Promise<ConfigSmsBO> }
   */
  public static detailSmsConfig(
    params: OemDetailSmsConfigParam,
    config?: AxiosRequestConfig): Promise<ConfigSmsBO> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/sms/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改工位数
   *
   * @param { UpdateStationNumREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStationNum(
    data: UpdateStationNumREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/station`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 批量修改状态
   *
   * @param { UpdatePlatformStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: UpdatePlatformStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 服务商详情
   *
   * @param { OemGetParam } params
   * @reutrn { Promise<PlatformBO> }
   */
  public static get(
    params: OemGetParam,
    config?: AxiosRequestConfig): Promise<PlatformBO> {
    return axios(Object.assign({
      url: `/super/v1.0/oem/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
