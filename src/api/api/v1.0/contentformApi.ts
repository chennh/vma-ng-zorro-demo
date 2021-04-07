import axios, { AxiosRequestConfig } from 'axios'
import ContentFormAddREQ from './definitions/ContentFormAddREQ'
import ContentFormUpdateREQ from './definitions/ContentFormUpdateREQ'
import CustomerParamAddDTO from './definitions/CustomerParamAddDTO'
import ContentFormFieldsBO from './definitions/ContentFormFieldsBO'
import ContentFormPageREQ from './definitions/ContentFormPageREQ'
import Page from './definitions/Page'
import ContentFormBO from './definitions/ContentFormBO'
import ContentViewLogAllPageDTO from './definitions/ContentViewLogAllPageDTO'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogAllListDTO from './definitions/ContentViewLogAllListDTO'
import ContentViewLogMyPageDTO from './definitions/ContentViewLogMyPageDTO'
import ContentViewLogMyListDTO from './definitions/ContentViewLogMyListDTO'
import ContentformShareRankParam from './params/ContentformShareRankParam'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentformGetTitleParam from './params/ContentformGetTitleParam'
import ContentformShareParam from './params/ContentformShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentformDetailParam from './params/ContentformDetailParam'
import ContentformDelParam from './params/ContentformDelParam'

export class ContentformApi {

  /**
   * 新增表单
   *
   * @param { ContentFormAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentFormAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑表单
   *
   * @param { ContentFormUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentFormUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 添加客户资料字段
   *
   * @param { CustomerParamAddDTO } data
   * @reutrn { Promise<ContentFormFieldsBO> }
   */
  public static addColumn(
    data: CustomerParamAddDTO,
    config?: AxiosRequestConfig): Promise<ContentFormFieldsBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/columm/add`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取表单分页
   *
   * @param { ContentFormPageREQ } data
   * @reutrn { Promise<Page<ContentFormBO>> }
   */
  public static page(
    data: ContentFormPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentFormBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 所有分享分页-填写记录
   *
   * @param { ContentViewLogAllPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageAll(
    data: ContentViewLogAllPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 所有分享分页-填写记录-导出
   *
   * @param { ContentViewLogAllListDTO } data
   * @reutrn { Promise<void> }
   */
  public static exportAll(
    data: ContentViewLogAllListDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share/export`,
      method: 'post',
      data,
      responseType: 'text'
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
      url: `/api/v1.0/contentform/share/my`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的分享分页-导出
   *
   * @param { ContentViewLogMyListDTO } data
   * @reutrn { Promise<void> }
   */
  public static exportMy(
    data: ContentViewLogMyListDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share/my/export`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 员工排行
   *
   * @param { ContentformShareRankParam } params
   * @reutrn { Promise<Page<ContentViewLogRankPageBO>> }
   */
  public static shareRank(
    params: ContentformShareRankParam,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogRankPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share/rank`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享 动态列
   *
   * @param { ContentformGetTitleParam } params
   * @reutrn { Promise<ContentFormFieldsBO[]> }
   */
  public static getTitle(
    params: ContentformGetTitleParam,
    config?: AxiosRequestConfig): Promise<ContentFormFieldsBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share/title`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentformShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentformShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/share/${params.id}`,
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
      url: `/api/v1.0/contentform/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取表单详情
   *
   * @param { ContentformDetailParam } params
   * @reutrn { Promise<ContentFormUpdateREQ> }
   */
  public static detail(
    params: ContentformDetailParam,
    config?: AxiosRequestConfig): Promise<ContentFormUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除表单信息
   *
   * @param { ContentformDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentformDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentform/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
