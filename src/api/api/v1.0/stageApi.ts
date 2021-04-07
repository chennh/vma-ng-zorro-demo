import axios, { AxiosRequestConfig } from 'axios'
import AllParamBO from './definitions/AllParamBO'
import StageParamByKeyBO from './definitions/StageParamByKeyBO'
import UpdateStageDTO from './definitions/UpdateStageDTO'

export class StageApi {

  /**
   * 获取跟进字段列表
   *
   * @reutrn { Promise<AllParamBO[]> }
   */
  public static stageList(config?: AxiosRequestConfig): Promise<AllParamBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/stage/param/stage/list`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取跟进字段列表
   *
   * @reutrn { Promise<StageParamByKeyBO> }
   */
  public static stageListByKey(config?: AxiosRequestConfig): Promise<StageParamByKeyBO> {
    return axios(Object.assign({
      url: `/api/v1.0/stage/param/stage/list/key`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 更新跟进数据
   *
   * @param { UpdateStageDTO[] } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateStageDTO[],
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/stage/param/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
