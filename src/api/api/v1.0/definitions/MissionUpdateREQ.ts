

export default class MissionUpdateREQ {

  /**
   * 任务内容（存json字符串
   */
    public attribute!: string

  /**
   * 客户ID
   */
    public customerIds?: number[]

  /**
   * 跟进人（员工id）
   */
    public handleIds?: number[]

  /**
   * 任务ID
   */
    public id?: number

  /**
   * 发送内容类型 0其它 4分享文章5分享表单6分享文件7分享商品8文本
   */
    public sendType?: number

  /**
   * 目标ID(如果是分享的任务需要传 例如文章ID表单ID等)
   */
    public targetResourcesId?: number

  /**
   * 文本内容
   */
    public textContent?: string

  /**
   * 任务类型
   */
    public type?: number

}
