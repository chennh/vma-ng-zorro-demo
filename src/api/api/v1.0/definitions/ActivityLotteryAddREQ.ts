import ActivityLotteryPrizeDTO from './ActivityLotteryPrizeDTO'


export default class ActivityLotteryAddREQ {

  /**
   * 抽奖机会次数 数据库属性:int(11)
   */
    public count!: number

  /**
   * 活动结束时间 数据库属性:datetime
   */
    public endTime!: number

  /**
   * 抽奖机会类型 数据库属性:varchar(255)
   */
    public lotteryChance!: string

  /**
   * 活动名称 数据库属性:varchar(255)
   */
    public name!: string

  /**
   * 抽奖奖品
   */
    public prizeList!: ActivityLotteryPrizeDTO[]

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

  /**
   * 活动开始时间 数据库属性:datetime
   */
    public startTime!: number

  /**
   * 活动状态 数据库属性:varchar(255)
   */
    public status!: string

}
