import axios, { AxiosRequestConfig } from 'axios'
import AuthUserInfo from './definitions/AuthUserInfo'
import SignatureREQ from './definitions/SignatureREQ'
import H5SignatureConfigBO from './definitions/H5SignatureConfigBO'
import AddQrcodeCustomerCodeDTO from './definitions/AddQrcodeCustomerCodeDTO'
import AuthGetCustomerCodeParam from './params/AuthGetCustomerCodeParam'
import QrcodeCustomerCodeDetailsBO from './definitions/QrcodeCustomerCodeDetailsBO'
import UpdateQrcodeCustomerCodeDTO from './definitions/UpdateQrcodeCustomerCodeDTO'
import AuthGetCustomerIdParam from './params/AuthGetCustomerIdParam'
import CustomerIdListBO from './definitions/CustomerIdListBO'
import AuthGetAuthTokenParam from './params/AuthGetAuthTokenParam'
import WxAuthUrlREQ from './definitions/WxAuthUrlREQ'
import AuthGetCustomerIdGETParam from './params/AuthGetCustomerIdGETParam'
import GroupIdListBO from './definitions/GroupIdListBO'
import AuthInternalSignatureParam from './params/AuthInternalSignatureParam'
import AuthSignatureParam from './params/AuthSignatureParam'
import AuthWxauthParam from './params/AuthWxauthParam'
import WxAuthBO from './definitions/WxAuthBO'

export class AuthApi {

  /**
   * 获取登录用户信息
   *
   * @reutrn { Promise<AuthUserInfo> }
   */
  public static getAuthUserInfo(config?: AxiosRequestConfig): Promise<AuthUserInfo> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信内部开发应用签名授权配置
   *
   * @param { SignatureREQ } data
   * @reutrn { Promise<H5SignatureConfigBO> }
   */
  public static agentSignature(
    data: SignatureREQ,
    config?: AxiosRequestConfig): Promise<H5SignatureConfigBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/agent/signature`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 生成一客一码
   *
   * @param { AddQrcodeCustomerCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static add(
    data: AddQrcodeCustomerCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/code/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取当前客户一客一码
   *
   * @param { AuthGetCustomerCodeParam } params
   * @reutrn { Promise<QrcodeCustomerCodeDetailsBO> }
   */
  public static getCustomerCode(
    params: AuthGetCustomerCodeParam,
    config?: AxiosRequestConfig): Promise<QrcodeCustomerCodeDetailsBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/code/details`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改一客一码
   *
   * @param { UpdateQrcodeCustomerCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateQrcodeCustomerCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/code/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取当前客户id
   *
   * @param { AuthGetCustomerIdParam } params
   * @reutrn { Promise<CustomerIdListBO> }
   */
  public static getCustomerId(
    params: AuthGetCustomerIdParam,
    config?: AxiosRequestConfig): Promise<CustomerIdListBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/customerId`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * getAuthToken
   *
   * @param { AuthGetAuthTokenParam } params
   * @reutrn { Promise<string> }
   */
  public static getAuthToken(
    params: AuthGetAuthTokenParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/get/auth_token/${params.code}/${params.state}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取素材ID
   *
   * @param { WxAuthUrlREQ } data
   * @reutrn { Promise<string> }
   */
  public static getFileItem(
    data: WxAuthUrlREQ,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/get/media_id`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取当前群id
   *
   * @param { AuthGetCustomerIdGETParam } params
   * @reutrn { Promise<GroupIdListBO> }
   */
  public static getCustomerIdGET(
    params: AuthGetCustomerIdGETParam,
    config?: AxiosRequestConfig): Promise<GroupIdListBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/groupId`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信内部签名授权配置
   *
   * @param { AuthInternalSignatureParam } params
   * @reutrn { Promise<H5SignatureConfigBO> }
   */
  public static internalSignature(
    params: AuthInternalSignatureParam,
    config?: AxiosRequestConfig): Promise<H5SignatureConfigBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/internal/signature`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * h5签名授权配置
   *
   * @param { AuthSignatureParam } params
   * @reutrn { Promise<H5SignatureConfigBO> }
   */
  public static signature(
    params: AuthSignatureParam,
    config?: AxiosRequestConfig): Promise<H5SignatureConfigBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/signature`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 构造网页授权链接
   *
   * @param { AuthWxauthParam } params
   * @reutrn { Promise<WxAuthBO> }
   */
  public static wxauth(
    params: AuthWxauthParam,
    config?: AxiosRequestConfig): Promise<WxAuthBO> {
    return axios(Object.assign({
      url: `/wx/v1.0/auth/url`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
