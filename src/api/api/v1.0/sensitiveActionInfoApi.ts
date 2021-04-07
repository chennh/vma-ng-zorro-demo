import axios, { AxiosRequestConfig } from 'axios'
import SensitiveActionInfoDetailBO from './definitions/SensitiveActionInfoDetailBO'
import SetActionREQ from './definitions/SetActionREQ'
import SensitiveActionInfoEndWordPageParam from './params/SensitiveActionInfoEndWordPageParam'
import Page from './definitions/Page'
import SensitiveActionEndWordPageBO from './definitions/SensitiveActionEndWordPageBO'
import SensitiveActionEndWordAddDTO from './definitions/SensitiveActionEndWordAddDTO'
import SensitiveActionInfoDelEndWordParam from './params/SensitiveActionInfoDelEndWordParam'
import ExecuteSensitiveActionRecordREQ from './definitions/ExecuteSensitiveActionRecordREQ'
import SensitiveActionInfoRecordPageParam from './params/SensitiveActionInfoRecordPageParam'
import SensitiveActionRecordPageBO from './definitions/SensitiveActionRecordPageBO'
import StaffListDTO from './definitions/StaffListDTO'

export class SensitiveActionInfoApi {

  /**
   * 敏感行为监控详情
   *
   * @reutrn { Promise<SensitiveActionInfoDetailBO> }
   */
  public static detail(config?: AxiosRequestConfig): Promise<SensitiveActionInfoDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/action`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 设置敏感行为监控
   *
   * @param { SetActionREQ } data
   * @reutrn { Promise<void> }
   */
  public static setAction(
    data: SetActionREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/action/set`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感结束语分页
   *
   * @param { SensitiveActionInfoEndWordPageParam } params
   * @reutrn { Promise<Page<SensitiveActionEndWordPageBO>> }
   */
  public static endWordPage(
    params: SensitiveActionInfoEndWordPageParam,
    config?: AxiosRequestConfig): Promise<Page<SensitiveActionEndWordPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/end_word`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增敏感结束语
   *
   * @param { SensitiveActionEndWordAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static saveEndWord(
    data: SensitiveActionEndWordAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/end_word`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除敏感结束语
   *
   * @param { SensitiveActionInfoDelEndWordParam } data
   * @reutrn { Promise<void> }
   */
  public static delEndWord(
    data: SensitiveActionInfoDelEndWordParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/end_word/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 处理
   *
   * @param { ExecuteSensitiveActionRecordREQ } data
   * @reutrn { Promise<void> }
   */
  public static execute(
    data: ExecuteSensitiveActionRecordREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/execute`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感行为监控记录分页
   *
   * @param { SensitiveActionInfoRecordPageParam } params
   * @reutrn { Promise<Page<SensitiveActionRecordPageBO>> }
   */
  public static recordPage(
    params: SensitiveActionInfoRecordPageParam,
    config?: AxiosRequestConfig): Promise<Page<SensitiveActionRecordPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/record`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取员工列表
   *
   * @reutrn { Promise<StaffListDTO[]> }
   */
  public static staffList(config?: AxiosRequestConfig): Promise<StaffListDTO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_action_info/staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
