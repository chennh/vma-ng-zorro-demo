

export default class GroupActivityCustomerBO {

  /**
   * 连续打卡天数
   */
    public continuousCount!: number

  /**
   * 打卡时间
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
   * 分享员工
   */
    public operatorName!: string

  /**
   * 分享人id 数据库属性:int(128)
   */
    public staffId!: number

  /**
   * 累计打卡天数
   */
    public sumCount!: number

}
