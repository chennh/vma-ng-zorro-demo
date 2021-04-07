import axios, { AxiosRequestConfig } from 'axios'
import CustomerRuleBO from './definitions/CustomerRuleBO'
import DownRuleConfigDTO from './definitions/DownRuleConfigDTO'
import FollowerConfigDTO from './definitions/FollowerConfigDTO'
import ConfigGetGroupListParam from './params/ConfigGetGroupListParam'
import GroupConfigBO from './definitions/GroupConfigBO'
import HiddenMobileConfigDTO from './definitions/HiddenMobileConfigDTO'
import PotentialConfigDTO from './definitions/PotentialConfigDTO'

export class ConfigApi {

  /**
   * 获取客户自动流转系统配置
   *
   * @reutrn { Promise<CustomerRuleBO> }
   */
  public static list(config?: AxiosRequestConfig): Promise<CustomerRuleBO> {
    return axios(Object.assign({
      url: `/api/v1.0/config/customer/rule`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 设置回收公海规则
   *
   * @param { DownRuleConfigDTO } data
   * @reutrn { Promise<void> }
   */
  public static setDownRule(
    data: DownRuleConfigDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/config/downrule/set`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置分配规则
   *
   * @param { FollowerConfigDTO } data
   * @reutrn { Promise<void> }
   */
  public static setFollowerRule(
    data: FollowerConfigDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/config/follower/set`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取分组数据
   *
   * @param { ConfigGetGroupListParam } params
   * @reutrn { Promise<GroupConfigBO[]> }
   */
  public static getGroupList(
    params: ConfigGetGroupListParam,
    config?: AxiosRequestConfig): Promise<GroupConfigBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/config/group/data`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取隐号设置
   *
   * @reutrn { Promise<object> }
   */
  public static getHiddenMobile(config?: AxiosRequestConfig): Promise<object> {
    return axios(Object.assign({
      url: `/api/v1.0/config/hidden/data`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 隐号设置
   *
   * @param { HiddenMobileConfigDTO } data
   * @reutrn { Promise<void> }
   */
  public static setHiddenMobile(
    data: HiddenMobileConfigDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/config/hidden/set`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 设置认定潜在客户规则
   *
   * @param { PotentialConfigDTO } data
   * @reutrn { Promise<void> }
   */
  public static setPotentialRule(
    data: PotentialConfigDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/config/potential/set`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
