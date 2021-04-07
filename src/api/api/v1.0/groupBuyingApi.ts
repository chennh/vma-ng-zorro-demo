import axios, { AxiosRequestConfig } from 'axios'
import GroupBuyingPageParam from './params/GroupBuyingPageParam'
import Page from './definitions/Page'
import GroupBuyingPageBO from './definitions/GroupBuyingPageBO'
import ActivityGroupBuyingAddREQ from './definitions/ActivityGroupBuyingAddREQ'
import ActivityGroupBuyingUpdateREQ from './definitions/ActivityGroupBuyingUpdateREQ'
import GroupBuyingEndingParam from './params/GroupBuyingEndingParam'
import GroupBuyingDetailParam from './params/GroupBuyingDetailParam'
import GroupBuyingDetailBO from './definitions/GroupBuyingDetailBO'
import GroupBuyingDelParam from './params/GroupBuyingDelParam'

export class GroupBuyingApi {

  /**
   * 获取分页
   *
   * @param { GroupBuyingPageParam } params
   * @reutrn { Promise<Page<GroupBuyingPageBO>> }
   */
  public static page(
    params: GroupBuyingPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupBuyingPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增
   *
   * @param { ActivityGroupBuyingAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ActivityGroupBuyingAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying/create`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑
   *
   * @param { ActivityGroupBuyingUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ActivityGroupBuyingUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying/edit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 结束拼团
   *
   * @param { GroupBuyingEndingParam } params
   * @reutrn { Promise<void> }
   */
  public static ending(
    params: GroupBuyingEndingParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying/ending/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { GroupBuyingDetailParam } params
   * @reutrn { Promise<GroupBuyingDetailBO> }
   */
  public static detail(
    params: GroupBuyingDetailParam,
    config?: AxiosRequestConfig): Promise<GroupBuyingDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除信息
   *
   * @param { GroupBuyingDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupBuyingDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
