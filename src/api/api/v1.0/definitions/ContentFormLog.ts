

export default class ContentFormLog {

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 客户id 数据库属性:int(11)
   */
    public customerId!: number

  /**
   * 企业id 数据库属性:int(11)
   */
    public enterpriseId!: number

  /**
   * 表单内容 数据库属性:text
   */
    public ext!: string

  /**
   * 表单id 数据库属性:int(11)
   */
    public formId!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 分享人id 数据库属性:int(11)
   */
    public staffId!: number

  /**
   * 内容浏览id 数据库属性:int(11)
   */
    public viewId!: number

}
