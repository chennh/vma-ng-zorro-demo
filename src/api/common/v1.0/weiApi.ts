import axios, { AxiosRequestConfig } from 'axios'

export class WeiApi {

  /**
   * 获取用户ID
   *
   * @reutrn { Promise<void> }
   */
  public static getUserId(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/wei/callback/get/user_id`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

}
