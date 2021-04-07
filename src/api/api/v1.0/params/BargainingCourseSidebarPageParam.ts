

export default class BargainingCourseSidebarPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 活动课程名称
   */
    public name?: string

  /**
   * 活动状态 未开始UNSTART  进行中ONGOING  过期EXPIRDE  结束END
   */
    public status?: string

  /**
   * 排序升序 ASC 排序降序 DESC
   */
    public sortType?: string

}
