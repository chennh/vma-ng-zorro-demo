import axios, { AxiosRequestConfig } from 'axios'
import GroupSendMsgInfoPageParam from './params/GroupSendMsgInfoPageParam'
import Page from './definitions/Page'
import GroupSendMsgInfoPageBO from './definitions/GroupSendMsgInfoPageBO'
import GroupSendMsgInfoAddREQ from './definitions/GroupSendMsgInfoAddREQ'
import GroupSendMsgInfoChatParam from './params/GroupSendMsgInfoChatParam'
import ChatInfoBO from './definitions/ChatInfoBO'
import GroupSendMsgInfoDetailChatParam from './params/GroupSendMsgInfoDetailChatParam'
import GroupSendMsgDetailChatQueryBO from './definitions/GroupSendMsgDetailChatQueryBO'
import GroupSendMsgInfoDetailStaffParam from './params/GroupSendMsgInfoDetailStaffParam'
import GroupSendMsgDetailStaffQueryBO from './definitions/GroupSendMsgDetailStaffQueryBO'
import GroupSendMsgInfoNoticeParam from './params/GroupSendMsgInfoNoticeParam'
import GroupSendMsgInfoResendParam from './params/GroupSendMsgInfoResendParam'
import DepartmentTreeBO from './definitions/DepartmentTreeBO'
import GroupSendMsgInfoStaffListParam from './params/GroupSendMsgInfoStaffListParam'
import StaffListDTO from './definitions/StaffListDTO'
import GroupSendMsgInfoDetailParam from './params/GroupSendMsgInfoDetailParam'
import GroupSendMsgInfoDetailBO from './definitions/GroupSendMsgInfoDetailBO'

export class GroupSendMsgInfoApi {

  /**
   * 获取客户群群发分页
   *
   * @param { GroupSendMsgInfoPageParam } params
   * @reutrn { Promise<Page<GroupSendMsgInfoPageBO>> }
   */
  public static page(
    params: GroupSendMsgInfoPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupSendMsgInfoPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增客户群群发
   *
   * @param { GroupSendMsgInfoAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: GroupSendMsgInfoAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取会话留存群聊信息
   *
   * @param { GroupSendMsgInfoChatParam } params
   * @reutrn { Promise<ChatInfoBO> }
   */
  public static chat(
    params: GroupSendMsgInfoChatParam,
    config?: AxiosRequestConfig): Promise<ChatInfoBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/chat/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取客户群详情
   *
   * @param { GroupSendMsgInfoDetailChatParam } params
   * @reutrn { Promise<GroupSendMsgDetailChatQueryBO[]> }
   */
  public static detailChat(
    params: GroupSendMsgInfoDetailChatParam,
    config?: AxiosRequestConfig): Promise<GroupSendMsgDetailChatQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/detail_chat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取群主详情
   *
   * @param { GroupSendMsgInfoDetailStaffParam } params
   * @reutrn { Promise<GroupSendMsgDetailStaffQueryBO[]> }
   */
  public static detailStaff(
    params: GroupSendMsgInfoDetailStaffParam,
    config?: AxiosRequestConfig): Promise<GroupSendMsgDetailStaffQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/detail_staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发送提醒消息
   *
   * @param { GroupSendMsgInfoNoticeParam } params
   * @reutrn { Promise<void> }
   */
  public static notice(
    params: GroupSendMsgInfoNoticeParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/notice/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重新发送
   *
   * @param { GroupSendMsgInfoResendParam } params
   * @reutrn { Promise<void> }
   */
  public static resend(
    params: GroupSendMsgInfoResendParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/resend/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取可选员工列表(拥有群聊员工)
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static staffAll(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/staff/all`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取员工列表
   *
   * @param { GroupSendMsgInfoStaffListParam } params
   * @reutrn { Promise<StaffListDTO[]> }
   */
  public static staffList(
    params: GroupSendMsgInfoStaffListParam,
    config?: AxiosRequestConfig): Promise<StaffListDTO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/staff/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取客户群群发详情
   *
   * @param { GroupSendMsgInfoDetailParam } params
   * @reutrn { Promise<GroupSendMsgInfoDetailBO> }
   */
  public static detail(
    params: GroupSendMsgInfoDetailParam,
    config?: AxiosRequestConfig): Promise<GroupSendMsgInfoDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_send_msg_info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
