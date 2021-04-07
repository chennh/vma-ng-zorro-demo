import axios, { AxiosRequestConfig } from 'axios'
import OperationLogFindPageParam from './params/OperationLogFindPageParam'
import Page from './definitions/Page'
import OperationLogPageBO from './definitions/OperationLogPageBO'
import OperationLogTypeBO from './definitions/OperationLogTypeBO'

export class OperationLogApi {

  /**
   * 日志分页列表
   *
   * @param { OperationLogFindPageParam } params
   * @reutrn { Promise<Page<OperationLogPageBO>> }
   */
  public static findPage(
    params: OperationLogFindPageParam,
    config?: AxiosRequestConfig): Promise<Page<OperationLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/operation_log`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询日志类型下拉框
   *
   * @reutrn { Promise<OperationLogTypeBO[]> }
   */
  public static getLoginType(config?: AxiosRequestConfig): Promise<OperationLogTypeBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/operation_log/type`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
