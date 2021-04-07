import axios, { AxiosRequestConfig } from 'axios'
import GroupCalendarPageParam from './params/GroupCalendarPageParam'
import Page from './definitions/Page'
import GroupCalendarPageBO from './definitions/GroupCalendarPageBO'
import AddGroupCalendarREQ from './definitions/AddGroupCalendarREQ'
import UpdateCalendarNameREQ from './definitions/UpdateCalendarNameREQ'
import GroupCalendarPushDetailParam from './params/GroupCalendarPushDetailParam'
import PushDetailBO from './definitions/PushDetailBO'
import GroupCalendarGetGroupChatManageParam from './params/GroupCalendarGetGroupChatManageParam'
import GroupSopManageBO from './definitions/GroupSopManageBO'
import H5ChangeStatusREQ from './definitions/H5ChangeStatusREQ'
import JoinCalendarREQ from './definitions/JoinCalendarREQ'
import CalendarPushContentREQ from './definitions/CalendarPushContentREQ'
import GroupCalendarDelPushParam from './params/GroupCalendarDelPushParam'
import RemoveCalendarREQ from './definitions/RemoveCalendarREQ'
import GroupCalendarStatusREQ from './definitions/GroupCalendarStatusREQ'
import GroupCalendarGetParam from './params/GroupCalendarGetParam'
import GroupCalendarDetailBO from './definitions/GroupCalendarDetailBO'
import GroupCalendarDelParam from './params/GroupCalendarDelParam'

export class GroupCalendarApi {

  /**
   * 群日历列表
   *
   * @param { GroupCalendarPageParam } params
   * @reutrn { Promise<Page<GroupCalendarPageBO>> }
   */
  public static page(
    params: GroupCalendarPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupCalendarPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 创建群日历
   *
   * @param { AddGroupCalendarREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddGroupCalendarREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改日历名称
   *
   * @param { UpdateCalendarNameREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateCalendarName(
    data: UpdateCalendarNameREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/calendar_name`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信群日历推送详情
   *
   * @param { GroupCalendarPushDetailParam } params
   * @reutrn { Promise<PushDetailBO> }
   */
  public static pushDetail(
    params: GroupCalendarPushDetailParam,
    config?: AxiosRequestConfig): Promise<PushDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/detail`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 群管理（群列表）
   *
   * @param { GroupCalendarGetGroupChatManageParam } params
   * @reutrn { Promise<GroupSopManageBO[]> }
   */
  public static getGroupChatManage(
    params: GroupCalendarGetGroupChatManageParam,
    config?: AxiosRequestConfig): Promise<GroupSopManageBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/group_chat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改为已完成
   *
   * @param { H5ChangeStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static changeStatus(
    data: H5ChangeStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/h5_status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 定时推送
   *
   * @reutrn { Promise<void> }
   */
  public static calendarTiming(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/h5_timing`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 加入群聊日历
   *
   * @param { JoinCalendarREQ } data
   * @reutrn { Promise<void> }
   */
  public static joinCalendar(
    data: JoinCalendarREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/join_calendar`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改推送计划
   *
   * @param { CalendarPushContentREQ } data
   * @reutrn { Promise<void> }
   */
  public static updatePush(
    data: CalendarPushContentREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/push`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除单条推送
   *
   * @param { GroupCalendarDelPushParam } data
   * @reutrn { Promise<void> }
   */
  public static delPush(
    data: GroupCalendarDelPushParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/push/${data.pushId}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 移除群聊日历
   *
   * @param { RemoveCalendarREQ } data
   * @reutrn { Promise<void> }
   */
  public static removeCalendar(
    data: RemoveCalendarREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/remove_calendar`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改状态（开关）
   *
   * @param { GroupCalendarStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: GroupCalendarStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 详情
   *
   * @param { GroupCalendarGetParam } params
   * @reutrn { Promise<GroupCalendarDetailBO> }
   */
  public static get(
    params: GroupCalendarGetParam,
    config?: AxiosRequestConfig): Promise<GroupCalendarDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除群日历
   *
   * @param { GroupCalendarDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupCalendarDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_calendar/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
