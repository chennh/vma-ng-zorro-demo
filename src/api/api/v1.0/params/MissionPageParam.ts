

export default class MissionPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 任务类型 0其它1打电话2发微信3发短信4分享文章5分享表单6分享文件7分享商品
   */
    public type?: number

  /**
   * 状态 1未开始 2进行中 3已完成 4已逾期 5已结束
   */
    public status?: number

}
