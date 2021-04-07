import axios, { AxiosRequestConfig } from 'axios'
import GroupchatPageParam from './params/GroupchatPageParam'
import Page from './definitions/Page'
import GroupChatPageBO from './definitions/GroupChatPageBO'
import AddCustomerDTO from './definitions/AddCustomerDTO'
import GroupchatMemberListParam from './params/GroupchatMemberListParam'
import GroupMember from './definitions/GroupMember'
import GroupChatStatisticsBO from './definitions/GroupChatStatisticsBO'
import GroupchatDetailParam from './params/GroupchatDetailParam'
import GroupChatDetailsBO from './definitions/GroupChatDetailsBO'

export class GroupchatApi {

  /**
   * 获取企业微信群分页
   *
   * @param { GroupchatPageParam } params
   * @reutrn { Promise<Page<GroupChatPageBO>> }
   */
  public static page(
    params: GroupchatPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupChatPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 加入客户池
   *
   * @param { AddCustomerDTO } data
   * @reutrn { Promise<void> }
   */
  public static addCustomerPool(
    data: AddCustomerDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat/addCustomerPool`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取企业微信群成员列表
   *
   * @param { GroupchatMemberListParam } params
   * @reutrn { Promise<GroupMember[]> }
   */
  public static memberList(
    params: GroupchatMemberListParam,
    config?: AxiosRequestConfig): Promise<GroupMember[]> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat/member/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 群列表统计
   *
   * @reutrn { Promise<GroupChatStatisticsBO> }
   */
  public static statistics(config?: AxiosRequestConfig): Promise<GroupChatStatisticsBO> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat/statistics`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 同步微信群
   *
   * @reutrn { Promise<number> }
   */
  public static syncList(config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat/syncList`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取企业微信群详情
   *
   * @param { GroupchatDetailParam } params
   * @reutrn { Promise<GroupChatDetailsBO> }
   */
  public static detail(
    params: GroupchatDetailParam,
    config?: AxiosRequestConfig): Promise<GroupChatDetailsBO> {
    return axios(Object.assign({
      url: `/api/v1.0/groupchat/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
