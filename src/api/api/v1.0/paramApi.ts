import axios, { AxiosRequestConfig } from 'axios'
import AddDefaultParamDTO from './definitions/AddDefaultParamDTO'
import ParamParamListParam from './params/ParamParamListParam'
import AllParamBO from './definitions/AllParamBO'
import ParamSortREQ from './definitions/ParamSortREQ'

export class ParamApi {

  /**
   * 批量添加
   *
   * @param { AddDefaultParamDTO } data
   * @reutrn { Promise<void> }
   */
  public static addColumn(
    data: AddDefaultParamDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/param/default/columm/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重置并批量添加
   *
   * @param { AddDefaultParamDTO } data
   * @reutrn { Promise<void> }
   */
  public static resetColumn(
    data: AddDefaultParamDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/param/default/columm/reset`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取字段列表
   *
   * @param { ParamParamListParam } params
   * @reutrn { Promise<AllParamBO[]> }
   */
  public static paramList(
    params: ParamParamListParam,
    config?: AxiosRequestConfig): Promise<AllParamBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/param/default/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 批量更新顺序
   *
   * @param { ParamSortREQ } data
   * @reutrn { Promise<void> }
   */
  public static sort(
    data: ParamSortREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/param/default/sort`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
