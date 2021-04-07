import axios, { AxiosRequestConfig } from 'axios'
import ActivityGroupBuyingConfigUpdateREQ from './definitions/ActivityGroupBuyingConfigUpdateREQ'
import ActivityGroupBuyingConfigBO from './definitions/ActivityGroupBuyingConfigBO'

export class GroupBuyingConfigApi {

  /**
   * 拼团首页配置
   *
   * @param { ActivityGroupBuyingConfigUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ActivityGroupBuyingConfigUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying_config/edit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 拼团首页配置
   *
   * @reutrn { Promise<ActivityGroupBuyingConfigBO> }
   */
  public static homePageSetting(config?: AxiosRequestConfig): Promise<ActivityGroupBuyingConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/group_buying_config/home_page_setting`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
