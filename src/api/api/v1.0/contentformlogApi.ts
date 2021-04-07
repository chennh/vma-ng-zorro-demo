import axios, { AxiosRequestConfig } from 'axios'
import ContentformlogPageParam from './params/ContentformlogPageParam'
import Page from './definitions/Page'
import ContentFormLog from './definitions/ContentFormLog'
import ContentFormLogAddREQ from './definitions/ContentFormLogAddREQ'
import ContentFormLogUpdateREQ from './definitions/ContentFormLogUpdateREQ'
import ContentformlogListParam from './params/ContentformlogListParam'
import ContentformlogDetailParam from './params/ContentformlogDetailParam'
import ContentformlogDelParam from './params/ContentformlogDelParam'

export class ContentformlogApi {

  /**
   * 获取表单填写记录表分页
   *
   * @param { ContentformlogPageParam } params
   * @reutrn { Promise<Page<ContentFormLog>> }
   */
  public static page(
    params: ContentformlogPageParam,
    config?: AxiosRequestConfig): Promise<Page<ContentFormLog>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增表单填写记录表
   *
   * @param { ContentFormLogAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentFormLogAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑表单填写记录表
   *
   * @param { ContentFormLogUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentFormLogUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取表单填写记录表列表
   *
   * @param { ContentformlogListParam } params
   * @reutrn { Promise<ContentFormLog[]> }
   */
  public static list(
    params: ContentformlogListParam,
    config?: AxiosRequestConfig): Promise<ContentFormLog[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取表单填写记录表详情
   *
   * @param { ContentformlogDetailParam } params
   * @reutrn { Promise<ContentFormLog> }
   */
  public static detail(
    params: ContentformlogDetailParam,
    config?: AxiosRequestConfig): Promise<ContentFormLog> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除表单填写记录表信息
   *
   * @param { ContentformlogDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentformlogDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentformlog/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
