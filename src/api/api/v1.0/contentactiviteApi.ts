import axios, { AxiosRequestConfig } from 'axios'
import ContentActiviteAddREQ from './definitions/ContentActiviteAddREQ'
import ContentActiviteUpdateREQ from './definitions/ContentActiviteUpdateREQ'
import ContentactiviteBeginActivityParam from './params/ContentactiviteBeginActivityParam'
import ContentactiviteEndActivityParam from './params/ContentactiviteEndActivityParam'
import ContentActiviteDTO from './definitions/ContentActiviteDTO'
import Page from './definitions/Page'
import ContentActiviteBO from './definitions/ContentActiviteBO'
import ContentactiviteFissionParam from './params/ContentactiviteFissionParam'
import ContentShareFissionBO from './definitions/ContentShareFissionBO'
import ContentactiviteInviteParam from './params/ContentactiviteInviteParam'
import ContentShareInviteBO from './definitions/ContentShareInviteBO'
import ContentActivitePassDTO from './definitions/ContentActivitePassDTO'
import ContentactiviteReceiveParam from './params/ContentactiviteReceiveParam'
import ContentShareReceiveBO from './definitions/ContentShareReceiveBO'
import ContentactiviteExportParam from './params/ContentactiviteExportParam'
import ContentactiviteShareStaffParam from './params/ContentactiviteShareStaffParam'
import ContentShareStaffBO from './definitions/ContentShareStaffBO'
import ContentactiviteGetTitleParam from './params/ContentactiviteGetTitleParam'
import ContentFormFieldsBO from './definitions/ContentFormFieldsBO'
import ContentactiviteShareInfoParam from './params/ContentactiviteShareInfoParam'
import ContentActiviteShareBO from './definitions/ContentActiviteShareBO'
import ContentactiviteShareParam from './params/ContentactiviteShareParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CustomerModifyStatusByOtherDTO from './definitions/CustomerModifyStatusByOtherDTO'
import ContentactiviteDetailParam from './params/ContentactiviteDetailParam'
import ContentactiviteDelParam from './params/ContentactiviteDelParam'

export class ContentactiviteApi {

  /**
   * 新增邀请有礼表
   *
   * @param { ContentActiviteAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentActiviteAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑邀请有礼表
   *
   * @param { ContentActiviteUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentActiviteUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 开始活动
   *
   * @param { ContentactiviteBeginActivityParam } data
   * @reutrn { Promise<void> }
   */
  public static beginActivity(
    data: ContentactiviteBeginActivityParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/begin/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 结束活动
   *
   * @param { ContentactiviteEndActivityParam } data
   * @reutrn { Promise<void> }
   */
  public static endActivity(
    data: ContentactiviteEndActivityParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/finish/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取邀请有礼表分页
   *
   * @param { ContentActiviteDTO } data
   * @reutrn { Promise<Page<ContentActiviteBO>> }
   */
  public static page(
    data: ContentActiviteDTO,
    config?: AxiosRequestConfig): Promise<Page<ContentActiviteBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/getPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 裂变列表
   *
   * @param { ContentactiviteFissionParam } params
   * @reutrn { Promise<Page<ContentShareFissionBO>> }
   */
  public static fission(
    params: ContentactiviteFissionParam,
    config?: AxiosRequestConfig): Promise<Page<ContentShareFissionBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/fission`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 参与邀请
   *
   * @param { ContentactiviteInviteParam } params
   * @reutrn { Promise<Page<ContentShareInviteBO>> }
   */
  public static invite(
    params: ContentactiviteInviteParam,
    config?: AxiosRequestConfig): Promise<Page<ContentShareInviteBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/invite`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 审核
   *
   * @param { ContentActivitePassDTO } data
   * @reutrn { Promise<void> }
   */
  public static pass(
    data: ContentActivitePassDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/pass`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 领取礼品
   *
   * @param { ContentactiviteReceiveParam } params
   * @reutrn { Promise<Page<ContentShareReceiveBO>> }
   */
  public static receive(
    params: ContentactiviteReceiveParam,
    config?: AxiosRequestConfig): Promise<Page<ContentShareReceiveBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/receive`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 领取礼品-导出
   *
   * @param { ContentactiviteExportParam } params
   * @reutrn { Promise<void> }
   */
  public static export(
    params: ContentactiviteExportParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/receive/export`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 分享员工列表
   *
   * @param { ContentactiviteShareStaffParam } params
   * @reutrn { Promise<Page<ContentShareStaffBO>> }
   */
  public static shareStaff(
    params: ContentactiviteShareStaffParam,
    config?: AxiosRequestConfig): Promise<Page<ContentShareStaffBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 动态列表头
   *
   * @param { ContentactiviteGetTitleParam } params
   * @reutrn { Promise<ContentFormFieldsBO[]> }
   */
  public static getTitle(
    params: ContentactiviteGetTitleParam,
    config?: AxiosRequestConfig): Promise<ContentFormFieldsBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/title`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享页数据总览
   *
   * @param { ContentactiviteShareInfoParam } params
   * @reutrn { Promise<ContentActiviteShareBO> }
   */
  public static shareInfo(
    params: ContentactiviteShareInfoParam,
    config?: AxiosRequestConfig): Promise<ContentActiviteShareBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/view_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分享
   *
   * @param { ContentactiviteShareParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static share(
    params: ContentactiviteShareParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/share/${params.id}`,
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
      url: `/api/v1.0/contentactivite/status/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取邀请有礼表详情
   *
   * @param { ContentactiviteDetailParam } params
   * @reutrn { Promise<ContentActiviteUpdateREQ> }
   */
  public static detail(
    params: ContentactiviteDetailParam,
    config?: AxiosRequestConfig): Promise<ContentActiviteUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除邀请有礼表信息
   *
   * @param { ContentactiviteDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentactiviteDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentactivite/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
