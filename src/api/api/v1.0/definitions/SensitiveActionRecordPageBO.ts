

export default class SensitiveActionRecordPageBO {

  /**
   * 敏感操作 1撤回 2超时
   */
    public actionType!: number

  /**
   * 客户ID
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * 客户微信ID
   */
    public customerWxId!: string

  /**
   * 处理备注
   */
    public executeRemarks!: string

  /**
   * 处理人名称
   */
    public executeStaffName!: string

  /**
   * 处理时间
   */
    public executeTime!: number

  /**
   * 处理类型 1合规 2违规 3忽略
   */
    public executeType!: number

  /**
   * -
   */
    public id!: number

  /**
   * 消息ID
   */
    public msgId!: string

  /**
   * 消息时间
   */
    public msgTime!: number

  /**
   * 员工ID
   */
    public staffId!: number

  /**
   * 员工名称
   */
    public staffName!: string

  /**
   * 员工微信ID
   */
    public staffWxId!: string

  /**
   * 处理状态 0否 1是
   */
    public status!: number

}
