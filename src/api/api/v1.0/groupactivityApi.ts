import axios, { AxiosRequestConfig } from 'axios'
import GroupactivityPageParam from './params/GroupactivityPageParam'
import Page from './definitions/Page'
import GroupActivityBO from './definitions/GroupActivityBO'
import GroupActivityAddREQ from './definitions/GroupActivityAddREQ'
import GroupActivityUpdateREQ from './definitions/GroupActivityUpdateREQ'
import GroupactivityBeginActivityParam from './params/GroupactivityBeginActivityParam'
import GroupactivityEndActivityParam from './params/GroupactivityEndActivityParam'
import GroupactivityCustomerListParam from './params/GroupactivityCustomerListParam'
import GroupActivityCustomerBO from './definitions/GroupActivityCustomerBO'
import GroupactivityReceiveListParam from './params/GroupactivityReceiveListParam'
import GroupActivityReceiveBO from './definitions/GroupActivityReceiveBO'
import GroupactivityExchangeParam from './params/GroupactivityExchangeParam'
import GroupactivityStaffListParam from './params/GroupactivityStaffListParam'
import GroupActivityStaffBO from './definitions/GroupActivityStaffBO'
import GroupactivityShareInfoParam from './params/GroupactivityShareInfoParam'
import GroupActivityShareBO from './definitions/GroupActivityShareBO'
import GroupactivityShareParam from './params/GroupactivityShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import GroupactivityDetailParam from './params/GroupactivityDetailParam'
import GroupactivityDelParam from './params/GroupactivityDelParam'

export class GroupactivityApi {

  /**
   * 获取群打卡活动表分页
   *
   * @param { GroupactivityPageParam } params
   * @reutrn { Promise<Page<GroupActivityBO>> }
   */
  public static page(
    params: GroupactivityPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupActivityBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增群打卡活动表
   *
   * @param { GroupActivityAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: GroupActivityAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑群打卡活动表
   *
   * @param { GroupActivityUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: GroupActivityUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 开始活动
   *
   * @param { GroupactivityBeginActivityParam } data
   * @reutrn { Promise<void> }
   */
  public static beginActivity(
    data: GroupactivityBeginActivityParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/begin/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 结束活动
   *
   * @param { GroupactivityEndActivityParam } data
   * @reutrn { Promise<void> }
   */
  public static endActivity(
    data: GroupactivityEndActivityParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/finish/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 参与打卡
   *
   * @param { GroupactivityCustomerListParam } params
   * @reutrn { Promise<Page<GroupActivityCustomerBO>> }
   */
  public static customerList(
    params: GroupactivityCustomerListParam,
    config?: AxiosRequestConfig): Promise<Page<GroupActivityCustomerBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/customer`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 领取礼品
   *
   * @param { GroupactivityReceiveListParam } params
   * @reutrn { Promise<Page<GroupActivityReceiveBO>> }
   */
  public static receiveList(
    params: GroupactivityReceiveListParam,
    config?: AxiosRequestConfig): Promise<Page<GroupActivityReceiveBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/receive`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 兑换
   *
   * @param { GroupactivityExchangeParam } data
   * @reutrn { Promise<void> }
   */
  public static exchange(
    data: GroupactivityExchangeParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/receive/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 分享员工列表
   *
   * @param { GroupactivityStaffListParam } params
   * @reutrn { Promise<Page<GroupActivityStaffBO>> }
   */
  public static staffList(
    params: GroupactivityStaffListParam,
    config?: AxiosRequestConfig): Promise<Page<GroupActivityStaffBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享页数据总览
   *
   * @param { GroupactivityShareInfoParam } params
   * @reutrn { Promise<GroupActivityShareBO> }
   */
  public static shareInfo(
    params: GroupactivityShareInfoParam,
    config?: AxiosRequestConfig): Promise<GroupActivityShareBO> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/view_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { GroupactivityShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: GroupactivityShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/share/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 批量添加客户到公海
   *
   * @param { CustomerModifyStatusByOtherDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: CustomerModifyStatusByOtherDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群打卡活动表详情
   *
   * @param { GroupactivityDetailParam } params
   * @reutrn { Promise<GroupActivityUpdateREQ> }
   */
  public static detail(
    params: GroupactivityDetailParam,
    config?: AxiosRequestConfig): Promise<GroupActivityUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除群打卡活动表信息
   *
   * @param { GroupactivityDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupactivityDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupactivity/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
