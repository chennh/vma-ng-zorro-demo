import axios, { AxiosRequestConfig } from 'axios'
import PersonalSopPageParam from './params/PersonalSopPageParam'
import Page from './definitions/Page'
import GroupSopPageBO from './definitions/GroupSopPageBO'
import RuleSopAddREQ from './definitions/RuleSopAddREQ'
import GroupSopUpdateREQ from './definitions/GroupSopUpdateREQ'
import PersonalSopDetailParam from './params/PersonalSopDetailParam'
import UpdateRuleSopBO from './definitions/UpdateRuleSopBO'
import PersonalSopDelRuleParam from './params/PersonalSopDelRuleParam'
import PersonalSopGetStaffIdsParam from './params/PersonalSopGetStaffIdsParam'
import SopStaffManageREQ from './definitions/SopStaffManageREQ'
import PersonalSopDelParam from './params/PersonalSopDelParam'
import PersonalSopGetParam from './params/PersonalSopGetParam'
import PersonalSopBO from './definitions/PersonalSopBO'

export class PersonalSopApi {

  /**
   * 个人sop列表
   *
   * @param { PersonalSopPageParam } params
   * @reutrn { Promise<Page<GroupSopPageBO>> }
   */
  public static page(
    params: PersonalSopPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupSopPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增个人sop
   *
   * @param { RuleSopAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: RuleSopAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑个人sop
   *
   * @param { GroupSopUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: GroupSopUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改页面详情
   *
   * @param { PersonalSopDetailParam } params
   * @reutrn { Promise<UpdateRuleSopBO> }
   */
  public static detail(
    params: PersonalSopDetailParam,
    config?: AxiosRequestConfig): Promise<UpdateRuleSopBO> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/detail/${params.ruleId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除规则
   *
   * @param { PersonalSopDelRuleParam } data
   * @reutrn { Promise<void> }
   */
  public static delRule(
    data: PersonalSopDelRuleParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/rule/${data.ruleId}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 员工ID集合
   *
   * @param { PersonalSopGetStaffIdsParam } params
   * @reutrn { Promise<number[]> }
   */
  public static getStaffIds(
    params: PersonalSopGetStaffIdsParam,
    config?: AxiosRequestConfig): Promise<number[]> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/staff/${params.ruleId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * sop员工管理
   *
   * @param { SopStaffManageREQ } data
   * @reutrn { Promise<void> }
   */
  public static sopStaffManage(
    data: SopStaffManageREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/staff_manage`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除个人sop信息
   *
   * @param { PersonalSopDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: PersonalSopDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取个人sop规则详情
   *
   * @param { PersonalSopGetParam } params
   * @reutrn { Promise<PersonalSopBO> }
   */
  public static get(
    params: PersonalSopGetParam,
    config?: AxiosRequestConfig): Promise<PersonalSopBO> {
    return axios(Object.assign({
      url: `/api/v1.0/personal_sop/${params.ruleId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
