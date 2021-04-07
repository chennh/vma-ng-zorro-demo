import axios, { AxiosRequestConfig } from 'axios'
import ProxyPageParam from './params/ProxyPageParam'
import Page from './definitions/Page'
import PlatformPageBO from './definitions/PlatformPageBO'
import UpdatePlatformREQ from './definitions/UpdatePlatformREQ'
import ProxyPageGETParam from './params/ProxyPageGETParam'
import EnterprisePageBO from './definitions/EnterprisePageBO'
import ResetPasswordREQ from './definitions/ResetPasswordREQ'
import UpdateStationNumREQ from './definitions/UpdateStationNumREQ'
import UpdatePlatformStatusREQ from './definitions/UpdatePlatformStatusREQ'
import ProxyGetParam from './params/ProxyGetParam'
import PlatformBO from './definitions/PlatformBO'
import ProxyAddREQ from './definitions/ProxyAddREQ'

export class ProxyApi {

  /**
   * 代理商列表
   *
   * @param { ProxyPageParam } params
   * @reutrn { Promise<Page<PlatformPageBO>> }
   */
  public static page(
    params: ProxyPageParam,
    config?: AxiosRequestConfig): Promise<Page<PlatformPageBO>> {
    return axios(Object.assign({
      url: `/oem/v1.0/proxy`,
      method: 'get',
      params,
      responseType: 'json'
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
      url: `/oem/v1.0/proxy`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业列表
   *
   * @param { ProxyPageGETParam } params
   * @reutrn { Promise<Page<EnterprisePageBO>> }
   */
  public static pageGET(
    params: ProxyPageGETParam,
    config?: AxiosRequestConfig): Promise<Page<EnterprisePageBO>> {
    return axios(Object.assign({
      url: `/oem/v1.0/proxy/enterprise`,
      method: 'get',
      params,
      responseType: 'json'
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
      url: `/oem/v1.0/proxy/reset`,
      method: 'put',
      data,
      responseType: 'text'
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
      url: `/oem/v1.0/proxy/station`,
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
      url: `/oem/v1.0/proxy/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 代理商详情
   *
   * @param { ProxyGetParam } params
   * @reutrn { Promise<PlatformBO> }
   */
  public static get(
    params: ProxyGetParam,
    config?: AxiosRequestConfig): Promise<PlatformBO> {
    return axios(Object.assign({
      url: `/oem/v1.0/proxy/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增代理
   *
   * @param { ProxyAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ProxyAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/proxy/新增代理商`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
