

export default class DeleteLogPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * 员工名称
   */
    public staffName!: string

  /**
   * 开始时间
   */
    public startTime!: number

  /**
   * 结束时间
   */
    public endTime!: number

  /**
   * 1被员工删除 2被客户删除
   */
    public delType!: number

  /**
   * 处理状态 0未处理 1已处理
   */
    public handleStatus!: number

  /**
   * 部门id
   */
    public departmentId!: number

  /**
   * -
   */
    public enterpriseId?: number

}
