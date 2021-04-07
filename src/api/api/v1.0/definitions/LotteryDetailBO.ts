import ActivityLotteryPrizeBO from './ActivityLotteryPrizeBO'


export default class LotteryDetailBO {

  /**
   * 抽奖机会次数
   */
    public count!: number

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * id
   */
    public id!: number

  /**
   * 今日是否已分享
   */
    public isShare!: boolean

  /**
   * 抽奖机会类型
   */
    public lotteryChance!: string

  /**
   * 可抽奖次数
   */
    public lotteryCount!: number

  /**
   * 活动名称
   */
    public name!: string

  /**
   * 参与人数
   */
    public participants!: number

  /**
   * 奖品
   */
    public prizeList!: ActivityLotteryPrizeBO[]

  /**
   * 客服二维码
   */
    public qrcode!: string

  /**
   * 活动规则
   */
    public rule!: string

  /**
   * 分享封面图片
   */
    public shareImage!: string

  /**
   * 分享摘要
   */
    public shareSummary!: string

  /**
   * 分享标题
   */
    public shareTitle!: string

  /**
   * 是否显示参与人数
   */
    public showParticipants!: boolean

  /**
   * 活动开始时间
   */
    public startTime!: number

  /**
   * 活动状态
   */
    public status!: string

}
