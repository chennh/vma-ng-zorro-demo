import axios, { AxiosRequestConfig } from 'axios'
import CustomerSendMsgInfoPageParam from './params/CustomerSendMsgInfoPageParam'
import Page from './definitions/Page'
import CustomerSendMsgInfoPageBO from './definitions/CustomerSendMsgInfoPageBO'
import CustomerSendMsgInfoAddREQ from './definitions/CustomerSendMsgInfoAddREQ'
import CustomerSendMsgInfoDetailCustomerParam from './params/CustomerSendMsgInfoDetailCustomerParam'
import CustomerSendMsgDetailQueryBO from './definitions/CustomerSendMsgDetailQueryBO'
import CustomerSendMsgInfoDetailStaffParam from './params/CustomerSendMsgInfoDetailStaffParam'
import CustomerSendMsgStaffQueryBO from './definitions/CustomerSendMsgStaffQueryBO'
import CustomerSendMsgInfoNoticeParam from './params/CustomerSendMsgInfoNoticeParam'
import CustomerSendMsgInfoResendParam from './params/CustomerSendMsgInfoResendParam'
import CustomerSendMsgInfoDetailParam from './params/CustomerSendMsgInfoDetailParam'
import CustomerSendMsgInfoDetailBO from './definitions/CustomerSendMsgInfoDetailBO'
import CustomerSendMsgInfoDelParam from './params/CustomerSendMsgInfoDelParam'

export class CustomerSendMsgInfoApi {

  /**
   * 获取客户群发分页
   *
   * @param { CustomerSendMsgInfoPageParam } params
   * @reutrn { Promise<Page<CustomerSendMsgInfoPageBO>> }
   */
  public static page(
    params: CustomerSendMsgInfoPageParam,
    config?: AxiosRequestConfig): Promise<Page<CustomerSendMsgInfoPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增客户群发
   *
   * @param { CustomerSendMsgInfoAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: CustomerSendMsgInfoAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取客户群发详情-客户详情
   *
   * @param { CustomerSendMsgInfoDetailCustomerParam } params
   * @reutrn { Promise<CustomerSendMsgDetailQueryBO[]> }
   */
  public static detailCustomer(
    params: CustomerSendMsgInfoDetailCustomerParam,
    config?: AxiosRequestConfig): Promise<CustomerSendMsgDetailQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/detail_customer`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取客户群发详情-员工详情
   *
   * @param { CustomerSendMsgInfoDetailStaffParam } params
   * @reutrn { Promise<CustomerSendMsgStaffQueryBO[]> }
   */
  public static detailStaff(
    params: CustomerSendMsgInfoDetailStaffParam,
    config?: AxiosRequestConfig): Promise<CustomerSendMsgStaffQueryBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/detail_staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发送提醒消息
   *
   * @param { CustomerSendMsgInfoNoticeParam } params
   * @reutrn { Promise<void> }
   */
  public static notice(
    params: CustomerSendMsgInfoNoticeParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/notice`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 重新发送
   *
   * @param { CustomerSendMsgInfoResendParam } params
   * @reutrn { Promise<void> }
   */
  public static resend(
    params: CustomerSendMsgInfoResendParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/resend/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取客户群发详情
   *
   * @param { CustomerSendMsgInfoDetailParam } params
   * @reutrn { Promise<CustomerSendMsgInfoDetailBO> }
   */
  public static detail(
    params: CustomerSendMsgInfoDetailParam,
    config?: AxiosRequestConfig): Promise<CustomerSendMsgInfoDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除客户群发
   *
   * @param { CustomerSendMsgInfoDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: CustomerSendMsgInfoDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer_send_msg_info/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
