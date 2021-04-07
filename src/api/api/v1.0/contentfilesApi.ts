import axios, { AxiosRequestConfig } from 'axios'
import ContentFilesAddREQ from './definitions/ContentFilesAddREQ'
import ContentFilesUpdateREQ from './definitions/ContentFilesUpdateREQ'
import ContentFilesPageREQ from './definitions/ContentFilesPageREQ'
import Page from './definitions/Page'
import ContentFilesBO from './definitions/ContentFilesBO'
import ContentViewLogAllPageDTO from './definitions/ContentViewLogAllPageDTO'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogMyPageDTO from './definitions/ContentViewLogMyPageDTO'
import ContentfilesShareRankParam from './params/ContentfilesShareRankParam'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentfilesShareParam from './params/ContentfilesShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentfilesDetailParam from './params/ContentfilesDetailParam'
import ContentfilesDelParam from './params/ContentfilesDelParam'

export class ContentfilesApi {

  /**
   * 新增文件表
   *
   * @param { ContentFilesAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentFilesAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑文件表
   *
   * @param { ContentFilesUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentFilesUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取文件表分页
   *
   * @param { ContentFilesPageREQ } data
   * @reutrn { Promise<Page<ContentFilesBO>> }
   */
  public static page(
    data: ContentFilesPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentFilesBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles/getPage`,
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
      url: `/api/v1.0/contentfiles/share`,
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
      url: `/api/v1.0/contentfiles/share/my`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 员工排行
   *
   * @param { ContentfilesShareRankParam } params
   * @reutrn { Promise<Page<ContentViewLogRankPageBO>> }
   */
  public static shareRank(
    params: ContentfilesShareRankParam,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogRankPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles/share/rank`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentfilesShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentfilesShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles/share/${params.id}`,
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
      url: `/api/v1.0/contentfiles/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取文件表详情
   *
   * @param { ContentfilesDetailParam } params
   * @reutrn { Promise<ContentFilesUpdateREQ> }
   */
  public static detail(
    params: ContentfilesDetailParam,
    config?: AxiosRequestConfig): Promise<ContentFilesUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除文件表信息
   *
   * @param { ContentfilesDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentfilesDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentfiles/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
