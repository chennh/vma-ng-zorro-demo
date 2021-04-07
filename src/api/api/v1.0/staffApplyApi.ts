import axios, { AxiosRequestConfig } from 'axios'
import StaffApplyPageParam from './params/StaffApplyPageParam'
import Page from './definitions/Page'
import StaffJoinApplyBO from './definitions/StaffJoinApplyBO'
import InvitationJoinREQ from './definitions/InvitationJoinREQ'
import StaffApplyIgnoreParam from './params/StaffApplyIgnoreParam'
import StaffApplyDetailParam from './params/StaffApplyDetailParam'

export class StaffApplyApi {

  /**
   * 获取员工申请表分页
   *
   * @param { StaffApplyPageParam } params
   * @reutrn { Promise<Page<StaffJoinApplyBO>> }
   */
  public static page(
    params: StaffApplyPageParam,
    config?: AxiosRequestConfig): Promise<Page<StaffJoinApplyBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/staff_apply`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增员工申请表
   *
   * @param { InvitationJoinREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: InvitationJoinREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff_apply`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 忽略
   *
   * @param { StaffApplyIgnoreParam } data
   * @reutrn { Promise<void> }
   */
  public static ignore(
    data: StaffApplyIgnoreParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff_apply/ignore/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取员工申请表详情
   *
   * @param { StaffApplyDetailParam } params
   * @reutrn { Promise<StaffJoinApplyBO> }
   */
  public static detail(
    params: StaffApplyDetailParam,
    config?: AxiosRequestConfig): Promise<StaffJoinApplyBO> {
    return axios(Object.assign({
      url: `/api/v1.0/staff_apply/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
