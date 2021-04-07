import axios, { AxiosRequestConfig } from 'axios'
import ContentAppletAddREQ from './definitions/ContentAppletAddREQ'
import ContentAppletUpdateREQ from './definitions/ContentAppletUpdateREQ'
import ContentAppletPageREQ from './definitions/ContentAppletPageREQ'
import Page from './definitions/Page'
import ContentAppletBO from './definitions/ContentAppletBO'
import ContentappletDetailParam from './params/ContentappletDetailParam'
import ContentappletDelParam from './params/ContentappletDelParam'

export class ContentappletApi {

  /**
   * 新增小程序
   *
   * @param { ContentAppletAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentAppletAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentapplet`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑小程序
   *
   * @param { ContentAppletUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentAppletUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentapplet`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取小程序分页
   *
   * @param { ContentAppletPageREQ } data
   * @reutrn { Promise<Page<ContentAppletBO>> }
   */
  public static page(
    data: ContentAppletPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentAppletBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentapplet/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取小程序详情
   *
   * @param { ContentappletDetailParam } params
   * @reutrn { Promise<ContentAppletUpdateREQ> }
   */
  public static detail(
    params: ContentappletDetailParam,
    config?: AxiosRequestConfig): Promise<ContentAppletUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentapplet/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除小程序信息
   *
   * @param { ContentappletDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentappletDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentapplet/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
