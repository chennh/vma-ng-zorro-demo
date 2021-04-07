import ContentSalesTalkBodyDTO from './ContentSalesTalkBodyDTO'


export default class ContentSalesTalkUpdateREQ {

  /**
   * 话术内容 数据库属性:int(2)
   */
    public bodyJson!: ContentSalesTalkBodyDTO[]

  /**
   * -
   */
    public egroupId?: number

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 关键词，多个用逗号分隔 数据库属性:varchar(128)
   */
    public keyWord!: string

  /**
   * 是否同步到企业 1是 0否 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 内容数
   */
    public talkCount?: number

  /**
   * 话术标题 数据库属性:varchar(128)
   */
    public title!: string

  /**
   * 类型 1.文字 2复合消息 数据库属性:int(1)
   */
    public type?: number

}
