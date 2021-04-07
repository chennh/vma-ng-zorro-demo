import axios, { AxiosRequestConfig } from 'axios'
import ContentStaffCardUpdateByIdREQ from './definitions/ContentStaffCardUpdateByIdREQ'
import ContentStaffRelaDTO from './definitions/ContentStaffRelaDTO'
import StaffcardDetailParam from './params/StaffcardDetailParam'
import ContentStaffCardUpdateREQ from './definitions/ContentStaffCardUpdateREQ'

export class StaffcardApi {

  /**
   * 编辑名片表
   *
   * @param { ContentStaffCardUpdateByIdREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentStaffCardUpdateByIdREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/staffcard`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置是否展示名片
   *
   * @param { ContentStaffRelaDTO } data
   * @reutrn { Promise<void> }
   */
  public static showCard(
    data: ContentStaffRelaDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/staffcard/show_card`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取名片表详情
   *
   * @param { StaffcardDetailParam } params
   * @reutrn { Promise<ContentStaffCardUpdateREQ> }
   */
  public static detail(
    params: StaffcardDetailParam,
    config?: AxiosRequestConfig): Promise<ContentStaffCardUpdateREQ> {
    return axios(Object.assign({
      url: `/common/v1.0/staffcard/${params.cardId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
