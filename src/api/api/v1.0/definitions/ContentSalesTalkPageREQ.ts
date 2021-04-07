

export default class ContentSalesTalkPageREQ {

  /**
   * 页码
   */
    public current!: number

  /**
   * -
   */
    public egroupId?: number

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 是否同步到企业 1是 0否
   */
    public shared!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 话术标题
   */
    public title?: string

}
