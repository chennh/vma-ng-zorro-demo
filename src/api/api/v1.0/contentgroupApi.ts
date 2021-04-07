import axios, { AxiosRequestConfig } from 'axios'
import ContentGroupAddDTO from './definitions/ContentGroupAddDTO'
import ContentGroupEditDTO from './definitions/ContentGroupEditDTO'
import ContentGroupDelReq from './definitions/ContentGroupDelReq'
import ContentgroupGroupListParam from './params/ContentgroupGroupListParam'
import ContentGroupBO from './definitions/ContentGroupBO'
import ContentgroupGroupDetailParam from './params/ContentgroupGroupDetailParam'

export class ContentgroupApi {

  /**
   * 新增话术分组
   *
   * @param { ContentGroupAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static groupSave(
    data: ContentGroupAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgroup/group`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑话术分组
   *
   * @param { ContentGroupEditDTO } data
   * @reutrn { Promise<void> }
   */
  public static groupUpdate(
    data: ContentGroupEditDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgroup/group`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除话术分组信息
   *
   * @param { ContentGroupDelReq } data
   * @reutrn { Promise<void> }
   */
  public static groupDel(
    data: ContentGroupDelReq,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgroup/group`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取话术分组列表
   *
   * @param { ContentgroupGroupListParam } params
   * @reutrn { Promise<ContentGroupBO[]> }
   */
  public static groupList(
    params: ContentgroupGroupListParam,
    config?: AxiosRequestConfig): Promise<ContentGroupBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgroup/group/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术分组详情
   *
   * @param { ContentgroupGroupDetailParam } params
   * @reutrn { Promise<ContentGroupEditDTO> }
   */
  public static groupDetail(
    params: ContentgroupGroupDetailParam,
    config?: AxiosRequestConfig): Promise<ContentGroupEditDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgroup/group/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
