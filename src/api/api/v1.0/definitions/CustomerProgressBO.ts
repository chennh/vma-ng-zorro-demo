

export default class CustomerProgressBO {

  /**
   * 已接通电话
   */
    public callConnected!: number

  /**
   * 未接通电话数
   */
    public callUnconnected!: number

  /**
   * 客户ID
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * 完成时间
   */
    public finishTime!: number

  /**
   * 客户头像
   */
    public headIcon!: string

  /**
   * 任务进度ID
   */
    public progressId!: number

  /**
   * 员工ID（处理人ID）
   */
    public staffId!: number

  /**
   * 处理人姓名
   */
    public staffName!: string

  /**
   * 任务状态 0未完成 1已完成 2已忽略
   */
    public status!: number

}
