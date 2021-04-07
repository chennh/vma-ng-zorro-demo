import ServiceType from './ServiceType'


export default class WxMaExpressDelivery {

  /**
   * -
   */
    public canGetQuota!: number

  /**
   * -
   */
    public canUseCash!: number

  /**
   * -
   */
    public cashBizId!: string

  /**
   * -
   */
    public deliveryId!: string

  /**
   * -
   */
    public deliveryName!: string

  /**
   * -
   */
    public serviceType!: ServiceType[]

}
