import axios, { AxiosRequestConfig } from 'axios'
import ExecuteSensitiveWordRecordREQ from './definitions/ExecuteSensitiveWordRecordREQ'
import SensitiveWordGroupAddREQ from './definitions/SensitiveWordGroupAddREQ'
import SensitiveWordGroupUpdateREQ from './definitions/SensitiveWordGroupUpdateREQ'
import SensitiveWordInfoGroupListParam from './params/SensitiveWordInfoGroupListParam'
import SensitiveWordGroupListBO from './definitions/SensitiveWordGroupListBO'
import SensitiveWordInfoGroupDetailParam from './params/SensitiveWordInfoGroupDetailParam'
import SensitiveWordGroupDetailBO from './definitions/SensitiveWordGroupDetailBO'
import SensitiveWordInfoGroupDelParam from './params/SensitiveWordInfoGroupDelParam'
import SensitiveWordInfoPageParam from './params/SensitiveWordInfoPageParam'
import Page from './definitions/Page'
import SensitiveWordInfoPageBO from './definitions/SensitiveWordInfoPageBO'
import SensitiveWordInfoAddREQ from './definitions/SensitiveWordInfoAddREQ'
import SensitiveWordInfoUpdateREQ from './definitions/SensitiveWordInfoUpdateREQ'
import SensitiveWordInfoDetailParam from './params/SensitiveWordInfoDetailParam'
import SensitiveWordInfoDetailBO from './definitions/SensitiveWordInfoDetailBO'
import SensitiveWordInfoDelParam from './params/SensitiveWordInfoDelParam'
import SensitiveWordInfoRecordPageParam from './params/SensitiveWordInfoRecordPageParam'
import SensitiveWordRecordQueryBO from './definitions/SensitiveWordRecordQueryBO'
import SensitiveWordInfoStaffListParam from './params/SensitiveWordInfoStaffListParam'
import StaffListDTO from './definitions/StaffListDTO'

export class SensitiveWordInfoApi {

  /**
   * 处理
   *
   * @param { ExecuteSensitiveWordRecordREQ } data
   * @reutrn { Promise<void> }
   */
  public static execute(
    data: ExecuteSensitiveWordRecordREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/execute`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 新增敏感词监控分组
   *
   * @param { SensitiveWordGroupAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static groupSave(
    data: SensitiveWordGroupAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/group`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑敏感词监控分组
   *
   * @param { SensitiveWordGroupUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static groupUpdate(
    data: SensitiveWordGroupUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/group`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感词监控分组列表
   *
   * @param { SensitiveWordInfoGroupListParam } params
   * @reutrn { Promise<SensitiveWordGroupListBO[]> }
   */
  public static groupList(
    params: SensitiveWordInfoGroupListParam,
    config?: AxiosRequestConfig): Promise<SensitiveWordGroupListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/group/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取敏感词监控分组详情
   *
   * @param { SensitiveWordInfoGroupDetailParam } params
   * @reutrn { Promise<SensitiveWordGroupDetailBO> }
   */
  public static groupDetail(
    params: SensitiveWordInfoGroupDetailParam,
    config?: AxiosRequestConfig): Promise<SensitiveWordGroupDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/group/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除敏感词监控分组
   *
   * @param { SensitiveWordInfoGroupDelParam } data
   * @reutrn { Promise<void> }
   */
  public static groupDel(
    data: SensitiveWordInfoGroupDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/group/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感词监控信息分页
   *
   * @param { SensitiveWordInfoPageParam } params
   * @reutrn { Promise<Page<SensitiveWordInfoPageBO>> }
   */
  public static page(
    params: SensitiveWordInfoPageParam,
    config?: AxiosRequestConfig): Promise<Page<SensitiveWordInfoPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/info`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增敏感词监控信息
   *
   * @param { SensitiveWordInfoAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: SensitiveWordInfoAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/info`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑敏感词监控信息
   *
   * @param { SensitiveWordInfoUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: SensitiveWordInfoUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/info`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感词监控信息详情
   *
   * @param { SensitiveWordInfoDetailParam } params
   * @reutrn { Promise<SensitiveWordInfoDetailBO> }
   */
  public static detail(
    params: SensitiveWordInfoDetailParam,
    config?: AxiosRequestConfig): Promise<SensitiveWordInfoDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除敏感词监控信息
   *
   * @param { SensitiveWordInfoDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: SensitiveWordInfoDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/info/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取敏感词监控信息分页
   *
   * @param { SensitiveWordInfoRecordPageParam } params
   * @reutrn { Promise<Page<SensitiveWordRecordQueryBO>> }
   */
  public static recordPage(
    params: SensitiveWordInfoRecordPageParam,
    config?: AxiosRequestConfig): Promise<Page<SensitiveWordRecordQueryBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/record`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取员工列表
   *
   * @param { SensitiveWordInfoStaffListParam } params
   * @reutrn { Promise<StaffListDTO[]> }
   */
  public static staffList(
    params: SensitiveWordInfoStaffListParam,
    config?: AxiosRequestConfig): Promise<StaffListDTO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/sensitive_word_info/staff/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
