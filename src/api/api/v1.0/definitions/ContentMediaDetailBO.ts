

export default class ContentMediaDetailBO {

  /**
   * 收藏状态 1是 0否
   */
    public collectionStatus!: number

  /**
   * 内容封面
   */
    public contentImg!: string

  /**
   * -
   */
    public egroupId!: number

  /**
   * 个人分组id
   */
    public groupId!: number

  /**
   * -
   */
    public id!: number

  /**
   * 素材类型 1图片 2音频 3视频
   */
    public mediaType!: number

  /**
   * 是否同步到企业 1是 0否
   */
    public shared!: number

  /**
   * 素材标题
   */
    public title!: string

  /**
   * 素材类型 1图片 2音频 3视频，管理后台查看detail
   */
    public type!: number

  /**
   * 多媒体url
   */
    public url!: string

  /**
   * 视频首图
   */
    public videoImg!: string

}
