

export default class ContentPosterBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 0本地上传1手机海报2每日一签3手机邀请函4微信朋友圈5电子名片6信息图表7历程计划
   */
    public imgType!: number

  /**
   * 海报名称 数据库属性:varchar(128)
   */
    public postName!: string

  /**
   * 最终生成的图片
   */
    public previewUrl!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status!: number

  /**
   * 审核时间
   */
    public updateTime!: number

}
