

export default class SensitiveWordInfoDetailBO {

  /**
   * 创建者名称
   */
    public createStaffName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 今日触发次数
   */
    public dayTriggerNum!: number

  /**
   * 今日触发员工数
   */
    public dayTriggerStaffNum!: number

  /**
   * 分组ID
   */
    public groupId!: number

  /**
   * -
   */
    public id!: number

  /**
   * 总触发次数
   */
    public totalTriggerNum!: number

  /**
   * 总触发员工数
   */
    public totalTriggerStaffNum!: number

  /**
   * 敏感词
   */
    public wordList!: string[]

}
