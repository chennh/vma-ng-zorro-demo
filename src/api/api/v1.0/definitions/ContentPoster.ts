

export default class ContentPoster {

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime?: number

  /**
   * -
   */
    public egroupId?: number

  /**
   * 企业id 数据库属性:int(11)
   */
    public enterpriseId?: number

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 数据库属性:int(11)
   */
    public id?: number

  /**
   * 0本地上传1手机海报2每日一签3手机邀请函4微信朋友圈5电子名片6信息图表7历程计划
   */
    public imgType?: number

  /**
   * 图片url 数据库属性:varchar(128)
   */
    public imgUrl?: string

  /**
   * 员工id 数据库属性:int(128)
   */
    public operatorId?: number

  /**
   * 海报名称 数据库属性:varchar(128)
   */
    public postName?: string

  /**
   * 最终生成的图片 数据库属性:varchar(128)
   */
    public previewUrl!: string

  /**
   * 二维码信息 数据库属性:varchar(128)
   */
    public qrCodeInfo?: string

  /**
   * 二维码类型 0无二维码 1文章 2文件 3表单 4商品 5名片 6微小站 7 h5链接 8小程序 9邀请有礼 10海报  101外部链接 102上传二维码
   */
    public qrCodeType?: string

  /**
   * 是否同步到企业 1是 0否 数据库属性:int(11)
   */
    public shared?: number

  /**
   * 状态 1启用 0禁用 数据库属性:int(11)
   */
    public status?: number

  /**
   * 更新时间 数据库属性:datetime
   */
    public updateTime?: number

  /**
   * 本地图片url 数据库属性:varchar(128)
   */
    public uploadUrl?: string

}
