

export default class MissionAddREQ {

  /**
   * 任务内容（存json字符串
   */
    public attribute!: string

  /**
   * 开始时间
   */
    public beginTime?: number

  /**
   * 创建类型 1我创建的 2我待办的
   */
    public createType?: number

  /**
   * 客户ID
   */
    public customerIds?: number[]

  /**
   * 任务结束时间
   */
    public endTime?: number

  /**
   * 是否跟进人处理 1是（无跟进人由指定处理人处理） 0否
   */
    public handleFollower!: number

  /**
   * 跟进人（员工id）
   */
    public handleIds?: number[]

  /**
   * 发送内容类型 0其它 4分享文章5分享表单6分享文件7分享商品8文本
   */
    public sendType?: number

  /**
   * 分享目标人数
   */
    public shareTargetNum?: number

  /**
   * 目标ID(如果是分享的任务需要传 例如文章ID表单ID等)
   */
    public targetResourcesId?: number

  /**
   * 文本内容
   */
    public textContent?: string

  /**
   * 任务类型 0其它1打电话2发微信3发短信4分享文章5分享表单6分享文件7分享商品
   */
    public type?: number

}
