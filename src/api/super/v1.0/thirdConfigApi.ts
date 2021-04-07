import axios, { AxiosRequestConfig } from 'axios'
import AddThirdConfigREQ from './definitions/AddThirdConfigREQ'
import PlatformConfigurationBO from './definitions/PlatformConfigurationBO'
import SettingMpREQ from './definitions/SettingMpREQ'
import SettingWxOpenBO from './definitions/SettingWxOpenBO'
import ThirdConfigWxOpenSettingDetailParam from './params/ThirdConfigWxOpenSettingDetailParam'
import ThirdConfigGetParam from './params/ThirdConfigGetParam'
import ThirdConfigBO from './definitions/ThirdConfigBO'

export class ThirdConfigApi {

  /**
   * 配置(新增、修改)企业微信第三方应用
   *
   * @param { AddThirdConfigREQ } data
   * @reutrn { Promise<PlatformConfigurationBO> }
   */
  public static saveConfig(
    data: AddThirdConfigREQ,
    config?: AxiosRequestConfig): Promise<PlatformConfigurationBO> {
    return axios(Object.assign({
      url: `/super/v1.0/third_config`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 配置微信第三方
   *
   * @param { SettingMpREQ } data
   * @reutrn { Promise<SettingWxOpenBO> }
   */
  public static settingWxOpen(
    data: SettingMpREQ,
    config?: AxiosRequestConfig): Promise<SettingWxOpenBO> {
    return axios(Object.assign({
      url: `/super/v1.0/third_config/setting/wx_open`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 域名校验-文件上传
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static upload(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/super/v1.0/third_config/upload`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取微信第三方配置详情
   *
   * @param { ThirdConfigWxOpenSettingDetailParam } params
   * @reutrn { Promise<SettingWxOpenBO> }
   */
  public static wxOpenSettingDetail(
    params: ThirdConfigWxOpenSettingDetailParam,
    config?: AxiosRequestConfig): Promise<SettingWxOpenBO> {
    return axios(Object.assign({
      url: `/super/v1.0/third_config/wx_open/setting/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取服务商配置详情
   *
   * @param { ThirdConfigGetParam } params
   * @reutrn { Promise<ThirdConfigBO> }
   */
  public static get(
    params: ThirdConfigGetParam,
    config?: AxiosRequestConfig): Promise<ThirdConfigBO> {
    return axios(Object.assign({
      url: `/super/v1.0/third_config/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
