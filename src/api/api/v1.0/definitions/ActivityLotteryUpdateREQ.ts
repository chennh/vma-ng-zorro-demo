

export default class ActivityLotteryUpdateREQ {

  /**
   * id 数据库属性:int(11)
   */
    public id!: number

  /**
   * 客服二维码 数据库属性:varchar(255)
   */
    public qrcode!: string

  /**
   * 活动规则 数据库属性:varchar(255)
   */
    public rule!: string

  /**
   * 分享封面图片 数据库属性:varchar(255)
   */
    public shareImage!: string

  /**
   * 分享摘要 数据库属性:varchar(255)
   */
    public shareSummary!: string

  /**
   * 分享标题 数据库属性:varchar(255)
   */
    public shareTitle!: string

  /**
   * 是否显示参与人数 数据库属性:bit(1)
   */
    public showParticipants!: boolean

}
