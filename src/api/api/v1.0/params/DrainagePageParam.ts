

export default class DrainagePageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 状态0待添加1已添加 -1待分配
   */
    public status?: number

  /**
   * 员工名称
   */
    public staffName?: string

}
