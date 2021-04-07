

export default class GroupWarningPageBO {

  /**
   * 行为提醒
   */
    public behaviorTypeNames!: string

  /**
   * 创建者名称
   */
    public createStaffName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * -
   */
    public id!: number

  /**
   * 关键字集合
   */
    public keyWordList!: string[]

  /**
   * 方案名称
   */
    public name!: string

  /**
   * 状态 0关闭 1开启
   */
    public status!: number

}
