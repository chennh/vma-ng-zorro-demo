import axios, { AxiosRequestConfig } from 'axios'
import TaskActivityPageParam from './params/TaskActivityPageParam'
import Page from './definitions/Page'
import TaskActivityPageBO from './definitions/TaskActivityPageBO'
import TaskActivityAddREQ from './definitions/TaskActivityAddREQ'
import TaskActivityUpdateREQ from './definitions/TaskActivityUpdateREQ'
import TaskActivityGetCustomerInfoParam from './params/TaskActivityGetCustomerInfoParam'
import CustomerInfoRSP from './definitions/CustomerInfoRSP'
import TaskActivityEndParam from './params/TaskActivityEndParam'
import TaskActivityExchangeParam from './params/TaskActivityExchangeParam'
import TaskActivityGetPosterInfoParam from './params/TaskActivityGetPosterInfoParam'
import PosterInfoBO from './definitions/PosterInfoBO'
import TaskActivityGetActivityProgressParam from './params/TaskActivityGetActivityProgressParam'
import ActivityDetailBO from './definitions/ActivityDetailBO'
import TaskActivityGetStaffQrCodeParam from './params/TaskActivityGetStaffQrCodeParam'
import QrCodeInfoBO from './definitions/QrCodeInfoBO'
import TaskActivityHelpActivityParam from './params/TaskActivityHelpActivityParam'
import TaskActivityInviteRecordPageBO from './definitions/TaskActivityInviteRecordPageBO'
import TaskActivityJoinActivityParam from './params/TaskActivityJoinActivityParam'
import TaskActivityCustomerRelatePageBO from './definitions/TaskActivityCustomerRelatePageBO'
import TaskActivityShareParam from './params/TaskActivityShareParam'
import TaskActivityShareBO from './definitions/TaskActivityShareBO'
import TaskActivityGetActivityInfoParam from './params/TaskActivityGetActivityInfoParam'
import GetActivityInfoBO from './definitions/GetActivityInfoBO'
import TaskActivityDetailParam from './params/TaskActivityDetailParam'
import TaskActivityDetailBO from './definitions/TaskActivityDetailBO'
import TaskActivityDelParam from './params/TaskActivityDelParam'

export class TaskActivityApi {

  /**
   * 获取任务宝活动分页
   *
   * @param { TaskActivityPageParam } params
   * @reutrn { Promise<Page<TaskActivityPageBO>> }
   */
  public static page(
    params: TaskActivityPageParam,
    config?: AxiosRequestConfig): Promise<Page<TaskActivityPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增任务宝活动
   *
   * @param { TaskActivityAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: TaskActivityAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑任务宝活动
   *
   * @param { TaskActivityUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: TaskActivityUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取客户信息
   *
   * @param { TaskActivityGetCustomerInfoParam } params
   * @reutrn { Promise<CustomerInfoRSP> }
   */
  public static getCustomerInfo(
    params: TaskActivityGetCustomerInfoParam,
    config?: AxiosRequestConfig): Promise<CustomerInfoRSP> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/customer/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 结束活动
   *
   * @param { TaskActivityEndParam } params
   * @reutrn { Promise<void> }
   */
  public static end(
    params: TaskActivityEndParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/end/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 任务宝活动列表-获取参与活动分页-兑奖
   *
   * @param { TaskActivityExchangeParam } params
   * @reutrn { Promise<void> }
   */
  public static exchange(
    params: TaskActivityExchangeParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/exchange/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * H5-获取海报信息
   *
   * @param { TaskActivityGetPosterInfoParam } params
   * @reutrn { Promise<PosterInfoBO> }
   */
  public static getPosterInfo(
    params: TaskActivityGetPosterInfoParam,
    config?: AxiosRequestConfig): Promise<PosterInfoBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/h5/poster`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * H5-获取活动进度情况
   *
   * @param { TaskActivityGetActivityProgressParam } params
   * @reutrn { Promise<ActivityDetailBO> }
   */
  public static getActivityProgress(
    params: TaskActivityGetActivityProgressParam,
    config?: AxiosRequestConfig): Promise<ActivityDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/h5/progress/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * H5-获取兑奖客服二维码
   *
   * @param { TaskActivityGetStaffQrCodeParam } params
   * @reutrn { Promise<QrCodeInfoBO> }
   */
  public static getStaffQrCode(
    params: TaskActivityGetStaffQrCodeParam,
    config?: AxiosRequestConfig): Promise<QrCodeInfoBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/h5/qr_code/${params.activityId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 任务宝活动列表-扫码助力
   *
   * @param { TaskActivityHelpActivityParam } params
   * @reutrn { Promise<Page<TaskActivityInviteRecordPageBO>> }
   */
  public static helpActivity(
    params: TaskActivityHelpActivityParam,
    config?: AxiosRequestConfig): Promise<Page<TaskActivityInviteRecordPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/help`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 任务宝活动列表-获取参与活动分页
   *
   * @param { TaskActivityJoinActivityParam } params
   * @reutrn { Promise<Page<TaskActivityCustomerRelatePageBO>> }
   */
  public static joinActivity(
    params: TaskActivityJoinActivityParam,
    config?: AxiosRequestConfig): Promise<Page<TaskActivityCustomerRelatePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/join`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享二维码
   *
   * @param { TaskActivityShareParam } params
   * @reutrn { Promise<TaskActivityShareBO> }
   */
  public static share(
    params: TaskActivityShareParam,
    config?: AxiosRequestConfig): Promise<TaskActivityShareBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/share/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 侧边栏-获取任务宝活动信息
   *
   * @param { TaskActivityGetActivityInfoParam } params
   * @reutrn { Promise<GetActivityInfoBO> }
   */
  public static getActivityInfo(
    params: TaskActivityGetActivityInfoParam,
    config?: AxiosRequestConfig): Promise<GetActivityInfoBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/side/info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取任务宝活动详情
   *
   * @param { TaskActivityDetailParam } params
   * @reutrn { Promise<TaskActivityDetailBO> }
   */
  public static detail(
    params: TaskActivityDetailParam,
    config?: AxiosRequestConfig): Promise<TaskActivityDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除任务宝活动
   *
   * @param { TaskActivityDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: TaskActivityDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/task_activity/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
