import axios, { AxiosRequestConfig } from 'axios'
import WxEnterpriseGetTempParam from './params/WxEnterpriseGetTempParam'
import File from './definitions/File'
import WxMediaUploadResult from './definitions/WxMediaUploadResult'
import WxCpMessage from './definitions/WxCpMessage'
import WxEnterpriseSignatureParam from './params/WxEnterpriseSignatureParam'
import H5SignatureConfigBO from './definitions/H5SignatureConfigBO'

export class WxEnterpriseApi {

  /**
   * 获取临时文件
   *
   * @param { WxEnterpriseGetTempParam } data
   * @reutrn { Promise<File> }
   */
  public static getTemp(
    data: WxEnterpriseGetTempParam,
    config?: AxiosRequestConfig): Promise<File> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_enterprise/media/download/temp`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 上传图片
   *
   * @param { FormData } data
   * @reutrn { Promise<string> }
   */
  public static uploadImg(
    data: FormData,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_enterprise/media/upload/img`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 上传临时文件
   *
   * @param { FormData } data
   * @reutrn { Promise<WxMediaUploadResult> }
   */
  public static uploadTemp(
    data: FormData,
    config?: AxiosRequestConfig): Promise<WxMediaUploadResult> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_enterprise/media/upload/temp`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 消息发送
   *
   * @param { WxCpMessage } data
   * @reutrn { Promise<void> }
   */
  public static senMessage(
    data: WxCpMessage,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_enterprise/send_message`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * h5签名授权配置
   *
   * @param { WxEnterpriseSignatureParam } params
   * @reutrn { Promise<H5SignatureConfigBO> }
   */
  public static signature(
    params: WxEnterpriseSignatureParam,
    config?: AxiosRequestConfig): Promise<H5SignatureConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_enterprise/signature`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
