import axios, { AxiosRequestConfig } from 'axios'
import EnterPageParam from './params/EnterPageParam'
import Page from './definitions/Page'
import EnterprisePageBO from './definitions/EnterprisePageBO'
import PorxyAddEnterpriseREQ from './definitions/PorxyAddEnterpriseREQ'
import UpdateEnterpriseREQ from './definitions/UpdateEnterpriseREQ'
import UpdateOverdueTimeREQ from './definitions/UpdateOverdueTimeREQ'
import EnterOverdueTimeLogParam from './params/EnterOverdueTimeLogParam'
import EditOverdueTimeLogBO from './definitions/EditOverdueTimeLogBO'
import EnterGetRemarkParam from './params/EnterGetRemarkParam'
import RemarkBO from './definitions/RemarkBO'
import SigningEnterpriseREQ from './definitions/SigningEnterpriseREQ'
import SigningAgentREQ from './definitions/SigningAgentREQ'
import UpdateStationNumREQ from './definitions/UpdateStationNumREQ'
import EnterGetParam from './params/EnterGetParam'
import EnterpriseDetailBO from './definitions/EnterpriseDetailBO'

export class EnterApi {

  /**
   * 服务商下的企业列表
   *
   * @param { EnterPageParam } params
   * @reutrn { Promise<Page<EnterprisePageBO>> }
   */
  public static page(
    params: EnterPageParam,
    config?: AxiosRequestConfig): Promise<Page<EnterprisePageBO>> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增企业
   *
   * @param { PorxyAddEnterpriseREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: PorxyAddEnterpriseREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   *  修改企业信息
   *
   * @param { UpdateEnterpriseREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateEnterpriseREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改到期时间
   *
   * @param { UpdateOverdueTimeREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateOverdueTime(
    data: UpdateOverdueTimeREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/overdue`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询编辑过期时间记录列表
   *
   * @param { EnterOverdueTimeLogParam } params
   * @reutrn { Promise<Page<EditOverdueTimeLogBO>> }
   */
  public static overdueTimeLog(
    params: EnterOverdueTimeLogParam,
    config?: AxiosRequestConfig): Promise<Page<EditOverdueTimeLogBO>> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/overdue/log`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查看备注
   *
   * @param { EnterGetRemarkParam } params
   * @reutrn { Promise<RemarkBO> }
   */
  public static getRemark(
    params: EnterGetRemarkParam,
    config?: AxiosRequestConfig): Promise<RemarkBO> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/remark/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 签约企业（成功/失败）
   *
   * @param { SigningEnterpriseREQ } data
   * @reutrn { Promise<void> }
   */
  public static signingEnterprise(
    data: SigningEnterpriseREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/signing`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重新签约
   *
   * @param { SigningAgentREQ } data
   * @reutrn { Promise<void> }
   */
  public static signingAgent(
    data: SigningAgentREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/signing/again`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改工位数
   *
   * @param { UpdateStationNumREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStationNum(
    data: UpdateStationNumREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/station`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   *  详情
   *
   * @param { EnterGetParam } params
   * @reutrn { Promise<EnterpriseDetailBO> }
   */
  public static get(
    params: EnterGetParam,
    config?: AxiosRequestConfig): Promise<EnterpriseDetailBO> {
    return axios(Object.assign({
      url: `/oem/v1.0/enter/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
