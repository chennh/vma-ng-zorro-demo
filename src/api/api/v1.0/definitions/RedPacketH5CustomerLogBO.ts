

export default class RedPacketH5CustomerLogBO {

  /**
   * int(11)
   */
    public id!: number

  /**
   * 红包企业logo
   */
    public logo!: string

  /**
   * 红包金额
   */
    public money!: number

  /**
   * 红包企业名称 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 是否可发送 true可发 false达到每日上限不可发送
   */
    public sendable!: boolean

  /**
   * 红包使用场景 1发送单个客户 2发送客户群 3不限制
   */
    public type!: number

}
