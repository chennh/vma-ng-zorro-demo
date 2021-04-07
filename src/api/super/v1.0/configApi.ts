import axios, { AxiosRequestConfig } from 'axios'
import AddConfigREQ from './definitions/AddConfigREQ'
import OemLinkConfigBO from './definitions/OemLinkConfigBO'

export class ConfigApi {

  /**
   * 新增/修改配置
   *
   * @param { AddConfigREQ } data
   * @reutrn { Promise<void> }
   */
  public static setConfig(
    data: AddConfigREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/config/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询配置
   *
   * @reutrn { Promise<OemLinkConfigBO> }
   */
  public static getConfig(config?: AxiosRequestConfig): Promise<OemLinkConfigBO> {
    return axios(Object.assign({
      url: `/super/v1.0/config/get`,
      method: 'post',
      responseType: 'json'
    }, config)) as any
  }

}
