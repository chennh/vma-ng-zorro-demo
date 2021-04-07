

export default class ContentAuditLogPageBO {

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 内容标题
   */
    public contentTitle!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * -
   */
    public id!: number

  /**
   * 多媒体类型 素材类型 1图片 2音频 3视频
   */
    public mediaType!: number

  /**
   * 创建人
   */
    public operatorName!: string

  /**
   * 预览地址
   */
    public previewUrl!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 是否同步到企业 1是 0否
   */
    public shared!: number

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status!: number

  /**
   * 内容类型1文章2文件3表单4商品7链接8小程序9邀请有利10海报11群打卡13多媒体
   */
    public type!: number

  /**
   * 审核时间
   */
    public updateTime!: number

}
