

export default class CustomerParamTitleBO {

  /**
   * 添加渠道
   */
    public addSource!: string

  /**
   * 协助人，多个逗号隔开
   */
    public assistantId!: string

  /**
   * 失败跟进id 数据库属性:int(11)
   */
    public failStageOption!: string

  /**
   * 跟进人 数据库属性:int(11)
   */
    public followerId!: string

  /**
   * 无效选项id 数据库属性:int(11)
   */
    public invalidOption!: string

  /**
   * 输单选项id 数据库属性:int(11)
   */
    public loseOption!: string

  /**
   * 跟进阶段id 数据库属性:int(11)
   */
    public stageOption!: string

  /**
   * 微信添加人
   */
    public wxFollowerNick!: string

}
