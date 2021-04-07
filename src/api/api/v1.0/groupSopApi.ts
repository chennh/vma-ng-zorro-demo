import axios, { AxiosRequestConfig } from 'axios'
import GroupSopPageParam from './params/GroupSopPageParam'
import Page from './definitions/Page'
import GroupSopPageBO from './definitions/GroupSopPageBO'
import RuleSopAddREQ from './definitions/RuleSopAddREQ'
import GroupSopUpdateREQ from './definitions/GroupSopUpdateREQ'
import GroupSopDetailParam from './params/GroupSopDetailParam'
import UpdateRuleSopBO from './definitions/UpdateRuleSopBO'
import GroupSopGetGroupChatManageParam from './params/GroupSopGetGroupChatManageParam'
import GroupSopManageBO from './definitions/GroupSopManageBO'
import GroupSopPushDetailParam from './params/GroupSopPushDetailParam'
import PushDetailBO from './definitions/PushDetailBO'
import H5ChangeStatusREQ from './definitions/H5ChangeStatusREQ'
import JoinRuleREQ from './definitions/JoinRuleREQ'
import RemoveRuleREQ from './definitions/RemoveRuleREQ'
import GroupSopDelRuleParam from './params/GroupSopDelRuleParam'
import UpdateRuleNameREQ from './definitions/UpdateRuleNameREQ'
import GroupSopSidebarPersonSopPageParam from './params/GroupSopSidebarPersonSopPageParam'
import SidebarPersonalSopBO from './definitions/SidebarPersonalSopBO'
import GroupSopStatusREQ from './definitions/GroupSopStatusREQ'
import GroupSopDelParam from './params/GroupSopDelParam'
import GroupSopGetParam from './params/GroupSopGetParam'
import GroupSopBO from './definitions/GroupSopBO'

export class GroupSopApi {

  /**
   * 获取群sop分页
   *
   * @param { GroupSopPageParam } params
   * @reutrn { Promise<Page<GroupSopPageBO>> }
   */
  public static page(
    params: GroupSopPageParam,
    config?: AxiosRequestConfig): Promise<Page<GroupSopPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增群sop
   *
   * @param { RuleSopAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: RuleSopAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑群sop
   *
   * @param { GroupSopUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: GroupSopUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 详情修改页面
   *
   * @param { GroupSopDetailParam } params
   * @reutrn { Promise<UpdateRuleSopBO> }
   */
  public static detail(
    params: GroupSopDetailParam,
    config?: AxiosRequestConfig): Promise<UpdateRuleSopBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/detail/${params.ruleId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 群管理（群列表）
   *
   * @param { GroupSopGetGroupChatManageParam } params
   * @reutrn { Promise<GroupSopManageBO[]> }
   */
  public static getGroupChatManage(
    params: GroupSopGetGroupChatManageParam,
    config?: AxiosRequestConfig): Promise<GroupSopManageBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/group_chat`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信推送详情
   *
   * @param { GroupSopPushDetailParam } params
   * @reutrn { Promise<PushDetailBO> }
   */
  public static pushDetail(
    params: GroupSopPushDetailParam,
    config?: AxiosRequestConfig): Promise<PushDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/h5_detail`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改为已完成
   *
   * @param { H5ChangeStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static changeStatus(
    data: H5ChangeStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/h5_status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 群加入规则
   *
   * @param { JoinRuleREQ } data
   * @reutrn { Promise<void> }
   */
  public static joinRule(
    data: JoinRuleREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/join_sop`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 新人提醒推送
   *
   * @reutrn { Promise<void> }
   */
  public static newbieRemind(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/newbie/timing`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 正式环境优化
   *
   * @reutrn { Promise<void> }
   */
  public static optimization(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/optimization`,
      method: 'put',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 移除规则
   *
   * @param { RemoveRuleREQ } data
   * @reutrn { Promise<void> }
   */
  public static removeRule(
    data: RemoveRuleREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/remove_sop`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 群删除规则
   *
   * @param { GroupSopDelRuleParam } data
   * @reutrn { Promise<void> }
   */
  public static delRule(
    data: GroupSopDelRuleParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/rule/${data.ruleId}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改规则名称
   *
   * @param { UpdateRuleNameREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateRuleName(
    data: UpdateRuleNameREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/rule_name`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 企业微信侧边栏sop列表
   *
   * @param { GroupSopSidebarPersonSopPageParam } params
   * @reutrn { Promise<Page<SidebarPersonalSopBO>> }
   */
  public static sidebarPersonSopPage(
    params: GroupSopSidebarPersonSopPageParam,
    config?: AxiosRequestConfig): Promise<Page<SidebarPersonalSopBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/sidebar/sop`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改状态（开关）
   *
   * @param { GroupSopStatusREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateStatus(
    data: GroupSopStatusREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/status`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取时间
   *
   * @reutrn { Promise<number> }
   */
  public static getNow(config?: AxiosRequestConfig): Promise<number> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/time`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 推搡
   *
   * @reutrn { Promise<void> }
   */
  public static timing(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/timing`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 删除群sop信息
   *
   * @param { GroupSopDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: GroupSopDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取群sop详情
   *
   * @param { GroupSopGetParam } params
   * @reutrn { Promise<GroupSopBO> }
   */
  public static get(
    params: GroupSopGetParam,
    config?: AxiosRequestConfig): Promise<GroupSopBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_sop/${params.ruleId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
