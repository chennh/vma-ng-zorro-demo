import axios, { AxiosRequestConfig } from 'axios'
import QrcodestaffcodePageParam from './params/QrcodestaffcodePageParam'
import Page from './definitions/Page'
import StaffCodePageBO from './definitions/StaffCodePageBO'
import AddQrcodeStaffCodeDTO from './definitions/AddQrcodeStaffCodeDTO'
import UpdateQrcodeStaffCodeDTO from './definitions/UpdateQrcodeStaffCodeDTO'
import QrcodestaffcodeDetailParam from './params/QrcodestaffcodeDetailParam'
import QrcodeStaffCodeDetailsDTO from './definitions/QrcodeStaffCodeDetailsDTO'
import QrcodestaffcodeDelParam from './params/QrcodestaffcodeDelParam'

export class QrcodestaffcodeApi {

  /**
   * 获取分页
   *
   * @param { QrcodestaffcodePageParam } params
   * @reutrn { Promise<Page<StaffCodePageBO>> }
   */
  public static page(
    params: QrcodestaffcodePageParam,
    config?: AxiosRequestConfig): Promise<Page<StaffCodePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增
   *
   * @param { AddQrcodeStaffCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddQrcodeStaffCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑
   *
   * @param { UpdateQrcodeStaffCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateQrcodeStaffCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * updateCodeBySpan
   *
   * @reutrn { Promise<void> }
   */
  public static updateCodeBySpan(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode/code/span`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { QrcodestaffcodeDetailParam } params
   * @reutrn { Promise<QrcodeStaffCodeDetailsDTO> }
   */
  public static detail(
    params: QrcodestaffcodeDetailParam,
    config?: AxiosRequestConfig): Promise<QrcodeStaffCodeDetailsDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除信息
   *
   * @param { QrcodestaffcodeDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: QrcodestaffcodeDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodestaffcode/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
