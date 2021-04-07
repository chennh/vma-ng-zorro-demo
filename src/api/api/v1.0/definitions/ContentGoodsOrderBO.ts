import ContentGoodOrderDTO from './ContentGoodOrderDTO'


export default class ContentGoodsOrderBO {

  /**
   * 商品信息
   */
    public contentGoodOrderDtos!: ContentGoodOrderDTO[]

  /**
   * int(11)
   */
    public id!: number

  /**
   * 成交员工id
   */
    public operatorName!: string

  /**
   * 订单号
   */
    public orderNumber!: string

  /**
   * 成交时间
   */
    public orderTime!: number

  /**
   * 成交金额
   */
    public price!: number

  /**
   * 备注
   */
    public remark!: string

  /**
   * 1成交 0未成交
   */
    public status!: number

}
