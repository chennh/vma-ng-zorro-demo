import axios, { AxiosRequestConfig } from 'axios'
import EnterprisePageParam from './params/EnterprisePageParam'
import Page from './definitions/Page'
import EnterprisePageBO from './definitions/EnterprisePageBO'
import PorxyAddEnterpriseREQ from './definitions/PorxyAddEnterpriseREQ'
import UpdateEnterpriseREQ from './definitions/UpdateEnterpriseREQ'
import EnterpriseCurveStatisticalParam from './params/EnterpriseCurveStatisticalParam'
import StatisticalByDayBO from './definitions/StatisticalByDayBO'
import UpdateOverdueTimeREQ from './definitions/UpdateOverdueTimeREQ'
import EnterpriseOverdueTimeLogParam from './params/EnterpriseOverdueTimeLogParam'
import EditOverdueTimeLogBO from './definitions/EditOverdueTimeLogBO'
import EnterpriseGetRemarkParam from './params/EnterpriseGetRemarkParam'
import RemarkBO from './definitions/RemarkBO'
import SigningEnterpriseREQ from './definitions/SigningEnterpriseREQ'
import SigningAgentREQ from './definitions/SigningAgentREQ'
import UpdateStationNumREQ from './definitions/UpdateStationNumREQ'
import EnterpriseStatisticalBO from './definitions/EnterpriseStatisticalBO'
import EnterpriseGetParam from './params/EnterpriseGetParam'
import EnterpriseDetailBO from './definitions/EnterpriseDetailBO'

export class EnterpriseApi {

  /**
   * 企业列表
   *
   * @param { EnterprisePageParam } params
   * @reutrn { Promise<Page<EnterprisePageBO>> }
   */
  public static page(
    params: EnterprisePageParam,
    config?: AxiosRequestConfig): Promise<Page<EnterprisePageBO>> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise`,
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
      url: `/proxy/v1.0/enterprise`,
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
      url: `/proxy/v1.0/enterprise`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 首页底部部统计
   *
   * @param { EnterpriseCurveStatisticalParam } params
   * @reutrn { Promise<StatisticalByDayBO> }
   */
  public static curveStatistical(
    params: EnterpriseCurveStatisticalParam,
    config?: AxiosRequestConfig): Promise<StatisticalByDayBO> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise/curve`,
      method: 'get',
      params,
      responseType: 'json'
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
      url: `/proxy/v1.0/enterprise/overdue`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询编辑过期时间记录列表
   *
   * @param { EnterpriseOverdueTimeLogParam } params
   * @reutrn { Promise<Page<EditOverdueTimeLogBO>> }
   */
  public static overdueTimeLog(
    params: EnterpriseOverdueTimeLogParam,
    config?: AxiosRequestConfig): Promise<Page<EditOverdueTimeLogBO>> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise/overdue/log`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查看备注
   *
   * @param { EnterpriseGetRemarkParam } params
   * @reutrn { Promise<RemarkBO> }
   */
  public static getRemark(
    params: EnterpriseGetRemarkParam,
    config?: AxiosRequestConfig): Promise<RemarkBO> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise/remark/${params.id}`,
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
      url: `/proxy/v1.0/enterprise/signing`,
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
      url: `/proxy/v1.0/enterprise/signing/again`,
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
      url: `/proxy/v1.0/enterprise/station`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 首页顶部统计
   *
   * @reutrn { Promise<EnterpriseStatisticalBO> }
   */
  public static topStatistical(config?: AxiosRequestConfig): Promise<EnterpriseStatisticalBO> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise/top`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   *  详情
   *
   * @param { EnterpriseGetParam } params
   * @reutrn { Promise<EnterpriseDetailBO> }
   */
  public static get(
    params: EnterpriseGetParam,
    config?: AxiosRequestConfig): Promise<EnterpriseDetailBO> {
    return axios(Object.assign({
      url: `/proxy/v1.0/enterprise/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
