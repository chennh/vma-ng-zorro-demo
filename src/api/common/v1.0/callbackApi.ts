import axios, { AxiosRequestConfig } from 'axios'

export class CallbackApi {

  /**
   * 永中开放平台回调
   *
   * @reutrn { Promise<void> }
   */
  public static provinceList(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/callback/yozo`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

}
