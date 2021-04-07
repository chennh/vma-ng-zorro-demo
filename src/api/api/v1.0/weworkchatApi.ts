import axios, { AxiosRequestConfig } from 'axios'
import WeworkchatPageParam from './params/WeworkchatPageParam'
import Page from './definitions/Page'
import ChatMessage from './definitions/ChatMessage'
import WeworkchatAgreeParam from './params/WeworkchatAgreeParam'
import OpenChatBO from './definitions/OpenChatBO'
import WeworkchatPageGETParam from './params/WeworkchatPageGETParam'
import GroupChatPageBO from './definitions/GroupChatPageBO'
import WeworkchatChatPageBOListParam from './params/WeworkchatChatPageBOListParam'
import WeworkchatCheckParam from './params/WeworkchatCheckParam'
import WeworkchatQueryChatContextParam from './params/WeworkchatQueryChatContextParam'
import QueryTargetChatBO from './definitions/QueryTargetChatBO'
import WeworkchatGetListByWxFollowerIdParam from './params/WeworkchatGetListByWxFollowerIdParam'
import FriendInfoBO from './definitions/FriendInfoBO'
import MsgTypeBO from './definitions/MsgTypeBO'
import DepartmentTreeBO from './definitions/DepartmentTreeBO'
import ChatStaffBO from './definitions/ChatStaffBO'

export class WeworkchatApi {

  /**
   * 获取企业微信聊天记录分页
   *
   * @param { WeworkchatPageParam } params
   * @reutrn { Promise<Page<ChatMessage>> }
   */
  public static page(
    params: WeworkchatPageParam,
    config?: AxiosRequestConfig): Promise<Page<ChatMessage>> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 判断好友是否开启同意留存功能
   *
   * @param { WeworkchatAgreeParam } params
   * @reutrn { Promise<OpenChatBO> }
   */
  public static agree(
    params: WeworkchatAgreeParam,
    config?: AxiosRequestConfig): Promise<OpenChatBO> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/agree`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业微信群分页
   *
   * @param { WeworkchatPageGETParam } params
   * @reutrn { Promise<Page<GroupChatPageBO>> }
   */
  public static pageGET(
    params: WeworkchatPageGETParam,
    config?: AxiosRequestConfig): Promise<Page<GroupChatPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/chat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业微信群列表
   *
   * @param { WeworkchatChatPageBOListParam } params
   * @reutrn { Promise<GroupChatPageBO[]> }
   */
  public static chatPageBOList(
    params: WeworkchatChatPageBOListParam,
    config?: AxiosRequestConfig): Promise<GroupChatPageBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/chat/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 判断员工是否开启会话留存功能
   *
   * @param { WeworkchatCheckParam } params
   * @reutrn { Promise<OpenChatBO> }
   */
  public static check(
    params: WeworkchatCheckParam,
    config?: AxiosRequestConfig): Promise<OpenChatBO> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/check/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询目前消息上下文
   *
   * @param { WeworkchatQueryChatContextParam } params
   * @reutrn { Promise<QueryTargetChatBO> }
   */
  public static queryChatContext(
    params: WeworkchatQueryChatContextParam,
    config?: AxiosRequestConfig): Promise<QueryTargetChatBO> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/context`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取好友列表
   *
   * @param { WeworkchatGetListByWxFollowerIdParam } params
   * @reutrn { Promise<Page<FriendInfoBO>> }
   */
  public static getListByWxFollowerId(
    params: WeworkchatGetListByWxFollowerIdParam,
    config?: AxiosRequestConfig): Promise<Page<FriendInfoBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/friend`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业微信消息类型列表
   *
   * @reutrn { Promise<MsgTypeBO[]> }
   */
  public static list(config?: AxiosRequestConfig): Promise<MsgTypeBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/list`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询部门树
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static departmentTreeWithWxStaff(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/list_wx/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取员工列表
   *
   * @reutrn { Promise<ChatStaffBO[]> }
   */
  public static staffList(config?: AxiosRequestConfig): Promise<ChatStaffBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/weworkchat/staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
