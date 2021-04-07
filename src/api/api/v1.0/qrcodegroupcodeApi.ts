import axios, { AxiosRequestConfig } from 'axios'
import QrcodegroupcodePageParam from './params/QrcodegroupcodePageParam'
import Page from './definitions/Page'
import GroupCodePageBO from './definitions/GroupCodePageBO'
import AddQrcodeGroupCodeDTO from './definitions/AddQrcodeGroupCodeDTO'
import UpdateQrcodeGroupCodeDTO from './definitions/UpdateQrcodeGroupCodeDTO'
import AddQrcodeGroupDetailsDTO from './definitions/AddQrcodeGroupDetailsDTO'
import QrcodegroupcodeGroupListParam from './params/QrcodegroupcodeGroupListParam'
import QrcodeGroupDetails from './definitions/QrcodeGroupDetails'
import QrcodegroupcodeQrcodeParam from './params/QrcodegroupcodeQrcodeParam'
import UpdateQrcodeGroupDetailsDTO from './definitions/UpdateQrcodeGroupDetailsDTO'
import QrcodegroupcodeDetailParam from './params/QrcodegroupcodeDetailParam'
import QrcodeGroupCodeDetailsDTO from './definitions/QrcodeGroupCodeDetailsDTO'
import QrcodegroupcodeDelParam from './params/QrcodegroupcodeDelParam'

export class QrcodegroupcodeApi {

  /**
   * 获取分页
   *
   * @param { QrcodegroupcodePageParam } params
   * @reutrn { Promise<Page<GroupCodePageBO>> }
   */
  public static page(
    params: QrcodegroupcodePageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupCodePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增
   *
   * @param { AddQrcodeGroupCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddQrcodeGroupCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑
   *
   * @param { UpdateQrcodeGroupCodeDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateQrcodeGroupCodeDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 新增备用群列表
   *
   * @param { AddQrcodeGroupDetailsDTO } data
   * @reutrn { Promise<void> }
   */
  public static addGroup(
    data: AddQrcodeGroupDetailsDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/group/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取备用群列表
   *
   * @param { QrcodegroupcodeGroupListParam } params
   * @reutrn { Promise<Page<QrcodeGroupDetails>> }
   */
  public static groupList(
    params: QrcodegroupcodeGroupListParam,
    config?: AxiosRequestConfig): Promise<Page<QrcodeGroupDetails>> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/group/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 重定向
   *
   * @param { QrcodegroupcodeQrcodeParam } params
   * @reutrn { Promise<object> }
   */
  public static qrcode(
    params: QrcodegroupcodeQrcodeParam,
    config?: AxiosRequestConfig): Promise<object> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/group/qrcode/${params.codeuuid}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑备用群列表
   *
   * @param { UpdateQrcodeGroupDetailsDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateGroup(
    data: UpdateQrcodeGroupDetailsDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/group/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { QrcodegroupcodeDetailParam } params
   * @reutrn { Promise<QrcodeGroupCodeDetailsDTO> }
   */
  public static detail(
    params: QrcodegroupcodeDetailParam,
    config?: AxiosRequestConfig): Promise<QrcodeGroupCodeDetailsDTO> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除信息
   *
   * @param { QrcodegroupcodeDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: QrcodegroupcodeDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/qrcodegroupcode/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
