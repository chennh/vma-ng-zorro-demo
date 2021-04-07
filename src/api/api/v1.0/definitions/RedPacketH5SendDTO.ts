

export default class RedPacketH5SendDTO {

  /**
   * 客户id 个人红包才有 数据库属性:int(128)
   */
    public customerId?: number

  /**
   * 客户头像 个人红包才有 数据库属性:varchar(256)
   */
    public customerImg?: string

  /**
   * 客户昵称 个人红包才有 数据库属性:varchar(256)
   */
    public customerName?: string

  /**
   * 群id 群红包才有 数据库属性:int(128)
   */
    public groupId?: number

  /**
   * 群头像 群红包才有 数据库属性:varchar(256)
   */
    public groupImg?: string

  /**
   * 群名称 群红包才有 数据库属性:varchar(256)
   */
    public groupName?: string

  /**
   * 红包文案 数据库属性:int(128)
   */
    public luckyWord!: string

  /**
   * 群红包个数 群红包才有
   */
    public packetCount?: number

  /**
   * 1拼手气红包 2普通红包 群红包才有
   */
    public packetType?: number

  /**
   * 红包模板id 数据库属性:int(128)
   */
    public templateId!: number

  /**
   * 红包范围 1发送单个客户 2发送客户群 数据库属性:int(2)
   */
    public useRange!: number

}
