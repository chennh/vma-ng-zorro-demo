

export default class RedpackettemplateGroupPageParam {

  /**
   * 发送开始时间
   */
    public beginTime?: number

  /**
   * 发送结束时间
   */
    public endTime?: number

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
   * 群名称 群红包才有 数据库属性:varchar(256)
   */
    public groupName?: string

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

}
