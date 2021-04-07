import axios, { AxiosRequestConfig } from 'axios'
import ContentarticlesstaffrelaPageParam from './params/ContentarticlesstaffrelaPageParam'
import Page from './definitions/Page'
import ContentArticlesStaffRela from './definitions/ContentArticlesStaffRela'
import ContentArticlesStaffRelaAddREQ from './definitions/ContentArticlesStaffRelaAddREQ'
import ContentArticlesStaffRelaUpdateREQ from './definitions/ContentArticlesStaffRelaUpdateREQ'
import ContentarticlesstaffrelaListParam from './params/ContentarticlesstaffrelaListParam'
import ContentarticlesstaffrelaDetailParam from './params/ContentarticlesstaffrelaDetailParam'
import ContentarticlesstaffrelaDelParam from './params/ContentarticlesstaffrelaDelParam'

export class ContentarticlesstaffrelaApi {

  /**
   * 获取文章-用户关联表分页
   *
   * @param { ContentarticlesstaffrelaPageParam } params
   * @reutrn { Promise<Page<ContentArticlesStaffRela>> }
   */
  public static page(
    params: ContentarticlesstaffrelaPageParam,
    config?: AxiosRequestConfig): Promise<Page<ContentArticlesStaffRela>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增文章-用户关联表
   *
   * @param { ContentArticlesStaffRelaAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentArticlesStaffRelaAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑文章-用户关联表
   *
   * @param { ContentArticlesStaffRelaUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentArticlesStaffRelaUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取文章-用户关联表列表
   *
   * @param { ContentarticlesstaffrelaListParam } params
   * @reutrn { Promise<ContentArticlesStaffRela[]> }
   */
  public static list(
    params: ContentarticlesstaffrelaListParam,
    config?: AxiosRequestConfig): Promise<ContentArticlesStaffRela[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取文章-用户关联表详情
   *
   * @param { ContentarticlesstaffrelaDetailParam } params
   * @reutrn { Promise<ContentArticlesStaffRela> }
   */
  public static detail(
    params: ContentarticlesstaffrelaDetailParam,
    config?: AxiosRequestConfig): Promise<ContentArticlesStaffRela> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除文章-用户关联表信息
   *
   * @param { ContentarticlesstaffrelaDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentarticlesstaffrelaDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentarticlesstaffrela/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
