

export default class WeworkchatPageParam {

  /**
   * 用户ID（企业微信中的账号）
   */
    public userId?: string

  /**
   * 好友ID
   */
    public friendId?: string

  /**
   * 开始时间
   */
    public startTime?: number

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * 消息类型
   */
    public msgType?: string

  /**
   * 关键字
   */
    public keyword?: string

  /**
   * 群ID
   */
    public roomId?: string

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

}
