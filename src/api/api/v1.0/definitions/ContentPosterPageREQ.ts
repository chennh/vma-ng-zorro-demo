

export default class ContentPosterPageREQ {

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
   * 海报名称
   */
    public postName?: string

  /**
   * 是否同步到企业 1是 0否
   */
    public shared!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status?: number

}
