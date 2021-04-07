import axios, { AxiosRequestConfig } from 'axios'
import GroupWarningPageParam from './params/GroupWarningPageParam'
import Page from './definitions/Page'
import GroupWarningPageBO from './definitions/GroupWarningPageBO'
import GroupWarningAddREQ from './definitions/GroupWarningAddREQ'
import GroupWarningChatPageParam from './params/GroupWarningChatPageParam'
import GroupWarningChatQueryBO from './definitions/GroupWarningChatQueryBO'
import GroupWarningChatREQ from './definitions/GroupWarningChatREQ'
import GroupWarningDetailRecordParam from './params/GroupWarningDetailRecordParam'
import GroupWarningRecordQueryBO from './definitions/GroupWarningRecordQueryBO'
import GroupWarningStaffListParam from './params/GroupWarningStaffListParam'
import GroupWarningStaffBO from './definitions/GroupWarningStaffBO'
import GroupWarningStatusREQ from './definitions/GroupWarningStatusREQ'
import GroupWarningDetailParam from './params/GroupWarningDetailParam'
import GroupWarningDetailBO from './definitions/GroupWarningDetailBO'
import GroupWarningDelParam from './params/GroupWarningDelParam'

export class GroupWarningApi {

  /**
   * 获取客户群预警提醒分页
   *
   * @param { GroupWarningPageParam } params
   * @reutrn { Promise<Page<GroupWarningPageBO>> }
   */
  public static page(
    params: GroupWarningPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupWarningPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增客户群预警提醒
   *
   * @param { GroupWarningAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: GroupWarningAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群聊列表
   *
   * @param { GroupWarningChatPageParam } params
   * @reutrn { Promise<Page<GroupWarningChatQueryBO>> }
   */
  public static chatPage(
    params: GroupWarningChatPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupWarningChatQueryBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/chat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 群聊管理-加入方案
   *
   * @param { GroupWarningChatREQ } data
   * @reutrn { Promise<void> }
   */
  public static chatAdd(
    data: GroupWarningChatREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/chat/add`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 群聊管理-移除方案
   *
   * @param { GroupWarningChatREQ } data
   * @reutrn { Promise<void> }
   */
  public static chatDel(
    data: GroupWarningChatREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/chat/del`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取客户群预警提醒详情-提醒记录
   *
   * @param { GroupWarningDetailRecordParam } params
   * @reutrn { Promise<Page<GroupWarningRecordQueryBO>> }
   */
  public static detailRecord(
    params: GroupWarningDetailRecordParam,
    config?: AxiosRequestConfig): Promise<Page<GroupWarningRecordQueryBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/detail_record`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取员工列表
   *
   * @param { GroupWarningStaffListParam } params
   * @reutrn { Promise<GroupWarningStaffBO[]> }
   */
  public static staffList(
    params: GroupWarningStaffListParam,
    config?: AxiosRequestConfig): Promise<GroupWarningStaffBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/staff/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 客户群预警提醒状态修改
   *
   * @param { GroupWarningStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static status(
    data: GroupWarningStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取客户群预警提醒详情
   *
   * @param { GroupWarningDetailParam } params
   * @reutrn { Promise<GroupWarningDetailBO> }
   */
  public static detail(
    params: GroupWarningDetailParam,
    config?: AxiosRequestConfig): Promise<GroupWarningDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除客户群预警提醒
   *
   * @param { GroupWarningDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupWarningDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_warning/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
