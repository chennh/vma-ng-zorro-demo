import axios, { AxiosRequestConfig } from 'axios'
import GroupLabelCreateInfoPageParam from './params/GroupLabelCreateInfoPageParam'
import Page from './definitions/Page'
import GroupLabelCreateInfoPageBO from './definitions/GroupLabelCreateInfoPageBO'
import GroupLabelCreateInfoAddREQ from './definitions/GroupLabelCreateInfoAddREQ'
import GroupLabelCreateInfoChatListParam from './params/GroupLabelCreateInfoChatListParam'
import GroupLabelCreateChatListBO from './definitions/GroupLabelCreateChatListBO'
import GroupLabelCreateInfoCountREQ from './definitions/GroupLabelCreateInfoCountREQ'
import CountCustomerRsp from './definitions/CountCustomerRsp'
import GroupLabelCreateInfoDetailCustomerParam from './params/GroupLabelCreateInfoDetailCustomerParam'
import GroupLabelCreateCustomerQueryBO from './definitions/GroupLabelCreateCustomerQueryBO'
import GroupLabelCreateInfoDetailStaffParam from './params/GroupLabelCreateInfoDetailStaffParam'
import GroupLabelCreateStaffQueryBO from './definitions/GroupLabelCreateStaffQueryBO'
import GroupLabelCreateInfoNoticeParam from './params/GroupLabelCreateInfoNoticeParam'
import GroupLabelCreateInfoResendParam from './params/GroupLabelCreateInfoResendParam'
import GroupLabelCreateInfoDetailParam from './params/GroupLabelCreateInfoDetailParam'
import GroupLabelCreateInfoDetailBO from './definitions/GroupLabelCreateInfoDetailBO'
import GroupLabelCreateInfoDelParam from './params/GroupLabelCreateInfoDelParam'

export class GroupLabelCreateInfoApi {

  /**
   * 获取标签建群分页
   *
   * @param { GroupLabelCreateInfoPageParam } params
   * @reutrn { Promise<Page<GroupLabelCreateInfoPageBO>> }
   */
  public static page(
    params: GroupLabelCreateInfoPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupLabelCreateInfoPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增标签建群
   *
   * @param { GroupLabelCreateInfoAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: GroupLabelCreateInfoAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群聊列表
   *
   * @param { GroupLabelCreateInfoChatListParam } params
   * @reutrn { Promise<GroupLabelCreateChatListBO[]> }
   */
  public static chatList(
    params: GroupLabelCreateInfoChatListParam,
    config?: AxiosRequestConfig): Promise<GroupLabelCreateChatListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/chat/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 统计客户数
   *
   * @param { GroupLabelCreateInfoCountREQ } data
   * @reutrn { Promise<CountCustomerRsp> }
   */
  public static count(
    data: GroupLabelCreateInfoCountREQ,
    config?: AxiosRequestConfig): Promise<CountCustomerRsp> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/count`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取标签建群详情-客户详情
   *
   * @param { GroupLabelCreateInfoDetailCustomerParam } params
   * @reutrn { Promise<GroupLabelCreateCustomerQueryBO[]> }
   */
  public static detailCustomer(
    params: GroupLabelCreateInfoDetailCustomerParam,
    config?: AxiosRequestConfig): Promise<GroupLabelCreateCustomerQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/detail_customer`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取标签建群详情-员工详情
   *
   * @param { GroupLabelCreateInfoDetailStaffParam } params
   * @reutrn { Promise<GroupLabelCreateStaffQueryBO[]> }
   */
  public static detailStaff(
    params: GroupLabelCreateInfoDetailStaffParam,
    config?: AxiosRequestConfig): Promise<GroupLabelCreateStaffQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/detail_staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发送提醒消息
   *
   * @param { GroupLabelCreateInfoNoticeParam } params
   * @reutrn { Promise<void> }
   */
  public static notice(
    params: GroupLabelCreateInfoNoticeParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/notice/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重新发送
   *
   * @param { GroupLabelCreateInfoResendParam } params
   * @reutrn { Promise<void> }
   */
  public static resend(
    params: GroupLabelCreateInfoResendParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/resend/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取标签建群详情
   *
   * @param { GroupLabelCreateInfoDetailParam } params
   * @reutrn { Promise<GroupLabelCreateInfoDetailBO> }
   */
  public static detail(
    params: GroupLabelCreateInfoDetailParam,
    config?: AxiosRequestConfig): Promise<GroupLabelCreateInfoDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除标签建群
   *
   * @param { GroupLabelCreateInfoDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupLabelCreateInfoDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_label_create_info/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
