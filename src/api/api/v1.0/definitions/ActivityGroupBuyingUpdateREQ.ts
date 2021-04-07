

export default class ActivityGroupBuyingUpdateREQ {

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 商品图片 数据库属性:varchar(255)
   */
    public productImage!: string

  /**
   * 活动规则 数据库属性:varchar(255)
   */
    public rule!: string

  /**
   * 分享封面图片 数据库属性:varchar(255)
   */
    public shareImage!: string

  /**
   * 分享摘要 数据库属性:varchar(255)
   */
    public shareSummary!: string

  /**
   * 分享标题 数据库属性:varchar(255)
   */
    public shareTitle!: string

  /**
   * 展示状态 数据库属性:bit(1)
   */
    public show!: boolean

}
