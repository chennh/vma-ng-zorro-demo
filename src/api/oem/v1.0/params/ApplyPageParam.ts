

export default class ApplyPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * -1申请未审核 0试用成功 -2审核失败
   */
    public status?: number

  /**
   * 申请开始时间
   */
    public beginApplyTime?: number

  /**
   * 申请结束时间
   */
    public endApplyTime?: number

}
