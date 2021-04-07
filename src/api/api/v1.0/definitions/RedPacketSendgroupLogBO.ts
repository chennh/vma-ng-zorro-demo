

export default class RedPacketSendgroupLogBO {

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 群id 群红包才有 数据库属性:int(128)
   */
    public groupId!: number

  /**
   * 群名称 群红包才有 数据库属性:varchar(256)
   */
    public groupName!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 红包金额
   */
    public money!: number

  /**
   * 员工名称
   */
    public operatorName!: string

  /**
   * 群红包个数 群红包才有 数据库属性:int(128)
   */
    public packetCount!: number

  /**
   * 1拼手气红包 2普通红包 群红包才有 数据库属性:int(2)
   */
    public packetType!: number

  /**
   * 群红包个数领取数 群红包才有 数据库属性:int(128)
   */
    public receiveCount!: number

}
