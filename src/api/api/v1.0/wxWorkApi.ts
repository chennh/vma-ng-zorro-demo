import axios, { AxiosRequestConfig } from 'axios'
import UpdateAgentREQ from './definitions/UpdateAgentREQ'
import AgentUrlOuterBO from './definitions/AgentUrlOuterBO'
import PlatformConfiguration from './definitions/PlatformConfiguration'
import AuthMessageBO from './definitions/AuthMessageBO'
import AuthCodeREQ from './definitions/AuthCodeREQ'
import WxWorkChangeStepParam from './params/WxWorkChangeStepParam'
import ChatConfigBO from './definitions/ChatConfigBO'
import CreateWeChatAgentREQ from './definitions/CreateWeChatAgentREQ'
import EventReceiveBO from './definitions/EventReceiveBO'
import SyncParamBO from './definitions/SyncParamBO'
import ChatConfigSecurityBO from './definitions/ChatConfigSecurityBO'
import SetLatenREQ from './definitions/SetLatenREQ'
import AuthStaffNumBO from './definitions/AuthStaffNumBO'
import WxWorkPageParam from './params/WxWorkPageParam'
import Page from './definitions/Page'
import UnAuthStaffPageBO from './definitions/UnAuthStaffPageBO'

export class WxWorkApi {

  /**
   * 编辑自建应用
   *
   * @param { UpdateAgentREQ } data
   * @reutrn { Promise<void> }
   */
  public static updateAgent(
    data: UpdateAgentREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取企业微信url多个
   *
   * @reutrn { Promise<AgentUrlOuterBO> }
   */
  public static getAgentAppUrl(config?: AxiosRequestConfig): Promise<AgentUrlOuterBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/agent/app_url`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业微信appUrl
   *
   * @reutrn { Promise<PlatformConfiguration> }
   */
  public static getWxAppUrl(config?: AxiosRequestConfig): Promise<PlatformConfiguration> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/app_url`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 企业微信认证详情（先调用此接口判断企业是否绑定以及绑定的步骤）
   *
   * @reutrn { Promise<AuthMessageBO> }
   */
  public static getAuthMessage(config?: AxiosRequestConfig): Promise<AuthMessageBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/auth/message`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取企业的永久授权码
   *
   * @param { AuthCodeREQ } data
   * @reutrn { Promise<void> }
   */
  public static getAuthCode(
    data: AuthCodeREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/auth_code`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取第三方应用授权绑定地址
   *
   * @reutrn { Promise<string> }
   */
  public static getAuthUrl(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/auth_url`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 修改步骤
   *
   * @param { WxWorkChangeStepParam } data
   * @reutrn { Promise<void> }
   */
  public static changeStep(
    data: WxWorkChangeStepParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/change/step/${data.num}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取会话留存配置 返回null代表未配置
   *
   * @reutrn { Promise<ChatConfigBO> }
   */
  public static getChatConfgi(config?: AxiosRequestConfig): Promise<ChatConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/chat_config`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 修改/增加会话留存配置
   *
   * @param { ChatConfigBO } data
   * @reutrn { Promise<void> }
   */
  public static setChatConfgi(
    data: ChatConfigBO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/chat_config`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 添加企业微信自建应用
   *
   * @param { CreateWeChatAgentREQ } data
   * @reutrn { Promise<void> }
   */
  public static createSelf(
    data: CreateWeChatAgentREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/create/self`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取事件接收回调
   *
   * @reutrn { Promise<EventReceiveBO> }
   */
  public static getEventReceive(config?: AxiosRequestConfig): Promise<EventReceiveBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/get/event_receive`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 定时获取同步状态(2秒一次)
   *
   * @reutrn { Promise<SyncParamBO> }
   */
  public static syncStatus(config?: AxiosRequestConfig): Promise<SyncParamBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/heart/sync/status`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取当前ip
   *
   * @reutrn { Promise<string> }
   */
  public static getIp(config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/ip`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取公私钥
   *
   * @reutrn { Promise<ChatConfigSecurityBO> }
   */
  public static getKey(config?: AxiosRequestConfig): Promise<ChatConfigSecurityBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/key`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取潜客运营者
   *
   * @reutrn { Promise<string[]> }
   */
  public static laten(config?: AxiosRequestConfig): Promise<string[]> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/laten`,
      method: 'post',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 设置潜客运营者
   *
   * @param { SetLatenREQ } data
   * @reutrn { Promise<void> }
   */
  public static setLaten(
    data: SetLatenREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/setLaten`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 统计关联未关联人数
   *
   * @reutrn { Promise<AuthStaffNumBO> }
   */
  public static statisticAuth(config?: AxiosRequestConfig): Promise<AuthStaffNumBO> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/statistic/auth`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 同步关联客户
   *
   * @reutrn { Promise<void> }
   */
  public static syncCustomer(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/sync/customer`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 同步关联标签
   *
   * @reutrn { Promise<void> }
   */
  public static syncLabel(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/sync/label`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 同步关联员工
   *
   * @reutrn { Promise<void> }
   */
  public static syncStaff(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/sync/staff`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 未关联员工列表
   *
   * @param { WxWorkPageParam } params
   * @reutrn { Promise<Page<UnAuthStaffPageBO>> }
   */
  public static page(
    params: WxWorkPageParam,
    config?: AxiosRequestConfig): Promise<Page<UnAuthStaffPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/wx_work/un_auth`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
