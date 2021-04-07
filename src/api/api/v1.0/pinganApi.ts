import axios, { AxiosRequestConfig } from 'axios'
import PinganBandREQ from './definitions/PinganBandREQ'
import PinganQueryREQ from './definitions/PinganQueryREQ'
import PinganCustomerListBO from './definitions/PinganCustomerListBO'

export class PinganApi {

  /**
   * 绑定客户
   *
   * @param { PinganBandREQ } data
   * @reutrn { Promise<void> }
   */
  public static bandCustomer(
    data: PinganBandREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/pingan/customer/band`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 查询客户列表
   *
   * @param { PinganQueryREQ } data
   * @reutrn { Promise<PinganCustomerListBO[]> }
   */
  public static customerList(
    data: PinganQueryREQ,
    config?: AxiosRequestConfig): Promise<PinganCustomerListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/pingan/customer/list`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

}
