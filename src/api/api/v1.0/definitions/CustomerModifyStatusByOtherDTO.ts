

export default class CustomerModifyStatusByOtherDTO {

  /**
   * 客户id列表
   */
    public cidList?: number[]

  /**
   * 分享人id
   */
    public shareId!: number

  /**
   * 跟进人id
   */
    public staffId?: number[]

  /**
   * 状态 1潜在 2 待分配  3跟进  4公海
   */
    public status?: number

}
