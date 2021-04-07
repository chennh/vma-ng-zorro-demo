import axios, { AxiosRequestConfig } from 'axios'
import CustomerAuthGetAuthCustomerInfoParam from './params/CustomerAuthGetAuthCustomerInfoParam'
import AuthUserInfo from './definitions/AuthUserInfo'
import WxAuthREQ from './definitions/WxAuthREQ'
import WxAuthBO from './definitions/WxAuthBO'
import CustomerAuthGetCustomerTokenParam from './params/CustomerAuthGetCustomerTokenParam'
import WxPersonAuthREQ from './definitions/WxPersonAuthREQ'

export class CustomerAuthApi {

  /**
   * 获取登录客户信息
   *
   * @param { CustomerAuthGetAuthCustomerInfoParam } params
   * @reutrn { Promise<AuthUserInfo> }
   */
  public static getAuthCustomerInfo(
    params: CustomerAuthGetAuthCustomerInfoParam,
    config?: AxiosRequestConfig): Promise<AuthUserInfo> {
    return axios(Object.assign({
      url: `/wx/v1.0/customer_auth/customer/message/${params.staffId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 构造网页授权链接
   *
   * @param { WxAuthREQ } data
   * @reutrn { Promise<WxAuthBO> }
   */
  public static wxCustomerAuth(
    data: WxAuthREQ,
    config?: AxiosRequestConfig): Promise<WxAuthBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/customer_auth/url`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取token
   *
   * @param { CustomerAuthGetCustomerTokenParam } params
   * @reutrn { Promise<string> }
   */
  public static getCustomerToken(
    params: CustomerAuthGetCustomerTokenParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/wx/v1.0/customer_auth/user_id/${params.code}/${params.state}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 微信前端静默授权
   *
   * @param { WxPersonAuthREQ } data
   * @reutrn { Promise<string> }
   */
  public static wxauth(
    data: WxPersonAuthREQ,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/wx/v1.0/customer_auth/wx_person`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
