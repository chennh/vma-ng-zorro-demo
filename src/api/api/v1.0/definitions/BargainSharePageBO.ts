

export default class BargainSharePageBO {

  /**
   * 助力数
   */
    public count!: number

  /**
   * 发起砍价客户id
   */
    public customerId!: number

  /**
   * 发起砍价客户
   */
    public customerName!: string

  /**
   * 砍价完成时间 数据库属性:datetime
   */
    public finishTime!: number

  /**
   * 我的砍价记录ID
   */
    public id!: number

  /**
   * 是否支付 未支付DIDNOTPAY 已支付HAVETOPAY
   */
    public payStatus!: string

  /**
   * 分享员工
   */
    public staffName!: string

  /**
   * 砍价发起时间
   */
    public startTime!: number

  /**
   * 用户砍价状态
   */
    public status!: string

}
