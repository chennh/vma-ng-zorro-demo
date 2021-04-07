import axios, { AxiosRequestConfig } from 'axios'
import PlatformWxOpenMiniVersionPageParam from './params/PlatformWxOpenMiniVersionPageParam'
import Page from './definitions/Page'
import PlatformWxOpenMiniVersionPageBO from './definitions/PlatformWxOpenMiniVersionPageBO'
import PlatformWxOpenMiniVersionAddREQ from './definitions/PlatformWxOpenMiniVersionAddREQ'
import PlatformWxOpenMiniVersionOnlineREQ from './definitions/PlatformWxOpenMiniVersionOnlineREQ'
import WxOpenMiniVersionRsp from './definitions/WxOpenMiniVersionRsp'
import PlatformWxOpenMiniVersionDetailParam from './params/PlatformWxOpenMiniVersionDetailParam'
import PlatformWxOpenMiniVersionBO from './definitions/PlatformWxOpenMiniVersionBO'

export class PlatformWxOpenMiniVersionApi {

  /**
   * 获取平台微信第三方开发平台小程序版本分页
   *
   * @param { PlatformWxOpenMiniVersionPageParam } params
   * @reutrn { Promise<Page<PlatformWxOpenMiniVersionPageBO>> }
   */
  public static page(
    params: PlatformWxOpenMiniVersionPageParam,
    config?: AxiosRequestConfig): Promise<Page<PlatformWxOpenMiniVersionPageBO>> {
    return axios(Object.assign({
      url: `/super/v1.0/platform_wx_open_mini_version`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发布版本
   *
   * @param { PlatformWxOpenMiniVersionAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: PlatformWxOpenMiniVersionAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/platform_wx_open_mini_version`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 版本上线
   *
   * @param { PlatformWxOpenMiniVersionOnlineREQ } data
   * @reutrn { Promise<void> }
   */
  public static online(
    data: PlatformWxOpenMiniVersionOnlineREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/platform_wx_open_mini_version/online`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取版本列表
   *
   * @reutrn { Promise<WxOpenMiniVersionRsp[]> }
   */
  public static versionList(config?: AxiosRequestConfig): Promise<WxOpenMiniVersionRsp[]> {
    return axios(Object.assign({
      url: `/super/v1.0/platform_wx_open_mini_version/version`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 版本详情
   *
   * @param { PlatformWxOpenMiniVersionDetailParam } params
   * @reutrn { Promise<PlatformWxOpenMiniVersionBO> }
   */
  public static detail(
    params: PlatformWxOpenMiniVersionDetailParam,
    config?: AxiosRequestConfig): Promise<PlatformWxOpenMiniVersionBO> {
    return axios(Object.assign({
      url: `/super/v1.0/platform_wx_open_mini_version/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
