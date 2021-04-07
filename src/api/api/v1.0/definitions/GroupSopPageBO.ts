

export default class GroupSopPageBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 创建者名称
   */
    public operatorName!: string

  /**
   * -
   */
    public ruleId!: number

  /**
   * 规则名称
   */
    public ruleName!: string

  /**
   * 执行员工id集合
   */
    public staffIds!: number[]

  /**
   * 执行员工姓名集合
   */
    public staffNames!: string[]

  /**
   * 状态 1开始 0关闭
   */
    public status!: number

}
