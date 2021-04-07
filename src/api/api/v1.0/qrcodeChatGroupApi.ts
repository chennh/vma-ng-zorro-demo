import axios, { AxiosRequestConfig } from 'axios'
import QrcodeChatGroupPageParam from './params/QrcodeChatGroupPageParam'
import Page from './definitions/Page'
import QrcodeChatGroupPageBO from './definitions/QrcodeChatGroupPageBO'
import QrcodeChatGroupAddREQ from './definitions/QrcodeChatGroupAddREQ'
import QrcodeChatGroupUpdateREQ from './definitions/QrcodeChatGroupUpdateREQ'
import QrcodeChatGroupGroupPageParam from './params/QrcodeChatGroupGroupPageParam'
import GroupChatItemBO from './definitions/GroupChatItemBO'
import QrcodeChatGroupDetailParam from './params/QrcodeChatGroupDetailParam'
import QrcodeChatGroupDetailBO from './definitions/QrcodeChatGroupDetailBO'
import QrcodeChatGroupDelParam from './params/QrcodeChatGroupDelParam'

export class QrcodeChatGroupApi {

  /**
   * 获取群活码信息分页
   *
   * @param { QrcodeChatGroupPageParam } params
   * @reutrn { Promise<Page<QrcodeChatGroupPageBO>> }
   */
  public static page(
    params: QrcodeChatGroupPageParam,
    config?: AxiosRequestConfig): Promise<Page<QrcodeChatGroupPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增群活码信息
   *
   * @param { QrcodeChatGroupAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: QrcodeChatGroupAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑群活码信息
   *
   * @param { QrcodeChatGroupUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: QrcodeChatGroupUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群列表分页
   *
   * @param { QrcodeChatGroupGroupPageParam } params
   * @reutrn { Promise<Page<GroupChatItemBO>> }
   */
  public static groupPage(
    params: QrcodeChatGroupGroupPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupChatItemBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group/group_page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取海报
   *
   * @reutrn { Promise<string> }
   */
  public static poster(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group/poster`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群活码信息详情
   *
   * @param { QrcodeChatGroupDetailParam } params
   * @reutrn { Promise<QrcodeChatGroupDetailBO> }
   */
  public static detail(
    params: QrcodeChatGroupDetailParam,
    config?: AxiosRequestConfig): Promise<QrcodeChatGroupDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除群活码信息
   *
   * @param { QrcodeChatGroupDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: QrcodeChatGroupDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcode_chat_group/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
