

export default class ContentArticlesStaffRela {

  /**
   * 文章id 数据库属性:int(128)
   */
    public articlesId!: number

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 企业id 数据库属性:int(11)
   */
    public enterpriseId!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 创建者id 数据库属性:int(128)
   */
    public operatorId!: number

  /**
   * 分享uuid 用于生成二维码 数据库属性:varchar(128)
   */
    public shareUuid!: string

  /**
   * 是否展示咨询入口 1是 0否 数据库属性:int(128)
   */
    public showStaffCard!: number

  /**
   * 微名片id 数据库属性:int(128)
   */
    public staffCardId!: number

  /**
   * 状态 1启用 0禁用 数据库属性:int(11)
   */
    public status!: number

  /**
   * 更新时间 数据库属性:datetime
   */
    public updateTime!: number

}
