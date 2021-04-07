import axios, { AxiosRequestConfig } from 'axios'
import ContentPosterAddREQ from './definitions/ContentPosterAddREQ'
import ContentPosterUpdateREQ from './definitions/ContentPosterUpdateREQ'
import ContentposterDownInfoParam from './params/ContentposterDownInfoParam'
import ContentPosterPageREQ from './definitions/ContentPosterPageREQ'
import Page from './definitions/Page'
import ContentPosterBO from './definitions/ContentPosterBO'
import ContentPosterPreImgBO from './definitions/ContentPosterPreImgBO'
import ContentposterWxDownInfoParam from './params/ContentposterWxDownInfoParam'
import ContentposterDetailParam from './params/ContentposterDetailParam'
import ContentposterDelParam from './params/ContentposterDelParam'

export class ContentposterApi {

  /**
   * 新增海报
   *
   * @param { ContentPosterAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentPosterAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑海报
   *
   * @param { ContentPosterUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentPosterUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 下载信息
   *
   * @param { ContentposterDownInfoParam } params
   * @reutrn { Promise<string> }
   */
  public static downInfo(
    params: ContentposterDownInfoParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/downInfo/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取海报分页
   *
   * @param { ContentPosterPageREQ } data
   * @reutrn { Promise<Page<ContentPosterBO>> }
   */
  public static page(
    data: ContentPosterPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentPosterBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取预定义图片list
   *
   * @reutrn { Promise<ContentPosterPreImgBO[]> }
   */
  public static getPreImgList(config?: AxiosRequestConfig): Promise<ContentPosterPreImgBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/pre_img`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信h5下载信息
   *
   * @param { ContentposterWxDownInfoParam } params
   * @reutrn { Promise<string> }
   */
  public static wxDownInfo(
    params: ContentposterWxDownInfoParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/wx_h5downInfo`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取海报详情
   *
   * @param { ContentposterDetailParam } params
   * @reutrn { Promise<ContentPosterUpdateREQ> }
   */
  public static detail(
    params: ContentposterDetailParam,
    config?: AxiosRequestConfig): Promise<ContentPosterUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除海报信息
   *
   * @param { ContentposterDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentposterDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentposter/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
