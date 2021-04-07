import ContentGoodOrderDTO from './ContentGoodOrderDTO'


export default class ContentGoodsOrderAddREQ {

  /**
   * 商品信息
   */
    public contentGoodOrderDtos?: ContentGoodOrderDTO[]

  /**
   * 客户id 数据库属性:int(11)
   */
    public customerId!: number

  /**
   * 成交员工id 数据库属性:int(128)
   */
    public operatorId!: number

  /**
   * 成交时间 数据库属性:datetime
   */
    public orderTime?: number

  /**
   * -
   */
    public price?: number

  /**
   * 备注 数据库属性:varchar(256)
   */
    public remark?: string

  /**
   * 1成交 0未成交 数据库属性:int(11)
   */
    public status!: number

}
