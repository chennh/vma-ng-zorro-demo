import axios, { AxiosRequestConfig } from 'axios'
import ContentSalesTalkAddREQ from './definitions/ContentSalesTalkAddREQ'
import ContentSalesTalkUpdateREQ from './definitions/ContentSalesTalkUpdateREQ'
import ContentSalesTalkGroupAddDTO from './definitions/ContentSalesTalkGroupAddDTO'
import ContentSalesTalkGroupEditDTO from './definitions/ContentSalesTalkGroupEditDTO'
import ContentsalestalkGroupKeyListParam from './params/ContentsalestalkGroupKeyListParam'
import SalesTalkGroupByKeyWordBO from './definitions/SalesTalkGroupByKeyWordBO'
import ContentsalestalkGroupListParam from './params/ContentsalestalkGroupListParam'
import ContentSalesTalkGroupBO from './definitions/ContentSalesTalkGroupBO'
import ContentsalestalkGroupDetailParam from './params/ContentsalestalkGroupDetailParam'
import ContentsalestalkGroupDelParam from './params/ContentsalestalkGroupDelParam'
import ContentsalestalkGroupListGETParam from './params/ContentsalestalkGroupListGETParam'
import ContentSalesTalkDetailGroupBO from './definitions/ContentSalesTalkDetailGroupBO'
import ContentsalestalkH5DetailParam from './params/ContentsalestalkH5DetailParam'
import ContentSalesTalkH5Detail from './definitions/ContentSalesTalkH5Detail'
import ContentSalesTalkPageREQ from './definitions/ContentSalesTalkPageREQ'
import Page from './definitions/Page'
import ContentSalesTalkBO from './definitions/ContentSalesTalkBO'
import ContentsalestalkDetailParam from './params/ContentsalestalkDetailParam'
import ContentsalestalkDelParam from './params/ContentsalestalkDelParam'

export class ContentsalestalkApi {

  /**
   * 新增话术
   *
   * @param { ContentSalesTalkAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentSalesTalkAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑话术
   *
   * @param { ContentSalesTalkUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentSalesTalkUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 新增话术分组
   *
   * @param { ContentSalesTalkGroupAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static groupSave(
    data: ContentSalesTalkGroupAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑话术分组
   *
   * @param { ContentSalesTalkGroupEditDTO } data
   * @reutrn { Promise<void> }
   */
  public static groupUpdate(
    data: ContentSalesTalkGroupEditDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 根据关键字获取话术列表-侧边栏
   *
   * @param { ContentsalestalkGroupKeyListParam } params
   * @reutrn { Promise<SalesTalkGroupByKeyWordBO[]> }
   */
  public static groupKeyList(
    params: ContentsalestalkGroupKeyListParam,
    config?: AxiosRequestConfig): Promise<SalesTalkGroupByKeyWordBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group/keyWorld/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术分组列表
   *
   * @param { ContentsalestalkGroupListParam } params
   * @reutrn { Promise<ContentSalesTalkGroupBO[]> }
   */
  public static groupList(
    params: ContentsalestalkGroupListParam,
    config?: AxiosRequestConfig): Promise<ContentSalesTalkGroupBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术分组详情
   *
   * @param { ContentsalestalkGroupDetailParam } params
   * @reutrn { Promise<ContentSalesTalkGroupEditDTO> }
   */
  public static groupDetail(
    params: ContentsalestalkGroupDetailParam,
    config?: AxiosRequestConfig): Promise<ContentSalesTalkGroupEditDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除话术分组信息
   *
   * @param { ContentsalestalkGroupDelParam } data
   * @reutrn { Promise<void> }
   */
  public static groupDel(
    data: ContentsalestalkGroupDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/group/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取话术分组列表-侧边栏
   *
   * @param { ContentsalestalkGroupListGETParam } params
   * @reutrn { Promise<ContentSalesTalkDetailGroupBO[]> }
   */
  public static groupListGET(
    params: ContentsalestalkGroupListGETParam,
    config?: AxiosRequestConfig): Promise<ContentSalesTalkDetailGroupBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/h5`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术详情-侧边栏
   *
   * @param { ContentsalestalkH5DetailParam } params
   * @reutrn { Promise<ContentSalesTalkH5Detail> }
   */
  public static h5Detail(
    params: ContentsalestalkH5DetailParam,
    config?: AxiosRequestConfig): Promise<ContentSalesTalkH5Detail> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/h5/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术分页
   *
   * @param { ContentSalesTalkPageREQ } data
   * @reutrn { Promise<Page<ContentSalesTalkBO>> }
   */
  public static page(
    data: ContentSalesTalkPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentSalesTalkBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/page`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取话术详情
   *
   * @param { ContentsalestalkDetailParam } params
   * @reutrn { Promise<ContentSalesTalkUpdateREQ> }
   */
  public static detail(
    params: ContentsalestalkDetailParam,
    config?: AxiosRequestConfig): Promise<ContentSalesTalkUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除话术信息
   *
   * @param { ContentsalestalkDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentsalestalkDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentsalestalk/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
