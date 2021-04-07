

export default class RedPacketGroupReceiveLogBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 客户头像 数据库属性:varchar(256)
   */
    public customerImg!: string

  /**
   * 客户昵称
   */
    public customerName!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 领取红包金额
   */
    public money!: number

  /**
   * 微信交易单号
   */
    public orderNumber!: string

  /**
   * 企业微信id
   */
    public wxUserId!: string

}
