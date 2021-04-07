

export default class GroupSopSidebarPersonSopPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 1已完成 0未完成
   */
    public status?: number

  /**
   * 1群侧边栏sop 2个人侧边栏sop
   */
    public sopType?: number

  /**
   * 企业微信群ID（sopType = 1 时必传）
   */
    public chatId?: string

  /**
   * 筛选的开始时间
   */
    public beginTime?: number

  /**
   * 筛选的结束时间
   */
    public endTime?: number

}
