import axios, { AxiosRequestConfig } from 'axios'
import AliyunOssTokenBO from './definitions/AliyunOssTokenBO'
import AssumeRoleResponse from './definitions/AssumeRoleResponse'
import CkeditorBO from './definitions/CkeditorBO'
import QiniuTokenBO from './definitions/QiniuTokenBO'
import Base64DTO from './definitions/Base64DTO'
import OssWebFileToQiniuParam from './params/OssWebFileToQiniuParam'
import PinganConfigBO from './definitions/PinganConfigBO'

export class OssApi {

  /**
   * 获取阿里云OSS的STS token
   *
   * @reutrn { Promise<AliyunOssTokenBO<AssumeRoleResponse>> }
   */
  public static getStsToken(config?: AxiosRequestConfig): Promise<AliyunOssTokenBO<AssumeRoleResponse>> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/aliyun/sts/token`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * CKEditor4.4图片上传
   *
   * @param { FormData } data
   * @reutrn { Promise<CkeditorBO> }
   */
  public static uploadForCKEditor4(
    data: FormData,
    config?: AxiosRequestConfig): Promise<CkeditorBO> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/editor4.4`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取七牛地址
   *
   * @reutrn { Promise<QiniuTokenBO> }
   */
  public static getQiNiuAddress(config?: AxiosRequestConfig): Promise<QiniuTokenBO> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/qiniuaddress`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取七牛token
   *
   * @reutrn { Promise<QiniuTokenBO> }
   */
  public static getQiNiuToken(config?: AxiosRequestConfig): Promise<QiniuTokenBO> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/qiniutoken`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * upload
   *
   * @param { FormData } data
   * @reutrn { Promise<string> }
   */
  public static upload(
    data: FormData,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/upload`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * upload/base64
   *
   * @param { Base64DTO } data
   * @reutrn { Promise<string> }
   */
  public static uploadPOST(
    data: Base64DTO,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/upload/base64`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 网络文件转存七牛
   *
   * @param { OssWebFileToQiniuParam } params
   * @reutrn { Promise<string> }
   */
  public static webFileToQiniu(
    params: OssWebFileToQiniuParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/qiniu/webfiletoqiniu`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 图片上传
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static uploadFile(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/upload/file`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 图片上传参数
   *
   * @reutrn { Promise<PinganConfigBO> }
   */
  public static uploadParam(config?: AxiosRequestConfig): Promise<PinganConfigBO> {
    return axios(Object.assign({
      url: `/common/v1.0/oss/upload/param`,
      method: 'post',
      responseType: 'json'
    }, config)) as any
  }

}
