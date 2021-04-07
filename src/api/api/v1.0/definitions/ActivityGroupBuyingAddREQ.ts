

export default class ActivityGroupBuyingAddREQ {

  /**
   * 活动结束时间 数据库属性:datetime
   */
    public endTime!: number

  /**
   * 商品成团人数 数据库属性:int(11)
   */
    public groupBuyingPeople!: number

  /**
   * 商品拼团价 数据库属性:int(11)
   */
    public groupBuyingPrice!: number

  /**
   * 商品拼团时间 数据库属性:int(11)
   */
    public groupBuyingTime!: number

  /**
   * 拼团活动名称 数据库属性:varchar(255)
   */
    public name!: string

  /**
   * 商品图片 数据库属性:varchar(255)
   */
    public productImage!: string

  /**
   * 商品库存 数据库属性:int(11)
   */
    public productInventory!: number

  /**
   * 商品原价 数据库属性:int(11)
   */
    public productPrice!: number

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

  /**
   * 活动开始时间 数据库属性:datetime
   */
    public startTime!: number

  /**
   * 商品拼团成功次数 数据库属性:int(11)
   */
    public successNum!: number

}
