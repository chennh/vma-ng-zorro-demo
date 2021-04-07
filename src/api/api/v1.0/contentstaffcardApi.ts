import axios, { AxiosRequestConfig } from 'axios'
import ContentStaffCardUpdateREQ from './definitions/ContentStaffCardUpdateREQ'
import ContentStaffCardLabelDTO from './definitions/ContentStaffCardLabelDTO'
import ContentStaffCardLabelBO from './definitions/ContentStaffCardLabelBO'
import ContentViewLogCardPageDTO from './definitions/ContentViewLogCardPageDTO'
import Page from './definitions/Page'
import ContentViewLogPageBO from './definitions/ContentViewLogPageBO'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import ContentStaffCardUpdateStatusREQ from './definitions/ContentStaffCardUpdateStatusREQ'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentstaffcardViewDetailParam from './params/ContentstaffcardViewDetailParam'
import ContentViewLogBO from './definitions/ContentViewLogBO'

export class ContentstaffcardApi {

  /**
   * 获取名片表详情
   *
   * @reutrn { Promise<ContentStaffCardUpdateREQ> }
   */
  public static detail(config?: AxiosRequestConfig): Promise<ContentStaffCardUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 编辑名片表
   *
   * @param { ContentStaffCardUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentStaffCardUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 新增标签
   *
   * @param { ContentStaffCardLabelDTO } data
   * @reutrn { Promise<ContentStaffCardLabelBO> }
   */
  public static addLabel(
    data: ContentStaffCardLabelDTO,
    config?: AxiosRequestConfig): Promise<ContentStaffCardLabelBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/label`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 浏览记录
   *
   * @param { ContentViewLogCardPageDTO } data
   * @reutrn { Promise<Page<ContentViewLogPageBO>> }
   */
  public static pageAll(
    data: ContentViewLogCardPageDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentViewLogPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/share`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享名片
   *
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/share_info`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取编辑名片状态
   *
   * @reutrn { Promise<ContentStaffCardUpdateStatusREQ> }
   */
  public static detailStatus(config?: AxiosRequestConfig): Promise<ContentStaffCardUpdateStatusREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/status`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 编辑名片状态
   *
   * @param { ContentStaffCardUpdateStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: ContentStaffCardUpdateStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 批量添加客户到公海
   *
   * @param { CustomerModifyStatusByOtherDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateStatusPOST(
    data: CustomerModifyStatusByOtherDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取名片浏览信息
   *
   * @param { ContentstaffcardViewDetailParam } params
   * @reutrn { Promise<ContentViewLogBO> }
   */
  public static viewDetail(
    params: ContentstaffcardViewDetailParam,
    config?: AxiosRequestConfig): Promise<ContentViewLogBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentstaffcard/view`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
