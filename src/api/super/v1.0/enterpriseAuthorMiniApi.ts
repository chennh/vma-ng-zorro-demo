import axios, { AxiosRequestConfig } from 'axios'
import EnterpriseAuthorMiniPageParam from './params/EnterpriseAuthorMiniPageParam'
import Page from './definitions/Page'
import EnterpriseAuthorMiniPageBO from './definitions/EnterpriseAuthorMiniPageBO'
import EnterpriseAuthorMiniAuditFailParam from './params/EnterpriseAuthorMiniAuditFailParam'
import AuditFailBO from './definitions/AuditFailBO'
import RenewAuditREQ from './definitions/RenewAuditREQ'
import EnterpriseAuthorMiniStatusParam from './params/EnterpriseAuthorMiniStatusParam'
import EnterpriseAuthorMiniUpdateVersionParam from './params/EnterpriseAuthorMiniUpdateVersionParam'
import EnterpriseAuthorMiniDetailParam from './params/EnterpriseAuthorMiniDetailParam'
import EnterpriseAuthorMiniDetailBO from './definitions/EnterpriseAuthorMiniDetailBO'

export class EnterpriseAuthorMiniApi {

  /**
   * 获取企业授权的小程序分页
   *
   * @param { EnterpriseAuthorMiniPageParam } params
   * @reutrn { Promise<Page<EnterpriseAuthorMiniPageBO>> }
   */
  public static page(
    params: EnterpriseAuthorMiniPageParam,
    config?: AxiosRequestConfig): Promise<Page<EnterpriseAuthorMiniPageBO>> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查看审核失败原因
   *
   * @param { EnterpriseAuthorMiniAuditFailParam } params
   * @reutrn { Promise<AuditFailBO> }
   */
  public static auditFail(
    params: EnterpriseAuthorMiniAuditFailParam,
    config?: AxiosRequestConfig): Promise<AuditFailBO> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/audit_fail/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 重新提交审核
   *
   * @param { RenewAuditREQ } data
   * @reutrn { Promise<void> }
   */
  public static renewAudit(
    data: RenewAuditREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/renew_audit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 刷新状态
   *
   * @param { EnterpriseAuthorMiniStatusParam } params
   * @reutrn { Promise<void> }
   */
  public static status(
    params: EnterpriseAuthorMiniStatusParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/status/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 定时查询审核状态
   *
   * @reutrn { Promise<void> }
   */
  public static taskAudit(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/task/audit`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 更新版本
   *
   * @param { EnterpriseAuthorMiniUpdateVersionParam } params
   * @reutrn { Promise<void> }
   */
  public static updateVersion(
    params: EnterpriseAuthorMiniUpdateVersionParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/update_version/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询审核信息
   *
   * @param { EnterpriseAuthorMiniDetailParam } params
   * @reutrn { Promise<EnterpriseAuthorMiniDetailBO> }
   */
  public static detail(
    params: EnterpriseAuthorMiniDetailParam,
    config?: AxiosRequestConfig): Promise<EnterpriseAuthorMiniDetailBO> {
    return axios(Object.assign({
      url: `/super/v1.0/enterprise_author_mini/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
