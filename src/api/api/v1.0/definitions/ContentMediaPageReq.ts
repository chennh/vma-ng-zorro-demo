

export default class ContentMediaPageReq {

  /**
   * 页码
   */
    public current!: number

  /**
   * -
   */
    public egroupId?: number

  /**
   * -
   */
    public egroupIds?: number[]

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
   * 状态 0未审核 1审核通过 2审核不通过
   */
    public status?: number

  /**
   * 话术标题
   */
    public title?: string

  /**
   * 素材类型 1图片 2音频 3视频
   */
    public type?: number

}
