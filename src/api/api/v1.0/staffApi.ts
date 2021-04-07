import axios, { AxiosRequestConfig } from 'axios'
import StaffPageParam from './params/StaffPageParam'
import Page from './definitions/Page'
import StaffPageBO from './definitions/StaffPageBO'
import AddStaffREQ from './definitions/AddStaffREQ'
import UpdateStaffREQ from './definitions/UpdateStaffREQ'
import BatchDeleteStaffREQ from './definitions/BatchDeleteStaffREQ'
import ChangeEnterpriseREQ from './definitions/ChangeEnterpriseREQ'
import UpdateStaffDepartmentREQ from './definitions/UpdateStaffDepartmentREQ'
import H5AddStaffREQ from './definitions/H5AddStaffREQ'
import RelevanceREQ from './definitions/RelevanceREQ'
import UpdateStatusREQ from './definitions/UpdateStatusREQ'
import StaffUseNumBO from './definitions/StaffUseNumBO'
import StaffGetWechatUserParam from './params/StaffGetWechatUserParam'
import WxUserBO from './definitions/WxUserBO'
import StaffGetParam from './params/StaffGetParam'
import StaffDetailBO from './definitions/StaffDetailBO'

export class StaffApi {

  /**
   * 查询员工列表
   *
   * @param { StaffPageParam } params
   * @reutrn { Promise<Page<StaffPageBO>> }
   */
  public static page(
    params: StaffPageParam,
    config?: AxiosRequestConfig): Promise<Page<StaffPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/staff`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 添加员工
   *
   * @param { AddStaffREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddStaffREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 更新员工账号信息
   *
   * @param { UpdateStaffREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateStaffREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 批量删除员工
   *
   * @param { BatchDeleteStaffREQ } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: BatchDeleteStaffREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 移交企业
   *
   * @param { ChangeEnterpriseREQ } data
   * @reutrn { Promise<void> }
   */
  public static changeEnterprise(
    data: ChangeEnterpriseREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/change/enterprise`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置员工部门
   *
   * @param { UpdateStaffDepartmentREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateDepartment(
    data: UpdateStaffDepartmentREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/department`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * h5添加员工
   *
   * @param { H5AddStaffREQ } data
   * @reutrn { Promise<void> }
   */
  public static h5Save(
    data: H5AddStaffREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/h5`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 邀请二维码
   *
   * @reutrn { Promise<string> }
   */
  public static getInvitationUrl(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/invitation`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 手动关联企业微信
   *
   * @param { RelevanceREQ } data
   * @reutrn { Promise<void> }
   */
  public static relevance(
    data: RelevanceREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/relevance`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 启用禁用
   *
   * @param { UpdateStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: UpdateStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 员工可用数量统计
   *
   * @reutrn { Promise<StaffUseNumBO> }
   */
  public static statisticalUserNum(config?: AxiosRequestConfig): Promise<StaffUseNumBO> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/use_num`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 根据电话查询企业微信ID
   *
   * @param { StaffGetWechatUserParam } params
   * @reutrn { Promise<WxUserBO> }
   */
  public static getWechatUser(
    params: StaffGetWechatUserParam,
    config?: AxiosRequestConfig): Promise<WxUserBO> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/wechat_id`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 员工详情
   *
   * @param { StaffGetParam } params
   * @reutrn { Promise<StaffDetailBO> }
   */
  public static get(
    params: StaffGetParam,
    config?: AxiosRequestConfig): Promise<StaffDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/staff/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
