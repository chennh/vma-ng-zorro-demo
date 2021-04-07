import axios, { AxiosRequestConfig } from 'axios'
import ContentcollectionGetPageParam from './params/ContentcollectionGetPageParam'
import Page from './definitions/Page'
import ContentCollectionPageBO from './definitions/ContentCollectionPageBO'
import ContentCollectionAddDTO from './definitions/ContentCollectionAddDTO'
import ContentcollectionDelCollectionParam from './params/ContentcollectionDelCollectionParam'
import ContentcollectionDelParam from './params/ContentcollectionDelParam'

export class ContentcollectionApi {

  /**
   * 获取收藏分页-侧边栏
   *
   * @param { ContentcollectionGetPageParam } params
   * @reutrn { Promise<Page<ContentCollectionPageBO>> }
   */
  public static getPage(
    params: ContentcollectionGetPageParam,
    config?: AxiosRequestConfig): Promise<Page<ContentCollectionPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentcollection/h5`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 收藏-侧边栏
   *
   * @param { ContentCollectionAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentCollectionAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentcollection/h5`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 取消收藏-内容列表-侧边栏
   *
   * @param { ContentcollectionDelCollectionParam } data
   * @reutrn { Promise<void> }
   */
  public static delCollection(
    data: ContentcollectionDelCollectionParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentcollection/h5/${data.contentId}/${data.type}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 取消收藏-收藏夹-侧边栏
   *
   * @param { ContentcollectionDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentcollectionDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentcollection/h5/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
