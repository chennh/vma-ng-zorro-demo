import axios, { AxiosRequestConfig } from 'axios'
import MissionAddREQ from './definitions/MissionAddREQ'
import MissionUpdateREQ from './definitions/MissionUpdateREQ'
import StatusStatisticalBO from './definitions/StatusStatisticalBO'
import MissionDetailByCreatorParam from './params/MissionDetailByCreatorParam'
import MissionDetailBO from './definitions/MissionDetailBO'
import MissionDetailByHandlerParam from './params/MissionDetailByHandlerParam'
import MissionPageParam from './params/MissionPageParam'
import Page from './definitions/Page'
import MissionPageBO from './definitions/MissionPageBO'
import MissionPageByCustomerParam from './params/MissionPageByCustomerParam'
import MissionByCustomerPageBO from './definitions/MissionByCustomerPageBO'
import MissionPageByHandlerParam from './params/MissionPageByHandlerParam'
import UpdateProgressStatusREQ from './definitions/UpdateProgressStatusREQ'
import UpdateSuccessBO from './definitions/UpdateSuccessBO'
import RenewalShareREQ from './definitions/RenewalShareREQ'
import UpdateMissionStautsREQ from './definitions/UpdateMissionStautsREQ'
import MissionDelParam from './params/MissionDelParam'

export class MissionApi {

  /**
   * 我下发的任务-下发任务表
   *
   * @param { MissionAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: MissionAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/mission`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 我下发任务-编辑下发任务表
   *
   * @param { MissionUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: MissionUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/mission`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 我下发的任务-左侧状态数量统计
   *
   * @reutrn { Promise<StatusStatisticalBO> }
   */
  public static countByCreator(config?: AxiosRequestConfig): Promise<StatusStatisticalBO> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/count/by_creator`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我待办的任务-左侧状态数量统计
   *
   * @reutrn { Promise<StatusStatisticalBO> }
   */
  public static countByHandler(config?: AxiosRequestConfig): Promise<StatusStatisticalBO> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/count/by_handler`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   *  我下发的任务-任务详情
   *
   * @param { MissionDetailByCreatorParam } params
   * @reutrn { Promise<MissionDetailBO> }
   */
  public static detailByCreator(
    params: MissionDetailByCreatorParam,
    config?: AxiosRequestConfig): Promise<MissionDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/detail/by_creator/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我待办的任务-任务详情
   *
   * @param { MissionDetailByHandlerParam } params
   * @reutrn { Promise<MissionDetailBO> }
   */
  public static detailByHandler(
    params: MissionDetailByHandlerParam,
    config?: AxiosRequestConfig): Promise<MissionDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/detail/by_handler/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我下发的任务-任务列表
   *
   * @param { MissionPageParam } params
   * @reutrn { Promise<Page<MissionPageBO>> }
   */
  public static page(
    params: MissionPageParam,
    config?: AxiosRequestConfig): Promise<Page<MissionPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/page/by_creator`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 客户任务列表
   *
   * @param { MissionPageByCustomerParam } params
   * @reutrn { Promise<Page<MissionByCustomerPageBO>> }
   */
  public static pageByCustomer(
    params: MissionPageByCustomerParam,
    config?: AxiosRequestConfig): Promise<Page<MissionByCustomerPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/page/by_customer`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我待办的任务-任务列表
   *
   * @param { MissionPageByHandlerParam } params
   * @reutrn { Promise<Page<MissionPageBO>> }
   */
  public static pageByHandler(
    params: MissionPageByHandlerParam,
    config?: AxiosRequestConfig): Promise<Page<MissionPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/page/by_handler`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我待办的任务-修改任务进度状态
   *
   * @param { UpdateProgressStatusREQ } data
   * @reutrn { Promise<UpdateSuccessBO> }
   */
  public static updateProgressStatus(
    data: UpdateProgressStatusREQ,
    config?: AxiosRequestConfig): Promise<UpdateSuccessBO> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/progress/status`,
      method: 'put',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 任务分享回调
   *
   * @param { RenewalShareREQ } data
   * @reutrn { Promise<void> }
   */
  public static renewal(
    data: RenewalShareREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/share/back`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 我下发的任务-修改任务状态（结束任务）
   *
   * @param { UpdateMissionStautsREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: UpdateMissionStautsREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 我下发的任务-删除下发任务
   *
   * @param { MissionDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: MissionDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/mission/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
