import axios, { AxiosRequestConfig } from 'axios'
import ContentGoodsAddREQ from './definitions/ContentGoodsAddREQ'
import ContentGoodsUpdateREQ from './definitions/ContentGoodsUpdateREQ'
import ContentGoodsPageREQ from './definitions/ContentGoodsPageREQ'
import Page from './definitions/Page'
import ContentGoodsBO from './definitions/ContentGoodsBO'
import ContentViewLogAllPageDTO from './definitions/ContentViewLogAllPageDTO'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentViewLogMyPageDTO from './definitions/ContentViewLogMyPageDTO'
import ContentgoodsGetTitleParam from './params/ContentgoodsGetTitleParam'
import ContentFormFieldsBO from './definitions/ContentFormFieldsBO'
import ContentgoodsShareRankParam from './params/ContentgoodsShareRankParam'
import ContentViewLogRankPageBO from './definitions/ContentViewLogRankPageBO'
import ContentgoodsShareParam from './params/ContentgoodsShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentgoodsDetailParam from './params/ContentgoodsDetailParam'
import ContentgoodsDelParam from './params/ContentgoodsDelParam'

export class ContentgoodsApi {

  /**
   * 新增商品
   *
   * @param { ContentGoodsAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentGoodsAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑商品
   *
   * @param { ContentGoodsUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentGoodsUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取商品分页
   *
   * @param { ContentGoodsPageREQ } data
   * @reutrn { Promise<Page<ContentGoodsBO>> }
   */
  public static page(
    data: ContentGoodsPageREQ,
    config?: AxiosRequestConfig): Promise<Page<ContentGoodsBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 所有分享分页-领取记录
   *
   * @param { ContentViewLogAllPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageAllReceive(
    data: ContentViewLogAllPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/receive`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的分享分页-领取记录
   *
   * @param { ContentViewLogMyPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageMyReceive(
    data: ContentViewLogMyPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/receive/my`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 动态列表头
   *
   * @param { ContentgoodsGetTitleParam } params
   * @reutrn { Promise<ContentFormFieldsBO[]> }
   */
  public static getTitle(
    params: ContentgoodsGetTitleParam,
    config?: AxiosRequestConfig): Promise<ContentFormFieldsBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/receive/title`,
      method: 'get',
      params,
      responseType: 'json'
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
      url: `/api/v1.0/contentgoods/share`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的分享分页-领取记录
   *
   * @param { ContentViewLogMyPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageMy(
    data: ContentViewLogMyPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/share/my`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 员工排行
   *
   * @param { ContentgoodsShareRankParam } params
   * @reutrn { Promise<Page<ContentViewLogRankPageBO>> }
   */
  public static shareRank(
    params: ContentgoodsShareRankParam,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogRankPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/share/rank`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentgoodsShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentgoodsShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/share/${params.id}`,
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
      url: `/api/v1.0/contentgoods/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 未绑定企业微信的员工名称
   *
   * @reutrn { Promise<string> }
   */
  public static unBind(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/unBind`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 未上传二维码的员工名称
   *
   * @reutrn { Promise<string> }
   */
  public static unUpload(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/unUpload`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取商品详情
   *
   * @param { ContentgoodsDetailParam } params
   * @reutrn { Promise<ContentGoodsUpdateREQ> }
   */
  public static detail(
    params: ContentgoodsDetailParam,
    config?: AxiosRequestConfig): Promise<ContentGoodsUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除商品信息
   *
   * @param { ContentgoodsDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentgoodsDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoods/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
