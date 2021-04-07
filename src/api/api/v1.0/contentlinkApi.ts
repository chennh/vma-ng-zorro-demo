import axios, { AxiosRequestConfig } from 'axios'
import ContentLinkAddREQ from './definitions/ContentLinkAddREQ'
import ContentLinkUpdateREQ from './definitions/ContentLinkUpdateREQ'
import ContentLinkPageREQ from './definitions/ContentLinkPageREQ'
import Page from './definitions/Page'
import ContentLinkBO from './definitions/ContentLinkBO'
import ContentViewLogAllPageDTO from './definitions/ContentViewLogAllPageDTO'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogMyPageDTO from './definitions/ContentViewLogMyPageDTO'
import ContentViewLogRankPageDTO from './definitions/ContentViewLogRankPageDTO'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentlinkShareParam from './params/ContentlinkShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentlinkDetailParam from './params/ContentlinkDetailParam'
import ContentlinkDelParam from './params/ContentlinkDelParam'

export class ContentlinkApi {

  /**
   * 新增h5链接
   *
   * @param { ContentLinkAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentLinkAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑h5链接
   *
   * @param { ContentLinkUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentLinkUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取h5链接分页
   *
   * @param { ContentLinkPageREQ } data
   * @reutrn { Promise<Page<ContentLinkBO>> }
   */
  public static page(
    data: ContentLinkPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentLinkBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 所有分享分页-浏览记录
   *
   * @param { ContentViewLogAllPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageAll(
    data: ContentViewLogAllPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/share`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的分享分页
   *
   * @param { ContentViewLogMyPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageMy(
    data: ContentViewLogMyPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/share/my`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 员工排行
   *
   * @param { ContentViewLogRankPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogRankPageBO>> }
   */
  public static shareRank(
    data: ContentViewLogRankPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogRankPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/share/rank`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentlinkShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentlinkShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/share/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 批量添加客户到公海
   *
   * @param { CustomerModifyStatusByOtherDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: CustomerModifyStatusByOtherDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取h5链接详情
   *
   * @param { ContentlinkDetailParam } params
   * @reutrn { Promise<ContentLinkUpdateREQ> }
   */
  public static detail(
    params: ContentlinkDetailParam,
    config?: AxiosRequestConfig): Promise<ContentLinkUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除h5链接信息
   *
   * @param { ContentlinkDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentlinkDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentlink/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
