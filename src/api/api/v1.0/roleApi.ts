import axios, { AxiosRequestConfig } from 'axios'
import RolePageParam from './params/RolePageParam'
import Page from './definitions/Page'
import RbacRole from './definitions/RbacRole'
import AddRoleREQ from './definitions/AddRoleREQ'
import UpdateRoleREQ from './definitions/UpdateRoleREQ'
import RoleResourceBO from './definitions/RoleResourceBO'
import RoleDelParam from './params/RoleDelParam'
import RoleGetParam from './params/RoleGetParam'
import RoleDetailBO from './definitions/RoleDetailBO'

export class RoleApi {

  /**
   * 获取角色列表
   *
   * @param { RolePageParam } params
   * @reutrn { Promise<Page<RbacRole>> }
   */
  public static page(
    params: RolePageParam,
    config?: AxiosRequestConfig): Promise<Page<RbacRole>> {
    return axios(Object.assign({
      url: `/api/v1.0/role`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增角色表
   *
   * @param { AddRoleREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: AddRoleREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/role`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 更新角色权限
   *
   * @param { UpdateRoleREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateRoleREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/role`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询角色对应的所有菜单、功能权限
   *
   * @reutrn { Promise<RoleResourceBO> }
   */
  public static listMenu(config?: AxiosRequestConfig): Promise<RoleResourceBO> {
    return axios(Object.assign({
      url: `/api/v1.0/role/list/menu`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除角色表信息
   *
   * @param { RoleDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: RoleDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/role/${data.ids}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 详情接口
   *
   * @param { RoleGetParam } params
   * @reutrn { Promise<RoleDetailBO> }
   */
  public static get(
    params: RoleGetParam,
    config?: AxiosRequestConfig): Promise<RoleDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/role/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
