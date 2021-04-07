import axios, { AxiosRequestConfig } from 'axios'
import NoticeLogDTO from './definitions/NoticeLogDTO'
import Page from './definitions/Page'
import NoticeLogBO from './definitions/NoticeLogBO'
import UpdateStatusReq from './definitions/UpdateStatusReq'
import UnReadCountBO from './definitions/UnReadCountBO'
import ViewLogDTO from './definitions/ViewLogDTO'
import ViewLogBO from './definitions/ViewLogBO'

export class NoticeApi {

  /**
   * 客户通知分页
   *
   * @param { NoticeLogDTO } data
   * @reutrn { Promise<Page<NoticeLogBO>> }
   */
  public static noticePage(
    data: NoticeLogDTO,
    config?: AxiosRequestConfig): Promise<Page<NoticeLogBO>> {
    return axios(Object.assign({
      url: `/common/v1.0/notice/noticePage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 设置已读
   *
   * @param { UpdateStatusReq } data
   * @reutrn { Promise<void> }
   */
  public static read(
    data: UpdateStatusReq,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/notice/set_read`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取未读数
   *
   * @reutrn { Promise<UnReadCountBO> }
   */
  public static readGET(config?: AxiosRequestConfig): Promise<UnReadCountBO> {
    return axios(Object.assign({
      url: `/common/v1.0/notice/un_read`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 客户动态分页
   *
   * @param { ViewLogDTO } data
   * @reutrn { Promise<Page<ViewLogBO>> }
   */
  public static viewPage(
    data: ViewLogDTO,
    config?: AxiosRequestConfig): Promise<Page<ViewLogBO>> {
    return axios(Object.assign({
      url: `/common/v1.0/notice/viewPage`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

}
