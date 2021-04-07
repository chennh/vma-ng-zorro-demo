

export default class LotteryPageParam {

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
    public name?: string

  /**
   * 活动状态 未开始NOT_START  进行中ONGOING  结束END
   */
    public status?: string

}
