import axios, { AxiosRequestConfig } from 'axios'
import PlatformConfigWechatDetailBO from './definitions/PlatformConfigWechatDetailBO'
import PlatformConfigWechatSetREQ from './definitions/PlatformConfigWechatSetREQ'

export class PlatformConfigWechatApi {

  /**
   * 删除企业微信配置信息
   *
   * @reutrn { Promise<void> }
   */
  public static del(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/platform_config_wechat`,
      method: 'delete',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取平台微信配置信息详情
   *
   * @reutrn { Promise<PlatformConfigWechatDetailBO> }
   */
  public static detail(config?: AxiosRequestConfig): Promise<PlatformConfigWechatDetailBO> {
    return axios(Object.assign({
      url: `/oem/v1.0/platform_config_wechat/detail`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 编辑平台微信配置信息
   *
   * @param { PlatformConfigWechatSetREQ } data
   * @reutrn { Promise<void> }
   */
  public static set(
    data: PlatformConfigWechatSetREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/platform_config_wechat/set`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
