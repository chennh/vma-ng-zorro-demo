import axios, { AxiosRequestConfig } from 'axios'

export class FileApi {

  /**
   * 微信域名校验文件上传(1.公众号 2.小程序 3.第三方应用 4.网页应用)
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static upload(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/file/domain_check`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 域名校验-文件上传
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static uploadPOST(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/file/upload`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
