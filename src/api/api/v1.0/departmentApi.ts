import axios, { AxiosRequestConfig } from 'axios'
import DepartmentTreeBO from './definitions/DepartmentTreeBO'
import DepartmentAddREQ from './definitions/DepartmentAddREQ'
import DepartmentUpdateREQ from './definitions/DepartmentUpdateREQ'
import DepartmentUpdateHeadREQ from './definitions/DepartmentUpdateHeadREQ'
import DepartmentGetDepartmentStaffParam from './params/DepartmentGetDepartmentStaffParam'
import DepartmentStaffBO from './definitions/DepartmentStaffBO'
import DepartmentDelParam from './params/DepartmentDelParam'

export class DepartmentApi {

  /**
   * 部门树列表
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static list(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增部门
   *
   * @param { DepartmentAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: DepartmentAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/department`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改部门名称
   *
   * @param { DepartmentUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: DepartmentUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/department`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置部门负责人
   *
   * @param { DepartmentUpdateHeadREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateHead(
    data: DepartmentUpdateHeadREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/department/head`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 部门对应的员工下拉列表
   *
   * @param { DepartmentGetDepartmentStaffParam } params
   * @reutrn { Promise<DepartmentStaffBO[]> }
   */
  public static getDepartmentStaff(
    params: DepartmentGetDepartmentStaffParam,
    config?: AxiosRequestConfig): Promise<DepartmentStaffBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/department/staff/list/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除部门信息
   *
   * @param { DepartmentDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: DepartmentDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/department/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
