

export default class ContentMediaPageBO {

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * -
   */
    public id!: number

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 状态 0未审核 1审核通过 2审核不通过
   */
    public status!: number

  /**
   * 素材标题
   */
    public title!: string

  /**
   * 素材类型 1图片 2音频 3视频
   */
    public type!: number

  /**
   * 审核时间
   */
    public updateTime!: number

  /**
   * 素材链接
   */
    public url!: string

  /**
   * 视频首图
   */
    public videoImg!: string

}
