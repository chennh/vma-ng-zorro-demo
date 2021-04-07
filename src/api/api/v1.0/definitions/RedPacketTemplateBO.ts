

export default class RedPacketTemplateBO {

  /**
   * 创建时间
   */
    public createTime!: number

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
   * 创建者
   */
    public operatorName!: string

  /**
   * 状态 1启用 0禁用
   */
    public status!: number

  /**
   * 红包使用场景 1发送单个客户 2发送客户群 3不限制
   */
    public type!: number

  /**
   * 使用次数
   */
    public useCount!: number

}
