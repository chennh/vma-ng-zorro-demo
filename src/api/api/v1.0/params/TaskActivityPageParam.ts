

export default class TaskActivityPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 活动名称
   */
    public activityName?: string

  /**
   * 活动状态 1进行中 2结束
   */
    public activityStatus?: number

}
