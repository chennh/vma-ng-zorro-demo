import axios, { AxiosRequestConfig } from 'axios'
import RedpackettemplatePageParam from './params/RedpackettemplatePageParam'
import Page from './definitions/Page'
import RedPacketTemplateBO from './definitions/RedPacketTemplateBO'
import RedPacketTemplateAddREQ from './definitions/RedPacketTemplateAddREQ'
import RedPacketTemplateEditREQ from './definitions/RedPacketTemplateEditREQ'
import RedPacketMerchantConfigDetailDTO from './definitions/RedPacketMerchantConfigDetailDTO'
import RedPacketMerchantConfigAddDTO from './definitions/RedPacketMerchantConfigAddDTO'
import RedPacketMerchantConfigEditDTO from './definitions/RedPacketMerchantConfigEditDTO'
import RedpackettemplateCustomerPageParam from './params/RedpackettemplateCustomerPageParam'
import RedPacketSendCustomerLogBO from './definitions/RedPacketSendCustomerLogBO'
import RedpackettemplateGroupPageParam from './params/RedpackettemplateGroupPageParam'
import RedPacketSendgroupLogBO from './definitions/RedPacketSendgroupLogBO'
import RedpackettemplateGetGroupReceivePageParam from './params/RedpackettemplateGetGroupReceivePageParam'
import RedPacketGroupReceiveLogBO from './definitions/RedPacketGroupReceiveLogBO'
import RedpackettemplateGetGroupSummaryParam from './params/RedpackettemplateGetGroupSummaryParam'
import RedPacketSendgroupSummaryLogBO from './definitions/RedPacketSendgroupSummaryLogBO'
import RedpackettemplateGetH5PacketPageParam from './params/RedpackettemplateGetH5PacketPageParam'
import RedPacketH5CustomerLogBO from './definitions/RedPacketH5CustomerLogBO'
import RedPacketH5SendDTO from './definitions/RedPacketH5SendDTO'
import RedPacketH5SummaryLogBO from './definitions/RedPacketH5SummaryLogBO'
import RedCustomerLimitDTO from './definitions/RedCustomerLimitDTO'
import RedPacketStaffBO from './definitions/RedPacketStaffBO'
import RedPacketStaffLimitEditDTO from './definitions/RedPacketStaffLimitEditDTO'
import RedPacketStaffEditDTO from './definitions/RedPacketStaffEditDTO'
import RedPacketTemplateUpdateStatusREQ from './definitions/RedPacketTemplateUpdateStatusREQ'
import RedpackettemplateSummaryParam from './params/RedpackettemplateSummaryParam'
import RedPacketTemplateSummaryBO from './definitions/RedPacketTemplateSummaryBO'
import RedpackettemplateDetailParam from './params/RedpackettemplateDetailParam'
import RedpackettemplateDelParam from './params/RedpackettemplateDelParam'

export class RedpackettemplateApi {

  /**
   * ???????????????????????????
   *
   * @param { RedpackettemplatePageParam } params
   * @reutrn { Promise<Page<RedPacketTemplateBO>> }
   */
  public static page(
    params: RedpackettemplatePageParam,
    config?: AxiosRequestConfig): Promise<Page<RedPacketTemplateBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedPacketTemplateAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: RedPacketTemplateAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedPacketTemplateEditREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: RedPacketTemplateEditREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ?????????????????? ??????null???????????????
   *
   * @reutrn { Promise<RedPacketMerchantConfigDetailDTO> }
   */
  public static getConfig(config?: AxiosRequestConfig): Promise<RedPacketMerchantConfigDetailDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/config`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedPacketMerchantConfigAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static addConfug(
    data: RedPacketMerchantConfigAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/config`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedPacketMerchantConfigEditDTO } data
   * @reutrn { Promise<void> }
   */
  public static addConfugPUT(
    data: RedPacketMerchantConfigEditDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/config`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????-????????????
   *
   * @param { RedpackettemplateCustomerPageParam } params
   * @reutrn { Promise<Page<RedPacketSendCustomerLogBO>> }
   */
  public static customerPage(
    params: RedpackettemplateCustomerPageParam,
    config?: AxiosRequestConfig): Promise<Page<RedPacketSendCustomerLogBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/customer`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????-???????????????
   *
   * @param { RedpackettemplateGroupPageParam } params
   * @reutrn { Promise<Page<RedPacketSendgroupLogBO>> }
   */
  public static groupPage(
    params: RedpackettemplateGroupPageParam,
    config?: AxiosRequestConfig): Promise<Page<RedPacketSendgroupLogBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/group`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ?????????????????????
   *
   * @param { RedpackettemplateGetGroupReceivePageParam } params
   * @reutrn { Promise<Page<RedPacketGroupReceiveLogBO>> }
   */
  public static getGroupReceivePage(
    params: RedpackettemplateGetGroupReceivePageParam,
    config?: AxiosRequestConfig): Promise<Page<RedPacketGroupReceiveLogBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/group/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ?????????????????????
   *
   * @param { RedpackettemplateGetGroupSummaryParam } params
   * @reutrn { Promise<RedPacketSendgroupSummaryLogBO> }
   */
  public static getGroupSummary(
    params: RedpackettemplateGetGroupSummaryParam,
    config?: AxiosRequestConfig): Promise<RedPacketSendgroupSummaryLogBO> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/group/summary/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????-?????????
   *
   * @param { RedpackettemplateGetH5PacketPageParam } params
   * @reutrn { Promise<Page<RedPacketH5CustomerLogBO>> }
   */
  public static getH5PacketPage(
    params: RedpackettemplateGetH5PacketPageParam,
    config?: AxiosRequestConfig): Promise<Page<RedPacketH5CustomerLogBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/h5`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????????????????????????????-?????????
   *
   * @reutrn { Promise<boolean> }
   */
  public static checkLimit(config?: AxiosRequestConfig): Promise<boolean> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/h5/check`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????-?????????
   *
   * @param { RedPacketH5SendDTO } data
   * @reutrn { Promise<string> }
   */
  public static sendRed(
    data: RedPacketH5SendDTO,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/h5/send`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????????????????????????????-?????????
   *
   * @reutrn { Promise<RedPacketH5SummaryLogBO> }
   */
  public static h5Summary(config?: AxiosRequestConfig): Promise<RedPacketH5SummaryLogBO> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/h5/summary`,
      method: 'post',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????-????????????????????????
   *
   * @reutrn { Promise<RedCustomerLimitDTO> }
   */
  public static getCustomerLimit(config?: AxiosRequestConfig): Promise<RedCustomerLimitDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/limit/customer`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????-????????????????????????
   *
   * @param { RedCustomerLimitDTO } data
   * @reutrn { Promise<void> }
   */
  public static setCustomerLimit(
    data: RedCustomerLimitDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/limit/customer`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????-????????????????????????
   *
   * @reutrn { Promise<RedPacketStaffBO[]> }
   */
  public static getStaffLimitList(config?: AxiosRequestConfig): Promise<RedPacketStaffBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/limit/staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????-????????????????????????
   *
   * @param { RedPacketStaffLimitEditDTO[] } data
   * @reutrn { Promise<void> }
   */
  public static setStaffLimit(
    data: RedPacketStaffLimitEditDTO[],
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/limit/staff`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @reutrn { Promise<number[]> }
   */
  public static getStaffList(config?: AxiosRequestConfig): Promise<number[]> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedPacketStaffEditDTO } data
   * @reutrn { Promise<void> }
   */
  public static setStaff(
    data: RedPacketStaffEditDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/staff`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { RedPacketTemplateUpdateStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: RedPacketTemplateUpdateStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????-????????????
   *
   * @param { RedpackettemplateSummaryParam } data
   * @reutrn { Promise<RedPacketTemplateSummaryBO> }
   */
  public static summary(
    data: RedpackettemplateSummaryParam,
    config?: AxiosRequestConfig): Promise<RedPacketTemplateSummaryBO> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/summary/${data.id}`,
      method: 'put',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ???????????????????????????
   *
   * @param { RedpackettemplateDetailParam } params
   * @reutrn { Promise<RedPacketTemplateEditREQ> }
   */
  public static detail(
    params: RedpackettemplateDetailParam,
    config?: AxiosRequestConfig): Promise<RedPacketTemplateEditREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { RedpackettemplateDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: RedpackettemplateDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/redpackettemplate/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
