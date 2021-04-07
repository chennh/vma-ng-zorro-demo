import axios, { AxiosRequestConfig } from 'axios'
import CustomerAddDupDTO from './definitions/CustomerAddDupDTO'
import CustomerListByDupDTO from './definitions/CustomerListByDupDTO'
import Page from './definitions/Page'
import CustomerInfoDupListBO from './definitions/CustomerInfoDupListBO'
import ParamEnumResp from './definitions/ParamEnumResp'

export class DuplicateApi {

  /**
   * 客户合并
   *
   * @param { CustomerAddDupDTO } data
   * @reutrn { Promise<void> }
   */
  public static add(
    data: CustomerAddDupDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/duplicate/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 客户查重列表
   *
   * @param { CustomerListByDupDTO } data
   * @reutrn { Promise<Page<CustomerInfoDupListBO>> }
   */
  public static getCustomerListByDup(
    data: CustomerListByDupDTO,
    config?: AxiosRequestConfig): Promise<Page<CustomerInfoDupListBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/duplicate/list`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取查重字段列表
   *
   * @reutrn { Promise<ParamEnumResp[]> }
   */
  public static enumList(config?: AxiosRequestConfig): Promise<ParamEnumResp[]> {
    return axios(Object.assign({
      url: `/api/v1.0/duplicate/param`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
