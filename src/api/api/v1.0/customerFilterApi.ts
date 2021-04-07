import axios, { AxiosRequestConfig } from 'axios'
import AddCustomerFiterDTO from './definitions/AddCustomerFiterDTO'
import CustomerFilterDelParam from './params/CustomerFilterDelParam'
import GetFiterDTO from './definitions/GetFiterDTO'
import FiterListBO from './definitions/FiterListBO'
import SortCustomerFiterDTO from './definitions/SortCustomerFiterDTO'
import UpdateCustomerFiterDTO from './definitions/UpdateCustomerFiterDTO'

export class CustomerFilterApi {

  /**
   * 保存筛选选项
   *
   * @param { AddCustomerFiterDTO } data
   * @reutrn { Promise<void> }
   */
  public static addCustomerFilter(
    data: AddCustomerFiterDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customerFilter/addCustomerFilter`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除筛选选项
   *
   * @param { CustomerFilterDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: CustomerFilterDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customerFilter/del/${data.id}`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取筛选选项
   *
   * @param { GetFiterDTO } data
   * @reutrn { Promise<FiterListBO[]> }
   */
  public static getFilter(
    data: GetFiterDTO,
    config?: AxiosRequestConfig): Promise<FiterListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customerFilter/getFilter`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 编辑筛选选项
   *
   * @param { SortCustomerFiterDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: SortCustomerFiterDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customerFilter/sort`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑筛选选项
   *
   * @param { UpdateCustomerFiterDTO } data
   * @reutrn { Promise<void> }
   */
  public static updatePOST(
    data: UpdateCustomerFiterDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customerFilter/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
