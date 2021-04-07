import axios, { AxiosRequestConfig } from 'axios'
import ContentMediaAddDTO from './definitions/ContentMediaAddDTO'
import ContentMediaUpdateDTO from './definitions/ContentMediaUpdateDTO'
import ContentmediaGroupListParam from './params/ContentmediaGroupListParam'
import ContentMediaDetailGroupBO from './definitions/ContentMediaDetailGroupBO'
import ContentMediaPageReq from './definitions/ContentMediaPageReq'
import Page from './definitions/Page'
import ContentMediaPageBO from './definitions/ContentMediaPageBO'
import ContentmediaDetailParam from './params/ContentmediaDetailParam'
import ContentMediaDetailBO from './definitions/ContentMediaDetailBO'
import ContentmediaDelParam from './params/ContentmediaDelParam'

export class ContentmediaApi {

  /**
   * 新增多媒体
   *
   * @param { ContentMediaAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentMediaAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑多媒体
   *
   * @param { ContentMediaUpdateDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentMediaUpdateDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取多媒体分组列表-侧边栏
   *
   * @param { ContentmediaGroupListParam } params
   * @reutrn { Promise<ContentMediaDetailGroupBO[]> }
   */
  public static groupList(
    params: ContentmediaGroupListParam,
    config?: AxiosRequestConfig): Promise<ContentMediaDetailGroupBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia/h5`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取多媒体分页
   *
   * @param { ContentMediaPageReq } data
   * @reutrn { Promise<Page<ContentMediaPageBO>> }
   */
  public static page(
    data: ContentMediaPageReq,
    config?: AxiosRequestConfig): Promise<Page<ContentMediaPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia/page`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取多媒体详情
   *
   * @param { ContentmediaDetailParam } params
   * @reutrn { Promise<ContentMediaDetailBO> }
   */
  public static detail(
    params: ContentmediaDetailParam,
    config?: AxiosRequestConfig): Promise<ContentMediaDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除多媒体信息
   *
   * @param { ContentmediaDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentmediaDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentmedia/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
