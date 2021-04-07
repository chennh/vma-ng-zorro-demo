

export default class ContentActiviteDTO {

  /**
   * 页码
   */
    public current!: number

  /**
   * 创建者id
   */
    public operatorId!: number[]

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 状态 0未开始 1进行中 2结束
   */
    public status!: number[]

  /**
   * 活动名称
   */
    public title?: string

}
