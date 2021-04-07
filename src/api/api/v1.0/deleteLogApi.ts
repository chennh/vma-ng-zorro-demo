import axios, { AxiosRequestConfig } from 'axios'
import DeleteLogPageParam from './params/DeleteLogPageParam'
import Page from './definitions/Page'
import FriendDeleteLogPageBO from './definitions/FriendDeleteLogPageBO'
import FriendDeleteLogUpdateREQ from './definitions/FriendDeleteLogUpdateREQ'
import DeleteLogConfigDetailsParam from './params/DeleteLogConfigDetailsParam'
import FriendNoticeConfig from './definitions/FriendNoticeConfig'
import SetFriendNoticeConfigDTO from './definitions/SetFriendNoticeConfigDTO'
import FriendDeleteLogListByDateDTO from './definitions/FriendDeleteLogListByDateDTO'
import FriendDeleteLogListByDateBO from './definitions/FriendDeleteLogListByDateBO'
import DeleteLogDetailsParam from './params/DeleteLogDetailsParam'
import FriendDeleteLogDetailsBO from './definitions/FriendDeleteLogDetailsBO'

export class DeleteLogApi {

  /**
   * 获取分页
   *
   * @param { DeleteLogPageParam } params
   * @reutrn { Promise<Page<FriendDeleteLogPageBO>> }
   */
  public static page(
    params: DeleteLogPageParam,
    config?: AxiosRequestConfig): Promise<Page<FriendDeleteLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 处理
   *
   * @param { FriendDeleteLogUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: FriendDeleteLogUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 通知设置详情
   *
   * @param { DeleteLogConfigDetailsParam } params
   * @reutrn { Promise<FriendNoticeConfig> }
   */
  public static configDetails(
    params: DeleteLogConfigDetailsParam,
    config?: AxiosRequestConfig): Promise<FriendNoticeConfig> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog/config/details`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 通知设置
   *
   * @param { SetFriendNoticeConfigDTO } data
   * @reutrn { Promise<void> }
   */
  public static saveConfig(
    data: SetFriendNoticeConfigDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog/config/set`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 按日期获取删人日志
   *
   * @param { FriendDeleteLogListByDateDTO } data
   * @reutrn { Promise<FriendDeleteLogListByDateBO[]> }
   */
  public static getListByDate(
    data: FriendDeleteLogListByDateDTO,
    config?: AxiosRequestConfig): Promise<FriendDeleteLogListByDateBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog/log/list`,
      method: 'put',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { DeleteLogDetailsParam } params
   * @reutrn { Promise<FriendDeleteLogDetailsBO> }
   */
  public static details(
    params: DeleteLogDetailsParam,
    config?: AxiosRequestConfig): Promise<FriendDeleteLogDetailsBO> {
    return axios(Object.assign({
      url: `/api/v1.0/deleteLog/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
