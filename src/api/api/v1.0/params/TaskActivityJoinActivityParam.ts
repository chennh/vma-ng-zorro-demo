

export default class TaskActivityJoinActivityParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 活动ID
   */
    public activityId!: number

  /**
   * 活动状态 -1未完成 0进行中 1完成
   */
    public status?: number

}
