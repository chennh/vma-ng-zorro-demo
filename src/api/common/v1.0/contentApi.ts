import axios, { AxiosRequestConfig } from 'axios'
import CreateAllViewREQ from './definitions/CreateAllViewREQ'
import CreateViewREQ from './definitions/CreateViewREQ'
import ContentCommonGroupDTO from './definitions/ContentCommonGroupDTO'
import ContentCommonGroupBO from './definitions/ContentCommonGroupBO'
import ContentPageDTO from './definitions/ContentPageDTO'
import Page from './definitions/Page'
import ContentPageBO from './definitions/ContentPageBO'
import ContentGetShareUrlParam from './params/ContentGetShareUrlParam'
import ContentGetPreImgListParam from './params/ContentGetPreImgListParam'
import ContentPosterPreImgBO from './definitions/ContentPosterPreImgBO'
import ContentShareParam from './params/ContentShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import ContentTestParam from './params/ContentTestParam'
import ViewDataBO from './definitions/ViewDataBO'
import ContentWeiAppShareParam from './params/ContentWeiAppShareParam'

export class ContentApi {

  /**
   * 生成全局view数据
   *
   * @param { CreateAllViewREQ } data
   * @reutrn { Promise<void> }
   */
  public static createView(
    data: CreateAllViewREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/content/create_view`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 生成企业view数据
   *
   * @param { CreateViewREQ } data
   * @reutrn { Promise<void> }
   */
  public static createViewEnterprise(
    data: CreateViewREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/content/create_view_enterprise`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取内容分组
   *
   * @param { ContentCommonGroupDTO } data
   * @reutrn { Promise<ContentCommonGroupBO[]> }
   */
  public static groupList(
    data: ContentCommonGroupDTO,
    config?: AxiosRequestConfig): Promise<ContentCommonGroupBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/content/getGroup`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取内容分页
   *
   * @param { ContentPageDTO } data
   * @reutrn { Promise<Page<ContentPageBO>> }
   */
  public static page(
    data: ContentPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentPageBO>> {
    return axios(Object.assign({
      url: `/common/v1.0/content/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 生成分享链接
   *
   * @param { ContentGetShareUrlParam } params
   * @reutrn { Promise<string> }
   */
  public static getShareUrl(
    params: ContentGetShareUrlParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/common/v1.0/content/getShareUrl`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取预定义图片list
   *
   * @param { ContentGetPreImgListParam } params
   * @reutrn { Promise<ContentPosterPreImgBO[]> }
   */
  public static getPreImgList(
    params: ContentGetPreImgListParam,
    config?: AxiosRequestConfig): Promise<ContentPosterPreImgBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/content/pre_img`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享信息
   *
   * @param { ContentShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/common/v1.0/content/share`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * test
   *
   * @param { ContentTestParam } data
   * @reutrn { Promise<ViewDataBO[]> }
   */
  public static test(
    data: ContentTestParam,
    config?: AxiosRequestConfig): Promise<ViewDataBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/content/test`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 活动过期设置
   *
   * @reutrn { Promise<void> }
   */
  public static updateActivity(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/content/update_activity`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信app H5分享信息
   *
   * @param { ContentWeiAppShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static weiAppShare(
    params: ContentWeiAppShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/common/v1.0/content/wei/app/share`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
