import axios, { AxiosRequestConfig } from 'axios'
import ContentgoodsorderPageParam from './params/ContentgoodsorderPageParam'
import Page from './definitions/Page'
import ContentGoodsOrderBO from './definitions/ContentGoodsOrderBO'
import ContentGoodsOrderAddREQ from './definitions/ContentGoodsOrderAddREQ'
import ContentGoodsOrderUpdateREQ from './definitions/ContentGoodsOrderUpdateREQ'
import ContentgoodsorderSummaryParam from './params/ContentgoodsorderSummaryParam'
import ContentGoodsOrderSummaryBO from './definitions/ContentGoodsOrderSummaryBO'
import ContentgoodsorderDetailParam from './params/ContentgoodsorderDetailParam'
import ContentgoodsorderDelParam from './params/ContentgoodsorderDelParam'

export class ContentgoodsorderApi {

  /**
   * 获取订单表分页
   *
   * @param { ContentgoodsorderPageParam } params
   * @reutrn { Promise<Page<ContentGoodsOrderBO>> }
   */
  public static page(
    params: ContentgoodsorderPageParam,
    config?: AxiosRequestConfig): Promise<Page<ContentGoodsOrderBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增订单表
   *
   * @param { ContentGoodsOrderAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ContentGoodsOrderAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑订单表
   *
   * @param { ContentGoodsOrderUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ContentGoodsOrderUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取订单表分页
   *
   * @param { ContentgoodsorderSummaryParam } params
   * @reutrn { Promise<ContentGoodsOrderSummaryBO> }
   */
  public static summary(
    params: ContentgoodsorderSummaryParam,
    config?: AxiosRequestConfig): Promise<ContentGoodsOrderSummaryBO> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder/summary/${params.customerId}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取订单表详情
   *
   * @param { ContentgoodsorderDetailParam } params
   * @reutrn { Promise<ContentGoodsOrderUpdateREQ> }
   */
  public static detail(
    params: ContentgoodsorderDetailParam,
    config?: AxiosRequestConfig): Promise<ContentGoodsOrderUpdateREQ> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除订单表信息
   *
   * @param { ContentgoodsorderDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: ContentgoodsorderDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/contentgoodsorder/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
