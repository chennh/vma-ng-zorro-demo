import axios, { AxiosRequestConfig } from 'axios'
import ContentViewLogReq from './definitions/ContentViewLogReq'
import ContentNoticeLogDTO from './definitions/ContentNoticeLogDTO'

export class WsApi {

  /**
   * saveLog
   *
   * @param { ContentViewLogReq } data
   * @reutrn { Promise<void> }
   */
  public static saveLog(
    data: ContentViewLogReq,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ws/save_log`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * saveMsg
   *
   * @param { ContentNoticeLogDTO } data
   * @reutrn { Promise<void> }
   */
  public static saveMsg(
    data: ContentNoticeLogDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ws/save_msg`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * getStaffId
   *
   * @reutrn { Promise<number> }
   */
  public static getStaffId(config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/common/v1.0/ws/staff_id`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

}
