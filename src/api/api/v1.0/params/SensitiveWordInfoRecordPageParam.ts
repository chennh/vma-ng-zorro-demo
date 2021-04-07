

export default class SensitiveWordInfoRecordPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 敏感词ID
   */
    public sensitiveId!: number

  /**
   * 员工ID
   */
    public staffId?: number

  /**
   * 触发开始时间
   */
    public startMsgTime?: number

  /**
   * 触发结束时间
   */
    public endMsgTime?: number

  /**
   * 处理状态 0否 1是
   */
    public status?: number

  /**
   * 处理类型 1合规 2违规 3忽略
   */
    public executeType?: number

}
