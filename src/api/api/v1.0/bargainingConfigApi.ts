import axios, { AxiosRequestConfig } from 'axios'
import ActivityBargainConfigUpdateREQ from './definitions/ActivityBargainConfigUpdateREQ'
import ActivityBargainConfigBO from './definitions/ActivityBargainConfigBO'

export class BargainingConfigApi {

  /**
   * 砍价课程首页配置
   *
   * @param { ActivityBargainConfigUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ActivityBargainConfigUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_config/edit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 后台砍价课程首页配置
   *
   * @reutrn { Promise<ActivityBargainConfigBO> }
   */
  public static homePageSetting(config?: AxiosRequestConfig): Promise<ActivityBargainConfigBO> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_config/home_page_setting`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
