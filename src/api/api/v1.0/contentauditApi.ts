import axios, { AxiosRequestConfig } from 'axios'
import ContentauditGetPageParam from './params/ContentauditGetPageParam'
import Page from './definitions/Page'
import ContentAuditLogPageBO from './definitions/ContentAuditLogPageBO'
import ContentAuditLogEditDTO from './definitions/ContentAuditLogEditDTO'

export class ContentauditApi {

  /**
   * 获取审核列表
   *
   * @param { ContentauditGetPageParam } params
   * @reutrn { Promise<Page<ContentAuditLogPageBO>> }
   */
  public static getPage(
    params: ContentauditGetPageParam,
    config?: AxiosRequestConfig): Promise<Page<ContentAuditLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentaudit`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 审核
   *
   * @param { ContentAuditLogEditDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: ContentAuditLogEditDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentaudit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
