import axios, { AxiosRequestConfig } from 'axios'
import ContentMiniSiteBO from './definitions/ContentMiniSiteBO'
import ContentModuleInfo from './definitions/ContentModuleInfo'
import ContentminisiteGetPageInfoParam from './params/ContentminisiteGetPageInfoParam'
import ContentminisiteDeletePageParam from './params/ContentminisiteDeletePageParam'
import ContentViewLogSitePageDTO from './definitions/ContentViewLogSitePageDTO'
import Page from './definitions/Page'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogMySitePageDTO from './definitions/ContentViewLogMySitePageDTO'
import ContentViewLogRankPageDTO from './definitions/ContentViewLogRankPageDTO'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentminisiteGetViewPageLogParam from './params/ContentminisiteGetViewPageLogParam'
import PageViewLog from './definitions/PageViewLog'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentminisiteViewDetailParam from './params/ContentminisiteViewDetailParam'
import ContentViewLogBO from './definitions/ContentViewLogBO'
import ContentminisiteUpdateStatusParam from './params/ContentminisiteUpdateStatusParam'

export class ContentminisiteApi {

  /**
   * 获取企业小站详情
   *
   * @reutrn { Promise<ContentMiniSiteBO> }
   */
  public static detail(config?: AxiosRequestConfig): Promise<ContentMiniSiteBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 更新微小站
   *
   * @param { ContentMiniSiteBO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentMiniSiteBO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 微小站上下架状态
   *
   * @reutrn { Promise<number> }
   */
  public static getStatus(config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/getstatus`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑/新增页面
   *
   * @param { ContentModuleInfo } data
   * @reutrn { Promise<void> }
   */
  public static updatePage(
    data: ContentModuleInfo,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/page_info`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取页面信息
   *
   * @param { ContentminisiteGetPageInfoParam } params
   * @reutrn { Promise<ContentModuleInfo> }
   */
  public static getPageInfo(
    params: ContentminisiteGetPageInfoParam,
    config?: AxiosRequestConfig): Promise<ContentModuleInfo> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/page_info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除页面
   *
   * @param { ContentminisiteDeletePageParam } data
   * @reutrn { Promise<void> }
   */
  public static deletePage(
    data: ContentminisiteDeletePageParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/page_info/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 所有分享分页-浏览记录
   *
   * @param { ContentViewLogSitePageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageAll(
    data: ContentViewLogSitePageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/share`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的分享分页
   *
   * @param { ContentViewLogMySitePageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageMy(
    data: ContentViewLogMySitePageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/share/my`,
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
      url: `/api/v1.0/contentminisite/share/rank`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 页面浏览记录
   *
   * @param { ContentminisiteGetViewPageLogParam } data
   * @reutrn { Promise<PageViewLog[]> }
   */
  public static getViewPageLog(
    data: ContentminisiteGetViewPageLogParam,
    config?: AxiosRequestConfig): Promise<PageViewLog[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/share/viewPage/${data.id}`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 咨询入口 二维码信息
   *
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/share_info`,
      method: 'get',
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
      url: `/api/v1.0/contentminisite/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取网站浏览信息
   *
   * @param { ContentminisiteViewDetailParam } params
   * @reutrn { Promise<ContentViewLogBO> }
   */
  public static viewDetail(
    params: ContentminisiteViewDetailParam,
    config?: AxiosRequestConfig): Promise<ContentViewLogBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/view`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 微小站上架/下架
   *
   * @param { ContentminisiteUpdateStatusParam } data
   * @reutrn { Promise<void> }
   */
  public static updateStatusPUT(
    data: ContentminisiteUpdateStatusParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentminisite/${data.status}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
