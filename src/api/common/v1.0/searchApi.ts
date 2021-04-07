import axios, { AxiosRequestConfig } from 'axios'
import DepartmentTreeBO from './definitions/DepartmentTreeBO'
import OemLinkConfigBO from './definitions/OemLinkConfigBO'
import RoleListBO from './definitions/RoleListBO'
import SearchStaffListBO from './definitions/SearchStaffListBO'
import SearchGetLoginConfigParam from './params/SearchGetLoginConfigParam'
import OemLoginConfigBO from './definitions/OemLoginConfigBO'

export class SearchApi {

  /**
   * 查询部门树(会话留存专用)
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static boundWx(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/bound_wx/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询员工所在部门集合
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static getStaffInDepartments(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/departments/by_staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业下的所有员工列表
   *
   * @reutrn { Promise<DepartmentTreeBO> }
   */
  public static staffList(config?: AxiosRequestConfig): Promise<DepartmentTreeBO> {
    return axios(Object.assign({
      url: `/common/v1.0/search/enterprise_staffs`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查看联系我们
   *
   * @reutrn { Promise<OemLinkConfigBO> }
   */
  public static getConfig(config?: AxiosRequestConfig): Promise<OemLinkConfigBO> {
    return axios(Object.assign({
      url: `/common/v1.0/search/get/linkman`,
      method: 'post',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 部门树列表
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static list(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/list/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 下拉框获取所有角色列表
   *
   * @reutrn { Promise<RoleListBO[]> }
   */
  public static listRole(config?: AxiosRequestConfig): Promise<RoleListBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/list/role`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 下拉框获取所有员工列表
   *
   * @reutrn { Promise<SearchStaffListBO[]> }
   */
  public static listStaff(config?: AxiosRequestConfig): Promise<SearchStaffListBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/list/staff`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询部门树(只显示绑定了企业微信的员工且状态为已激活)
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static departmentTreeWithWxStaff(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/list_wx/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录页信息
   *
   * @param { SearchGetLoginConfigParam } params
   * @reutrn { Promise<OemLoginConfigBO> }
   */
  public static getLoginConfig(
    params: SearchGetLoginConfigParam,
    config?: AxiosRequestConfig): Promise<OemLoginConfigBO> {
    return axios(Object.assign({
      url: `/common/v1.0/search/login_config/${params.domain}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询部门树(潜客运营者)
   *
   * @reutrn { Promise<DepartmentTreeBO[]> }
   */
  public static synchronousDepartment(config?: AxiosRequestConfig): Promise<DepartmentTreeBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/search/sync_wx/department`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 验证是否安装企业微信
   *
   * @reutrn { Promise<number> }
   */
  public static wxAuthJudge(config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/common/v1.0/search/wx/judge`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

}
