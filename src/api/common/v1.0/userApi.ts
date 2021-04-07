import axios, { AxiosRequestConfig } from 'axios'
import UserGetChatDetailParam from './params/UserGetChatDetailParam'
import GroupChat from './definitions/GroupChat'
import SelectUserReq from './definitions/SelectUserReq'
import UserDetailBO from './definitions/UserDetailBO'

export class UserApi {

  /**
   * 查询群聊信息
   *
   * @param { UserGetChatDetailParam } params
   * @reutrn { Promise<GroupChat> }
   */
  public static getChatDetail(
    params: UserGetChatDetailParam,
    config?: AxiosRequestConfig): Promise<GroupChat> {
    return axios(Object.assign({
      url: `/common/v1.0/user/chat/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 查询客户
   *
   * @param { SelectUserReq } data
   * @reutrn { Promise<UserDetailBO> }
   */
  public static selectUser(
    data: SelectUserReq,
    config?: AxiosRequestConfig): Promise<UserDetailBO> {
    return axios(Object.assign({
      url: `/common/v1.0/user/customer`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

}
