import ServiceType from './ServiceType'


export default class WxMaExpressAccount {

  /**
   * -
   */
    public alias!: string

  /**
   * -
   */
    public bizId!: string

  /**
   * -
   */
    public createTime!: number

  /**
   * -
   */
    public deliveryId!: string

  /**
   * -
   */
    public quotaNum!: number

  /**
   * -
   */
    public quotaUpdateTime!: number

  /**
   * -
   */
    public remarkContent!: string

  /**
   * -
   */
    public remarkWrongMsg!: string

  /**
   * -
   */
    public serviceType!: ServiceType[]

  /**
   * -
   */
    public statusCode!: number

  /**
   * -
   */
    public updateTime!: number

}
