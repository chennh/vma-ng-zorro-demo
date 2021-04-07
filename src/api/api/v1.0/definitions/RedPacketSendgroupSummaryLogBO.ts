

export default class RedPacketSendgroupSummaryLogBO {

  /**
   * 发送时间
   */
    public createTime!: number

  /**
   * 群名称 群红包才有 数据库属性:varchar(256)
   */
    public groupName!: string

  /**
   * 剩余红包
   */
    public leaveMoney!: number

  /**
   * 红包总金额
   */
    public money!: number

  /**
   * 群红包总个数 数据库属性:int(128)
   */
    public packetCount!: number

  /**
   * 群红包领取数
   */
    public receiveCount!: number

}
