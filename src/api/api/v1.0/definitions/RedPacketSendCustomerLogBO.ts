

export default class RedPacketSendCustomerLogBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 客户id
   */
    public customerId!: number

  /**
   * 客户头像
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
   * 红包金额
   */
    public money!: number

  /**
   * 员工名称
   */
    public operatorName!: string

  /**
   * 微信交易单号
   */
    public orderNumber!: string

  /**
   * 是否领取 1领取 0未领取 2已过期
   */
    public status!: number

  /**
   * 领取时间
   */
    public updateTime!: number

  /**
   * 企业微信id
   */
    public wxUserId!: string

}
