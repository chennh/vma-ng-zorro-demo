

export default class RedPacketTemplateEditREQ {

  /**
   * id
   */
    public id?: number

  /**
   * 红包企业logo 数据库属性:varchar(128)
   */
    public logo!: string

  /**
   * 红包金额 数据库属性:decimal(10,2)
   */
    public money!: number

  /**
   * 红包企业名称 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 红包使用场景 1发送单个客户 2发送客户群 3不限制 数据库属性:int(2)
   */
    public type!: number

}
