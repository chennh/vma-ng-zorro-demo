

export default class GroupBuyingDetailBO {

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * 商品成团人数
   */
    public groupBuyingPeople!: number

  /**
   * 商品拼团价
   */
    public groupBuyingPrice!: number

  /**
   * 商品拼团时间
   */
    public groupBuyingTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 拼团活动名称
   */
    public name!: string

  /**
   * 商品图片
   */
    public productImage!: string

  /**
   * 商品库存
   */
    public productInventory!: number

  /**
   * 商品原价
   */
    public productPrice!: number

  /**
   * 活动规则
   */
    public rule!: string

  /**
   * 分享封面图片
   */
    public shareImage!: string

  /**
   * 分享摘要
   */
    public shareSummary!: string

  /**
   * 分享标题
   */
    public shareTitle!: string

  /**
   * 展示状态
   */
    public show!: boolean

  /**
   * 活动开始时间
   */
    public startTime!: number

}
