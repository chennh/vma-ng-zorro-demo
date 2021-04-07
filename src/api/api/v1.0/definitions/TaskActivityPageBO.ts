

export default class TaskActivityPageBO {

  /**
   * 活动名称
   */
    public activityName!: string

  /**
   * 活动状态 1进行中 2结束
   */
    public activityStatus!: number

  /**
   * 创建者人名称
   */
    public createStaffName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * 扫码助力数量
   */
    public helpNum!: number

  /**
   * id
   */
    public id!: number

  /**
   * 参与活动数量
   */
    public joinNum!: number

}
