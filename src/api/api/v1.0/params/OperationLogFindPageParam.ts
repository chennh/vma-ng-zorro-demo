

export default class OperationLogFindPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 员工ID
   */
    public staffId?: number

  /**
   * 开始时间
   */
    public beginCreateTime?: number

  /**
   * 结束时间
   */
    public endCreateTime?: number

  /**
   * 日志类型
   */
    public type?: string

}
