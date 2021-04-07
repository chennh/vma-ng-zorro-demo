import axios, { AxiosRequestConfig } from 'axios'
import ContentArticlesAddREQ from './definitions/ContentArticlesAddREQ'
import ContentArticlesUpdateREQ from './definitions/ContentArticlesUpdateREQ'
import ContentArticlesPageREQ from './definitions/ContentArticlesPageREQ'
import Page from './definitions/Page'
import ContentArticlesBO from './definitions/ContentArticlesBO'
import ContentarticlesTestParam from './params/ContentarticlesTestParam'
import ContentViewLogAllPageDTO from './definitions/ContentViewLogAllPageDTO'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogMyPageDTO from './definitions/ContentViewLogMyPageDTO'
import ContentViewLogRankPageDTO from './definitions/ContentViewLogRankPageDTO'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentarticlesShareParam from './params/ContentarticlesShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import WxParseReq from './definitions/WxParseReq'
import ContentarticlesDetailParam from './params/ContentarticlesDetailParam'
import ContentarticlesDelParam from './params/ContentarticlesDelParam'

export class ContentarticlesApi {

  /**
   * 新增文章表
   *
   * @param { ContentArticlesAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentArticlesAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑文章表
   *
   * @param { ContentArticlesUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentArticlesUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取文章表分页
   *
   * @param { ContentArticlesPageREQ } data
   * @reutrn { Promise<Page<ContentArticlesBO>> }
   */
  public static page(
    data: ContentArticlesPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentArticlesBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 创建模拟数据
   *
   * @param { ContentarticlesTestParam } params
   * @reutrn { Promise<void> }
   */
  public static test(
    params: ContentarticlesTestParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/mookdata`,
      method: 'get',
      params,
      responseType: 'text'
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
      url: `/api/v1.0/contentarticles/share`,
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
      url: `/api/v1.0/contentarticles/share/my`,
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
      url: `/api/v1.0/contentarticles/share/rank`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentarticlesShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentarticlesShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/share/${params.id}`,
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
      url: `/api/v1.0/contentarticles/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 转载微信文章
   *
   * @param { WxParseReq } data
   * @reutrn { Promise<ContentArticlesAddREQ> }
   */
  public static wxArtilceParse(
    data: WxParseReq,
    config?: AxiosRequestConfig): Promise<ContentArticlesAddREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/wx_artilce_parse`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取文章表详情
   *
   * @param { ContentarticlesDetailParam } params
   * @reutrn { Promise<ContentArticlesUpdateREQ> }
   */
  public static detail(
    params: ContentarticlesDetailParam,
    config?: AxiosRequestConfig): Promise<ContentArticlesUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除文章表信息
   *
   * @param { ContentarticlesDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentarticlesDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticles/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
