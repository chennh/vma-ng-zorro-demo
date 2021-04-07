import axios, { AxiosRequestConfig } from 'axios'
import PingAnPingAnDataLoginParam from './params/PingAnPingAnDataLoginParam'
import LoginBO from './definitions/LoginBO'
import PingAnPingAnDataLoginHEADParam from './params/PingAnPingAnDataLoginHEADParam'
import PingAnPingAnDataLoginPOSTParam from './params/PingAnPingAnDataLoginPOSTParam'
import PingAnPingAnDataLoginPUTParam from './params/PingAnPingAnDataLoginPUTParam'
import PingAnPingAnDataLoginDELETEParam from './params/PingAnPingAnDataLoginDELETEParam'
import PingAnPingAnDataLoginOPTIONSParam from './params/PingAnPingAnDataLoginOPTIONSParam'
import PingAnPingAnDataLoginPATCHParam from './params/PingAnPingAnDataLoginPATCHParam'
import PingAnPingAnLoginParam from './params/PingAnPingAnLoginParam'
import PingAnPingAnLoginHEADParam from './params/PingAnPingAnLoginHEADParam'
import PingAnPingAnLoginPOSTParam from './params/PingAnPingAnLoginPOSTParam'
import PingAnPingAnLoginPUTParam from './params/PingAnPingAnLoginPUTParam'
import PingAnPingAnLoginDELETEParam from './params/PingAnPingAnLoginDELETEParam'
import PingAnPingAnLoginOPTIONSParam from './params/PingAnPingAnLoginOPTIONSParam'
import PingAnPingAnLoginPATCHParam from './params/PingAnPingAnLoginPATCHParam'

export class PingAnApi {

  /**
   * 部门模版导出
   *
   * @reutrn { Promise<void> }
   */
  public static departmentOut(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/department/excel/out`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 导入部门
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static importDepartment(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/department/import`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginParam } params
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLogin(
    params: PingAnPingAnDataLoginParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginHEADParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginHEAD(
    data: PingAnPingAnDataLoginHEADParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'head',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginPOSTParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginPOST(
    data: PingAnPingAnDataLoginPOSTParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginPUTParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginPUT(
    data: PingAnPingAnDataLoginPUTParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'put',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginDELETEParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginDELETE(
    data: PingAnPingAnDataLoginDELETEParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'delete',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginOPTIONSParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginOPTIONS(
    data: PingAnPingAnDataLoginOPTIONSParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'options',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 登录
   *
   * @param { PingAnPingAnDataLoginPATCHParam } data
   * @reutrn { Promise<LoginBO> }
   */
  public static pingAnDataLoginPATCH(
    data: PingAnPingAnDataLoginPATCHParam,
    config?: AxiosRequestConfig): Promise<LoginBO> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/login`,
      method: 'patch',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginParam } params
   * @reutrn { Promise<void> }
   */
  public static pingAnLogin(
    params: PingAnPingAnLoginParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginHEADParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginHEAD(
    data: PingAnPingAnLoginHEADParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'head',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginPOSTParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginPOST(
    data: PingAnPingAnLoginPOSTParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginPUTParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginPUT(
    data: PingAnPingAnLoginPUTParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginDELETEParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginDELETE(
    data: PingAnPingAnLoginDELETEParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginOPTIONSParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginOPTIONS(
    data: PingAnPingAnLoginOPTIONSParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'options',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 回调登录
   *
   * @param { PingAnPingAnLoginPATCHParam } data
   * @reutrn { Promise<void> }
   */
  public static pingAnLoginPATCH(
    data: PingAnPingAnLoginPATCHParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/role/login`,
      method: 'patch',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 员工模版导出
   *
   * @reutrn { Promise<void> }
   */
  public static staffOut(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/staff/excel/out`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 导入员工
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static importStaff(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/common/v1.0/ping_an/account/staff/import`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
