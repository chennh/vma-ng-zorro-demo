import axios, { AxiosRequestConfig } from 'axios'
import AreaAreaListParam from './params/AreaAreaListParam'
import AreaInfo from './definitions/AreaInfo'
import AreaCityListParam from './params/AreaCityListParam'
import CityInfo from './definitions/CityInfo'
import AreaProvinceListParam from './params/AreaProvinceListParam'
import ProvinceInfo from './definitions/ProvinceInfo'
import ProvinceInfoBO from './definitions/ProvinceInfoBO'

export class AreaApi {

  /**
   * 获取地区列表
   *
   * @param { AreaAreaListParam } params
   * @reutrn { Promise<AreaInfo[]> }
   */
  public static areaList(
    params: AreaAreaListParam,
    config?: AxiosRequestConfig): Promise<AreaInfo[]> {
    return axios(Object.assign({
      url: `/common/v1.0/area/area`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取市列表
   *
   * @param { AreaCityListParam } params
   * @reutrn { Promise<CityInfo[]> }
   */
  public static cityList(
    params: AreaCityListParam,
    config?: AxiosRequestConfig): Promise<CityInfo[]> {
    return axios(Object.assign({
      url: `/common/v1.0/area/city`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取省列表
   *
   * @param { AreaProvinceListParam } params
   * @reutrn { Promise<ProvinceInfo[]> }
   */
  public static provinceList(
    params: AreaProvinceListParam,
    config?: AxiosRequestConfig): Promise<ProvinceInfo[]> {
    return axios(Object.assign({
      url: `/common/v1.0/area/province`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取省市表
   *
   * @reutrn { Promise<ProvinceInfoBO[]> }
   */
  public static provinceAndCity(config?: AxiosRequestConfig): Promise<ProvinceInfoBO[]> {
    return axios(Object.assign({
      url: `/common/v1.0/area/provinceAndCity`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

}
