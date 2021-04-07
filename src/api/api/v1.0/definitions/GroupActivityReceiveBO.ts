

export default class GroupActivityReceiveBO {

  /**
   * 完成时间
   */
    public createTime!: number

  /**
   * 客户id
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * 客户状态
   */
    public customerType!: number

  /**
   * 是否有权限加入客户池 true有 false没有
   */
    public hasLimit!: boolean

  /**
   * id
   */
    public id!: number

  /**
   * 分享员工
   */
    public operatorName!: string

  /**
   * 分享人id 数据库属性:int(128)
   */
    public staffId!: number

  /**
   * 是否兑换 1已兑换 0未兑换
   */
    public status!: number

  /**
   * 任务级别
   */
    public taskLevel!: number

}
