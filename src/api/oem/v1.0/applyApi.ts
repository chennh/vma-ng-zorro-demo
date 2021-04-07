import axios, { AxiosRequestConfig } from 'axios'
import ApplyPageParam from './params/ApplyPageParam'
import Page from './definitions/Page'
import EnterprisePageBO from './definitions/EnterprisePageBO'
import TrialAuditREQ from './definitions/TrialAuditREQ'
import ApplyGetParam from './params/ApplyGetParam'
import EnterpriseDetailBO from './definitions/EnterpriseDetailBO'

export class ApplyApi {

  /**
   * 申请试用企业列表
   *
   * @param { ApplyPageParam } params
   * @reutrn { Promise<Page<EnterprisePageBO>> }
   */
  public static page(
    params: ApplyPageParam,
    config?: AxiosRequestConfig): Promise<Page<EnterprisePageBO>> {
    return axios(Object.assign({
      url: `/oem/v1.0/apply`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 申请试用企业审核
   *
   * @param { TrialAuditREQ } data
   * @reutrn { Promise<void> }
   */
  public static trialAudit(
    data: TrialAuditREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/apply/audit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 试用申请企业的详情信息
   *
   * @param { ApplyGetParam } params
   * @reutrn { Promise<EnterpriseDetailBO> }
   */
  public static get(
    params: ApplyGetParam,
    config?: AxiosRequestConfig): Promise<EnterpriseDetailBO> {
    return axios(Object.assign({
      url: `/oem/v1.0/apply/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
