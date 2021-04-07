import axios, { AxiosRequestConfig } from 'axios'
import CirclePageParam from './params/CirclePageParam'
import Page from './definitions/Page'
import CiclePageBO from './definitions/CiclePageBO'
import AddCircleREQ from './definitions/AddCircleREQ'
import UpdateBackgroundREQ from './definitions/UpdateBackgroundREQ'
import CircleGetH5CircleContentParam from './params/CircleGetH5CircleContentParam'
import H5CircleContentBO from './definitions/H5CircleContentBO'
import CircleGetStaffMessageParam from './params/CircleGetStaffMessageParam'
import CircleStaffMessageBO from './definitions/CircleStaffMessageBO'
import CircleDelCircleParam from './params/CircleDelCircleParam'
import SaveCircleViewLogREQ from './definitions/SaveCircleViewLogREQ'
import CircleCirclePostParam from './params/CircleCirclePostParam'
import ContentStaffRelaBO from './definitions/ContentStaffRelaBO'
import CircleGetParam from './params/CircleGetParam'
import CicleDetailBO from './definitions/CicleDetailBO'
import CircleDelParam from './params/CircleDelParam'

export class CircleApi {

  /**
   * 朋友圈列表
   *
   * @param { CirclePageParam } params
   * @reutrn { Promise<Page<CiclePageBO>> }
   */
  public static page(
    params: CirclePageParam,
    config?: AxiosRequestConfig): Promise<Page<CiclePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/circle`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 添加朋友圈
   *
   * @param { AddCircleREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddCircleREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取员工的朋友圈地址
   *
   * @reutrn { Promise<string> }
   */
  public static getStaffCircleUrl(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/circle/url`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信修改背景图
   *
   * @param { UpdateBackgroundREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateBackground(
    data: UpdateBackgroundREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/h5/background`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信获取员工的朋友圈信息
   *
   * @param { CircleGetH5CircleContentParam } params
   * @reutrn { Promise<Page<H5CircleContentBO>> }
   */
  public static getH5CircleContent(
    params: CircleGetH5CircleContentParam,
    config?: AxiosRequestConfig): Promise<Page<H5CircleContentBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/h5/circle/content`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信朋友圈员工头像信息
   *
   * @param { CircleGetStaffMessageParam } params
   * @reutrn { Promise<CircleStaffMessageBO> }
   */
  public static getStaffMessage(
    params: CircleGetStaffMessageParam,
    config?: AxiosRequestConfig): Promise<CircleStaffMessageBO> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/h5/circle/staff_message/${params.staffId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信删除朋友圈信息
   *
   * @param { CircleDelCircleParam } data
   * @reutrn { Promise<void> }
   */
  public static delCircle(
    data: CircleDelCircleParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/h5/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 心跳
   *
   * @param { SaveCircleViewLogREQ } data
   * @reutrn { Promise<void> }
   */
  public static heartbeat(
    data: SaveCircleViewLogREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/heartbeat`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信 朋友圈海报详情
   *
   * @param { CircleCirclePostParam } params
   * @reutrn { Promise<ContentStaffRelaBO> }
   */
  public static circlePost(
    params: CircleCirclePostParam,
    config?: AxiosRequestConfig): Promise<ContentStaffRelaBO> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/poster/share`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 朋友圈推送
   *
   * @reutrn { Promise<void> }
   */
  public static circlePush(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/push`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 朋友圈详情
   *
   * @param { CircleGetParam } params
   * @reutrn { Promise<CicleDetailBO> }
   */
  public static get(
    params: CircleGetParam,
    config?: AxiosRequestConfig): Promise<CicleDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 管理后台删除朋友圈信息
   *
   * @param { CircleDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: CircleDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/circle/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
