import axios, { AxiosRequestConfig } from 'axios'
import DrainagePageParam from './params/DrainagePageParam'
import Page from './definitions/Page'
import CustomerDrainagePageBO from './definitions/CustomerDrainagePageBO'
import DrainageAgentSignatureParam from './params/DrainageAgentSignatureParam'
import H5SignatureConfigBO from './definitions/H5SignatureConfigBO'
import DistributionCustomerREQ from './definitions/DistributionCustomerREQ'
import DrainageWxH5CustomerDrainageParam from './params/DrainageWxH5CustomerDrainageParam'
import WxH5CustomerDrainageBO from './definitions/WxH5CustomerDrainageBO'
import MaintainLabelREQ from './definitions/MaintainLabelREQ'
import DrainageRemindParam from './params/DrainageRemindParam'
import DrainageCustomerSettingBO from './definitions/DrainageCustomerSettingBO'
import DrainageDelParam from './params/DrainageDelParam'

export class DrainageApi {

  /**
   * 引流列表
   *
   * @param { DrainagePageParam } params
   * @reutrn { Promise<Page<CustomerDrainagePageBO>> }
   */
  public static page(
    params: DrainagePageParam,
    config?: AxiosRequestConfig): Promise<Page<CustomerDrainagePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信内部开发应用签名授权配置
   *
   * @param { DrainageAgentSignatureParam } params
   * @reutrn { Promise<H5SignatureConfigBO> }
   */
  public static agentSignature(
    params: DrainageAgentSignatureParam,
    config?: AxiosRequestConfig): Promise<H5SignatureConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/agent/signature`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 分配客户 （当列表中staffId为空才可以调用）
   *
   * @param { DistributionCustomerREQ } data
   * @reutrn { Promise<void> }
   */
  public static distribution(
    data: DistributionCustomerREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/distribution`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 模版导出
   *
   * @reutrn { Promise<void> }
   */
  public static out(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/excel/out`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信h5获取要添加的客户电话
   *
   * @param { DrainageWxH5CustomerDrainageParam } params
   * @reutrn { Promise<WxH5CustomerDrainageBO[]> }
   */
  public static wxH5CustomerDrainage(
    params: DrainageWxH5CustomerDrainageParam,
    config?: AxiosRequestConfig): Promise<WxH5CustomerDrainageBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/h5/customer_phone`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * excel文件导入
   *
   * @param { FormData } data
   * @reutrn { Promise<string> }
   */
  public static addUser(
    data: FormData,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/import`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 维护导入的客户标签
   *
   * @param { MaintainLabelREQ } data
   * @reutrn { Promise<void> }
   */
  public static maintainLabel(
    data: MaintainLabelREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/label`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 提醒
   *
   * @param { DrainageRemindParam } data
   * @reutrn { Promise<void> }
   */
  public static remind(
    data: DrainageRemindParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/remind/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置详情
   *
   * @reutrn { Promise<DrainageCustomerSettingBO> }
   */
  public static settingDetail(config?: AxiosRequestConfig): Promise<DrainageCustomerSettingBO> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/setting`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改设置详情
   *
   * @param { DrainageCustomerSettingBO } data
   * @reutrn { Promise<void> }
   */
  public static saveOrUpdate(
    data: DrainageCustomerSettingBO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/setting`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 超时通知
   *
   * @reutrn { Promise<void> }
   */
  public static timeOutNoticeRemind(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/time_out/notice`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 预约通知
   *
   * @reutrn { Promise<void> }
   */
  public static timingNotice(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/timing_notice`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除
   *
   * @param { DrainageDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: DrainageDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/drainage/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
