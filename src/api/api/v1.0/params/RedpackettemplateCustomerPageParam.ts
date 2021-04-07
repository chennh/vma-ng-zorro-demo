

export default class RedpackettemplateCustomerPageParam {

  /**
   * 发送开始时间
   */
    public beginTime?: number

  /**
   * 发送结束时间
   */
    public endTime?: number

  /**
   * 是否领取 1领取 0未领取 2已过期
   */
    public status?: number

  /**
   * 发送员工id
   */
    public operatorId?: number

  /**
   * 红包最高金额
   */
    public moneyMax?: number

  /**
   * 红包最低金额
   */
    public moneyMin?: number

  /**
   * 红包模板id
   */
    public templateId?: number

  /**
   * 客户名称
   */
    public customerName?: string

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

}
