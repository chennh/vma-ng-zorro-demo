import axios, { AxiosRequestConfig } from 'axios'
import LotteryPageParam from './params/LotteryPageParam'
import Page from './definitions/Page'
import ActivityLotteryPageBO from './definitions/ActivityLotteryPageBO'
import ActivityLotteryAddREQ from './definitions/ActivityLotteryAddREQ'
import LotteryDelParam from './params/LotteryDelParam'
import ActivityLotteryUpdateREQ from './definitions/ActivityLotteryUpdateREQ'
import LotteryEndingParam from './params/LotteryEndingParam'
import LotterySidebarPageParam from './params/LotterySidebarPageParam'
import LotterySendParam from './params/LotterySendParam'
import LotteryDetailParam from './params/LotteryDetailParam'
import LotteryDetailBO from './definitions/LotteryDetailBO'

export class LotteryApi {

  /**
   * 获取分页
   *
   * @param { LotteryPageParam } params
   * @reutrn { Promise<Page<ActivityLotteryPageBO>> }
   */
  public static page(
    params: LotteryPageParam,
    config?: AxiosRequestConfig): Promise<Page<ActivityLotteryPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增
   *
   * @param { ActivityLotteryAddREQ } data
   * @reutrn { Promise<number> }
   */
  public static save(
    data: ActivityLotteryAddREQ,
    config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/create`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除信息
   *
   * @param { LotteryDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: LotteryDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/delete/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑
   *
   * @param { ActivityLotteryUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ActivityLotteryUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/edit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 结束活动
   *
   * @param { LotteryEndingParam } params
   * @reutrn { Promise<void> }
   */
  public static ending(
    params: LotteryEndingParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/ending/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 抽奖活动到期后修改状态
   *
   * @reutrn { Promise<void> }
   */
  public static lotteryExpire(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/expire`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信侧边栏获取分页
   *
   * @param { LotterySidebarPageParam } params
   * @reutrn { Promise<Page<ActivityLotteryPageBO>> }
   */
  public static sidebarPage(
    params: LotterySidebarPageParam,
    config?: AxiosRequestConfig): Promise<Page<ActivityLotteryPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 重置抽奖次数
   *
   * @reutrn { Promise<void> }
   */
  public static resetLotteryCount(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/reset/count`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 抽奖企业微信侧边栏发送
   *
   * @param { LotterySendParam } params
   * @reutrn { Promise<string> }
   */
  public static send(
    params: LotterySendParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/send/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 抽奖活动开始后修改状态
   *
   * @reutrn { Promise<void> }
   */
  public static lotteryStart(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/start`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { LotteryDetailParam } params
   * @reutrn { Promise<LotteryDetailBO> }
   */
  public static detail(
    params: LotteryDetailParam,
    config?: AxiosRequestConfig): Promise<LotteryDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/lottery/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
