import axios, { AxiosRequestConfig } from 'axios'
import EnterpriseBO from './definitions/EnterpriseBO'
import EnterpriseAddREQ from './definitions/EnterpriseAddREQ'
import LoginBO from './definitions/LoginBO'
import EnterpriseUpdateREQ from './definitions/EnterpriseUpdateREQ'
import StaffJoinApplyAddREQ from './definitions/StaffJoinApplyAddREQ'
import EnterpriseGetEnterpriseJoinParam from './params/EnterpriseGetEnterpriseJoinParam'
import JoinEnterpriseBO from './definitions/JoinEnterpriseBO'
import EnterprisePrefectREQ from './definitions/EnterprisePrefectREQ'

export class EnterpriseApi {

  /**
   * 获取企业详情
   *
   * @reutrn { Promise<EnterpriseBO> }
   */
  public static get(config?: AxiosRequestConfig): Promise<EnterpriseBO> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增企业
   *
   * @param { EnterpriseAddREQ } data
   * @reutrn { Promise<LoginBO> }
   */
  public static save(
    data: EnterpriseAddREQ,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改企业信息
   *
   * @param { EnterpriseUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: EnterpriseUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * checkEnterpriseOverdue
   *
   * @reutrn { Promise<void> }
   */
  public static checkEnterpriseOverdue(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise/check_overdue`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 申请加入企业
   *
   * @param { StaffJoinApplyAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static joinApply(
    data: StaffJoinApplyAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise/join/apply`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业名称查询企业下拉列表
   *
   * @param { EnterpriseGetEnterpriseJoinParam } params
   * @reutrn { Promise<JoinEnterpriseBO[]> }
   */
  public static getEnterpriseJoin(
    params: EnterpriseGetEnterpriseJoinParam,
    config?: AxiosRequestConfig): Promise<JoinEnterpriseBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise/list/${params.enterpriseName}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 完善企业信息
   *
   * @param { EnterprisePrefectREQ } data
   * @reutrn { Promise<void> }
   */
  public static perfectEnterprise(
    data: EnterprisePrefectREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/enterprise/prefect`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
