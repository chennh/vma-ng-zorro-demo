import axios, { AxiosRequestConfig } from 'axios'
import EnterpriseConfigWechatDetailBO from './definitions/EnterpriseConfigWechatDetailBO'
import EnterpriseConfigWechatSetREQ from './definitions/EnterpriseConfigWechatSetREQ'

export class EnterpriseConfigWechatApi {

  /**
   * 删除企业微信配置信息
   *
   * @reutrn { Promise<void> }
   */
  public static del(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise_config_wechat`,
      method: 'delete',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取企业微信配置信息详情
   *
   * @reutrn { Promise<EnterpriseConfigWechatDetailBO> }
   */
  public static detail(config?: AxiosRequestConfig): Promise<EnterpriseConfigWechatDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise_config_wechat/detail`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 编辑企业微信配置信息
   *
   * @param { EnterpriseConfigWechatSetREQ } data
   * @reutrn { Promise<void> }
   */
  public static set(
    data: EnterpriseConfigWechatSetREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise_config_wechat/set`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
