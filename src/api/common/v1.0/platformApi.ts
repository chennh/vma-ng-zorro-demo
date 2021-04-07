import axios, { AxiosRequestConfig } from 'axios'
import EncryptionBO from './definitions/EncryptionBO'
import PlatLoginREQ from './definitions/PlatLoginREQ'
import LoginBO from './definitions/LoginBO'
import UpdatePasswordREQ from './definitions/UpdatePasswordREQ'
import VerificationBO from './definitions/VerificationBO'

export class PlatformApi {

  /**
   * 获取加密串
   *
   * @reutrn { Promise<EncryptionBO> }
   */
  public static getEncryption(config?: AxiosRequestConfig): Promise<EncryptionBO> {
    return axios(Object.assign({
      url: `/common/v1.0/platform/account/encryption`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 平台登录
   *
   * @param { PlatLoginREQ } data
   * @reutrn { Promise<LoginBO> }
   */
  public static platformLogin(
    data: PlatLoginREQ,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/platform/account/login`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询当前账号信息
   *
   * @reutrn { Promise<LoginBO> }
   */
  public static getAccount(config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/platform/account/message`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改密码
   *
   * @param { UpdatePasswordREQ } data
   * @reutrn { Promise<void> }
   */
  public static updatePassword(
    data: UpdatePasswordREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/platform/account/update/password`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取验证码
   *
   * @reutrn { Promise<VerificationBO> }
   */
  public static getVerificationCode(config?: AxiosRequestConfig): Promise<VerificationBO> {
    return axios(Object.assign({
      url: `/common/v1.0/platform/account/verification`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
